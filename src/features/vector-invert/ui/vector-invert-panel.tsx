"use client";
import type { FC } from "react";
import type { VariantProps } from "class-variance-authority";
import { useTranslations } from "next-intl";
import type { buttonVariants } from "src/shared";

import { useVectorInvert } from "src/features/vector-invert";

import { Button, ButtonGroup, Typography } from "src/shared";

type ButtonsType = VariantProps<typeof buttonVariants> & {
  text: string;
  onClick: () => void;
};

export const VectorInvertPanel: FC = () => {
  const { invertAxis, invertVector } = useVectorInvert();
  const t = useTranslations();

  const buttons: ButtonsType[] = [
    { text: "X", variant: "outline", onClick: () => invertAxis("x") },
    { text: "Y", variant: "outline", onClick: () => invertAxis("y") },
    { text: "invert.completely", variant: "default", onClick: invertVector }
  ];

  return (
    <div className="flex items-center">
      <Typography.H5>{t("invert.title")}: </Typography.H5>
      <ButtonGroup className="ml-4">
        {buttons.map((button) => (
          <Button onClick={button.onClick} variant={button.variant} key={crypto.randomUUID()}>
            {t(button.text)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
