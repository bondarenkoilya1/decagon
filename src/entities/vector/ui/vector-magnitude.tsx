"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import type { AxisType } from "src/entities";

import { Typography } from "src/shared";

type VectorMagnitudeProps = {
  magnitude: number;
  xProjection: number;
  yProjection: number;
};

type AxisProjectionType = {
  axis: AxisType;
  value: number;
};

export const VectorMagnitude = ({
  magnitude,
  xProjection,
  yProjection
}: VectorMagnitudeProps): JSX.Element => {
  const t = useTranslations("vector.length");

  const projections: AxisProjectionType[] = [
    { axis: "x", value: xProjection },
    { axis: "y", value: yProjection }
  ];

  return (
    <>
      <Typography.H5>
        {t("title")}: {magnitude}
      </Typography.H5>

      <AxisProjections projections={projections} />
    </>
  );
};

const AxisProjections = ({ projections }: { projections: AxisProjectionType[] }): JSX.Element => {
  const t = useTranslations("vector.length.projection");

  return (
    <ul className="mt-3">
      {projections.map(({ axis, value }) => (
        <li key={axis} className="space-y-1 text-sm">
          {t(axis)}: {value}
        </li>
      ))}
    </ul>
  );
};
