"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { MatrixCreateForm, MatrixIndexingModeToggle } from "src/features";

import { Container, Typography } from "src/shared";

const MatrixPage = (): JSX.Element => {
  const t = useTranslations("matricesTitle");

  return (
    <Container>
      <Typography.H1 className="mb-8 w-fit border-b-4 border-blue-500 pb-2">
        {t.rich("single", {
          span: (chunks) => <span className="text-blue-400">{chunks}</span>
        })}
      </Typography.H1>

      <div className="max-w-fit">
        <div className="mb-2 flex justify-end">
          <MatrixIndexingModeToggle />
        </div>
        <MatrixCreateForm type="single" />
      </div>
    </Container>
  );
};

export default MatrixPage;
