import type { FC } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <>
      <Typography.H5>
        {/*todo: Your <Typography.Highlighted>vector length</Typography.Highlighted> is*/}
        {t("vector.length.title")}: {vectorLength}
      </Typography.H5>
      <div className="mt-3">
        <p className="[&:not(:first-of-type)]:mt-1 text-sm">
          {t("vector.length.projection.x")}: {xProjectionLength}
        </p>
        <p className="[&:not(:first-of-type)]:mt-1 text-sm">
          {t("vector.length.projection.y")}: {yProjectionLength}
        </p>
      </div>
    </>
  );
};
