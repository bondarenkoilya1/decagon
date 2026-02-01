"use client";
import type { JSX } from "react";
import type { AxisType } from "src/entities";
import type { ClassNameProp } from "src/shared";

import { useVectorLength, useVectorScale } from "src/features";
import { ScaleInput } from "src/features/vector-scale/ui/scale-input";

import { VectorMagnitude } from "src/entities";

import { Panel } from "src/shared";

export type ElementsType = {
  name: `${AxisType}Multiplier`;
  placeholder: string;
  axis: AxisType;
  multiplierValue: unknown;
  axisProjectionLength: number;
  label: string;
};

export const VectorScalePanel = ({ className }: ClassNameProp): JSX.Element => {
  const { register, xMultiplierValue, yMultiplierValue, scaleAxis } = useVectorScale();
  const { vectorLength, xProjectionLength, yProjectionLength } = useVectorLength();

  const elements: ElementsType[] = [
    {
      name: "xMultiplier",
      placeholder: "2",
      axis: "x",
      multiplierValue: xMultiplierValue,
      axisProjectionLength: xProjectionLength,
      label: "vector.length.label.x"
    },
    {
      name: "yMultiplier",
      placeholder: "4",
      axis: "y",
      multiplierValue: yMultiplierValue,
      axisProjectionLength: yProjectionLength,
      label: "vector.length.label.y"
    }
  ];

  return (
    <Panel className={className}>
      <VectorMagnitude
        magnitude={vectorLength}
        xProjection={xProjectionLength}
        yProjection={yProjectionLength}
      />
      {elements.map((element) => (
        <ScaleInput element={element} register={register} onScale={scaleAxis} key={element.name} />
      ))}
    </Panel>
  );
};
