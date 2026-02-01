"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { copyVectorPlacement, useSubscriberState } from "src/entities";

import { Button } from "src/shared";

type CopyVectorPlacementButtonProps = { vectorPlacement: string; className?: string };

export const CopyVectorPlacementButton: FC<CopyVectorPlacementButtonProps> = ({
  vectorPlacement,
  className
}) => {
  const t = useTranslations();
  const tCopy = useTranslations("copy");
  const isSubscriber = useSubscriberState();

  const copy = (): void => {
    isSubscriber
      ? copyVectorPlacement(vectorPlacement, { successMessage: tCopy("success") })
      : toast(tCopy("premiumOnly"));
  };

  return (
    <Button variant="outline" className={className} onClick={copy}>
      {t("copyCoordinates")}
    </Button>
  );
};
