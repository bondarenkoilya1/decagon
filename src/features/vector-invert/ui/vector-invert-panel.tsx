"use client";

import type { FC } from "react";
import type { VariantProps } from "class-variance-authority";
import { useTranslations } from "next-intl";
import type { buttonVariants } from "src/shared";

import { useVectorInvert } from "src/features/vector-invert";

import { Button, ButtonGroup, Typography } from "src/shared";

type InvertButton = VariantProps<typeof buttonVariants> & {
  onClick: () => void;
} & ({ label: string } | { translationKey: "completely" });

export const VectorInvertPanel: FC = () => {
  const t = useTranslations("invert");
  const { invertAxis, invertVector } = useVectorInvert();

  const buttons: InvertButton[] = [
    { label: "X", variant: "outline", onClick: () => invertAxis("x") },
    { label: "Y", variant: "outline", onClick: () => invertAxis("y") },
    { translationKey: "completely", variant: "default", onClick: invertVector }
  ];

  const getButtonLabel = (button: InvertButton): string =>
    "translationKey" in button ? t(button.translationKey) : button.label;

  return (
    <div className="flex items-center">
      <Typography.H5>{t("title")}</Typography.H5>
      <ButtonGroup className="ml-4">
        {buttons.map((button) => (
          <Button
            onClick={button.onClick}
            variant={button.variant}
            key={"label" in button ? button.label : button.translationKey}>
            {getButtonLabel(button)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
