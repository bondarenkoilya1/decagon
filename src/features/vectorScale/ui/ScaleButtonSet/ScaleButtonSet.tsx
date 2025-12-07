import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { useVectorActions } from "src/app";

import type { ScaleButtonSetProps } from "src/features/vectorScale/ui/ScaleButtonSet/types";

import { Button } from "src/shared";

export const ScaleButtonSet: FC<ScaleButtonSetProps> = ({
  axis,
  multiplierValue,
  axisProjectionLength,
  onScale
}) => {
  const { resetXVector, resetYVector } = useVectorActions();
  const { t } = useTranslation();

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
