"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { VectorCreateForm, VectorPropertiesPanel, VectorScalePanel } from "src/features";

// useVectorPlacement
import { VectorSettings } from "src/entities";

import { Container, Typography } from "src/shared";

const VectorPage = (): JSX.Element => {
  // const vectorPlacement = useVectorPlacement();
  const t = useTranslations("vectorsTitle");

  return (
    <Container>
      <Typography.H1 className="mb-8 w-fit border-b-4 border-blue-500 pb-2">
        {t("single")}
      </Typography.H1>

      <div className="flex">
        {/*<VectorContainer>*/}
        {/*  <Vector placement={vectorPlacement} />*/}
        {/*</VectorContainer>*/}
        <div className="ml-10 max-w-fit">
          <VectorCreateForm type="single" />
        </div>
      </div>

      <div className="mt-10 flex w-fit items-start">
        <div className="mr-5">
          <VectorPropertiesPanel />
          <VectorScalePanel className="mt-5" />
        </div>
        <VectorSettings />
      </div>
    </Container>
  );
};

export default VectorPage;
