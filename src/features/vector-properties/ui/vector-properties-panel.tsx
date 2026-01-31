"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { CopyVectorPlacementButton, useVectorProperties } from "src/features";

import { useVectorPlacement, VectorCoordinates } from "src/entities";

import { Panel, Typography } from "src/shared";

export const VectorPropertiesPanel: FC = () => {
  const t = useTranslations("vectorProperties");
  const { vectorCoordinates, startCoordinates, endCoordinates } = useVectorProperties();
  const vectorPlacement = useVectorPlacement();

  return (
    <Panel>
      <Typography.H5 className="inline">
        {t("current")} <Typography.Highlighted>{t("vectorCoordinates")}</Typography.Highlighted>
        :{" "}
      </Typography.H5>
      <span>
        <VectorCoordinates letter="V" coordinates={vectorCoordinates} />
      </span>
      , {t("where")}
      <div className="mt-3">
        <VectorCoordinates letter="A" coordinates={startCoordinates} />
        <VectorCoordinates letter="B" coordinates={endCoordinates} />
      </div>
      <Typography.Shy className="mt-2.5">{t("pointsDescription")}</Typography.Shy>
      <CopyVectorPlacementButton
        vectorPlacement={JSON.stringify(vectorPlacement)}
        className="mt-3 w-full"
      />
    </Panel>
  );
};
