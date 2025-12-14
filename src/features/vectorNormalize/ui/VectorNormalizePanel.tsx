"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { useVectorNormalize } from "src/features";

import { Button, Typography } from "src/shared";

export const VectorNormalizePanel: FC = () => {
  const { normalize, isButtonDisabled } = useVectorNormalize();
  const t = useTranslations();

  return (
    <div className="flex items-center">
      <Typography.H5 className="mr-3">{t("normalize.title")}:</Typography.H5>
      <Button onClick={normalize} disabled={isButtonDisabled}>
        {t("normalize")}
      </Button>
    </div>
  );
};
