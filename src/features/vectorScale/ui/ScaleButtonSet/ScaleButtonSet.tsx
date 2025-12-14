"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import type { ScaleButtonSetProps } from "src/features/vectorScale/ui/ScaleButtonSet/types";

import { useVectorActions } from "src/entities";

import { Button } from "src/shared";

export const ScaleButtonSet: FC<ScaleButtonSetProps> = ({
  axis,
  multiplierValue,
  axisProjectionLength,
  onScale
}) => {
  const { resetXVector, resetYVector } = useVectorActions();
  const t = useTranslations();

  const resetVector = axis === "x" ? resetXVector : resetYVector;

  const buttons = [
    { disabled: !multiplierValue, onClick: () => onScale(axis, "multiply"), text: "multiply" },
    { disabled: !multiplierValue, onClick: () => onScale(axis, "divide"), text: "divide" },
    { disabled: axisProjectionLength === 0, onClick: resetVector, text: "zero" }
  ];

  return (
    <>
      {buttons.map(({ disabled, onClick, text }) => (
        <Button
          disabled={disabled}
          onClick={onClick}
          className="w-1.5/6"
          variant="outline"
          key={crypto.randomUUID()}>
          {t(text)}
        </Button>
      ))}
    </>
  );
};
