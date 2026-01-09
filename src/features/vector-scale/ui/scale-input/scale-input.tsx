import type { JSX } from "react";
import type { UseFormRegister } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { AxisType, VectorScaleValues } from "src/entities";
import type { ElementsType } from "src/features";

import { ScaleButtonSet } from "src/features";

import {
  ButtonGroup,
  Input,
  Label,
  type MultiplicationOperationType,
  safeParseNumber
} from "src/shared";

type ScaleInputProps = {
  element: ElementsType;
  register: UseFormRegister<VectorScaleValues>;
  onScale: (axis: AxisType, operation: MultiplicationOperationType) => void;
};

export const ScaleInput = ({ element, register, onScale }: ScaleInputProps): JSX.Element => {
  const t = useTranslations();

  return (
    <ButtonGroup className="mt-4 flex items-end justify-between" key={crypto.randomUUID()}>
      <div className="w-1.5/6 grid max-w-sm items-center gap-1">
        <Label htmlFor={element.name}>{t(element.label)}</Label>
        <Input
          {...register(element.name, { setValueAs: safeParseNumber })}
          type="number"
          placeholder={element.placeholder}
          id={element.name}
          className="rounded-r-none"
        />
      </div>
      <ScaleButtonSet
        axis={element.axis}
        multiplierValue={element.multiplierValue}
        axisProjectionLength={element.axisProjectionLength}
        onScale={onScale}
      />
    </ButtonGroup>
  );
};
