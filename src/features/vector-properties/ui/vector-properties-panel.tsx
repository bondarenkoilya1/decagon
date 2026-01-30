"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { CopyVectorPlacementButton, useVectorProperties } from "src/features";

import { CoordinatesDisplay, useVectorPlacement } from "src/entities";

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
        <CoordinatesDisplay letter="V" coordinates={vectorCoordinates} />
      </span>
      , {t("where")}
      <div className="mt-3">
        <CoordinatesDisplay letter="A" coordinates={startCoordinates} />
        <CoordinatesDisplay letter="B" coordinates={endCoordinates} />
      </div>
      <Typography.Shy className="mt-2.5">{t("pointsDescription")}</Typography.Shy>
      <CopyVectorPlacementButton
        vectorPlacement={JSON.stringify(vectorPlacement)}
        className="mt-3 w-full"
      />
    </Panel>
  );
};
