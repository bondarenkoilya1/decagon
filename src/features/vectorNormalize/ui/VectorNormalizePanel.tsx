import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { useVectorNormalize } from "src/features";

import { Button, Typography } from "src/shared";

export const VectorNormalizePanel: FC = () => {
  const { normalize, isButtonDisabled } = useVectorNormalize();
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <Typography.H5 className="mr-3">{t("normalize.title")}:</Typography.H5>
      <Button onClick={normalize} disabled={isButtonDisabled}>
        {t("normalize")}
      </Button>
    </div>
  );
};
