"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { MatrixCreateForm, MatrixIndexingModeToggle } from "src/features";

import { Container, Typography } from "src/shared";

const MatrixPage = (): JSX.Element => {
  useTranslations();

  return (
    <Container>
      <Typography.H1 className="mb-8 border-b-4 border-blue-500 pb-2 w-fit">
        {/*<Trans*/}
        {/*  i18nKey="matrices.single.title"*/}
        {/*  components={{ span: <span style={{ color: "#51a2ff" }} /> }}*/}
        {/*/>*/}
        Title
      </Typography.H1>

      <div className="max-w-fit">
        <div className="flex justify-end mb-2">
          <MatrixIndexingModeToggle />
        </div>
        <MatrixCreateForm type="single" />
      </div>
    </Container>
  );
};

export default MatrixPage;
