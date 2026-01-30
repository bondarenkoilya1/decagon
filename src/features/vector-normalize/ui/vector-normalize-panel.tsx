"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { useVectorNormalize } from "src/features";

import { Button, Typography } from "src/shared";

export const VectorNormalizePanel: FC = () => {
  const t = useTranslations("normalize");
  const { normalize, isButtonDisabled } = useVectorNormalize();

  return (
    <div className="flex items-center">
      <Typography.H5 className="mr-3">{t("title")}</Typography.H5>
      <Button onClick={normalize} disabled={isButtonDisabled}>
        {t("button")}
      </Button>
    </div>
  );
};
