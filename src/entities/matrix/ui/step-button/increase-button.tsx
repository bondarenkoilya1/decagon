"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import type { StepButtonProps } from "src/entities";

import { Button } from "src/shared";

export const IncreaseButton = ({ disabled, onClick }: StepButtonProps): JSX.Element => {
  const t = useTranslations("premium");

  const onClickHandler = (): void | (string | number) => {
    if (disabled) {
      return toast(t("matrixLimitToast"));
    }

    onClick?.();
  };

  return (
    <Button variant="outline" className="h-6 w-6 select-none" onClick={onClickHandler}>
      +
    </Button>
  );
};
