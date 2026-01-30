"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "src/shared";

type VectorLengthProps = {
  vectorLength: number;
  xProjectionLength: number;
  yProjectionLength: number;
};

export const LengthDisplay: FC<VectorLengthProps> = ({
  vectorLength,
  xProjectionLength,
  yProjectionLength
}) => {
  const t = useTranslations("vector.length");

  return (
    <>
      <Typography.H5>
        {/*todo: Your <Typography.Highlighted>vector length</Typography.Highlighted> is*/}
        {t("title")}: {vectorLength}
      </Typography.H5>
      <div className="mt-3">
        <p className="text-sm [&:not(:first-of-type)]:mt-1">
          {t("projection.x")}: {xProjectionLength}
        </p>
        <p className="text-sm [&:not(:first-of-type)]:mt-1">
          {t("projection.y")}: {yProjectionLength}
        </p>
      </div>
    </>
  );
};
