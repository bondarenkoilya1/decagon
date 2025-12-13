import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { copyVectorPlacement, useSubscriberState } from "src/entities";

import { Button } from "src/shared";

type CopyVectorPlacementButtonProps = { vectorPlacement: string; className?: string };

export const CopyVectorPlacementButton: FC<CopyVectorPlacementButtonProps> = ({
  vectorPlacement,
  className
}) => {
  const { t } = useTranslation();
  const isSubscriber = useSubscriberState();

  const copy = (): void => {
    isSubscriber
      ? copyVectorPlacement(vectorPlacement)
      : toast("Only premium users can use this feature");
  };

  return (
    <Button variant="outline" className={className} onClick={copy}>
      {t("copyCoordinates")}
    </Button>
  );
};
