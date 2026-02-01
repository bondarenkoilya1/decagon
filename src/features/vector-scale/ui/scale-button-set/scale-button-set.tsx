"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { type AxisType, useVectorActions } from "src/entities";

import { Button, type MultiplicationOperationType } from "src/shared";

export type ScaleButtonSetProps = {
  axis: AxisType;
  multiplierValue: unknown;
  axisProjectionLength: number;
  onScale: (axis: AxisType, operation: MultiplicationOperationType) => void;
};

export const ScaleButtonSet = ({
  axis,
  multiplierValue,
  axisProjectionLength,
  onScale
}: ScaleButtonSetProps): JSX.Element => {
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
          key={text}>
          {t(text as never)}
        </Button>
      ))}
    </>
  );
};
