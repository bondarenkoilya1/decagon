"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { CopyVectorPlacementButton, VectorCreateForm } from "src/features";

import { TwoVectorsSettingsPanel, useVectorPairPlacement } from "src/entities";

import { Container, Typography } from "src/shared";

const TwoVectorsPage = (): JSX.Element => {
  const vectorPlacement = useVectorPairPlacement();
  const t = useTranslations("vectorsTitle");

  return (
    <Container>
      <Typography.H1 className="mb-8 w-fit border-b-8 border-double border-blue-500 pb-2">
        {t("two")}
      </Typography.H1>

      <div className="flex">
        <div className="ml-10 max-w-fit">
          <VectorCreateForm type="pair" />
          <CopyVectorPlacementButton
            vectorPlacement={JSON.stringify(vectorPlacement)}
            className="mt-3 w-full"
          />
        </div>
        <TwoVectorsSettingsPanel className="ml-10 h-fit" />
      </div>
    </Container>
  );
};

export default TwoVectorsPage;
