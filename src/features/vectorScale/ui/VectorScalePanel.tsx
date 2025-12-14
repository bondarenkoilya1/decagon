"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";
import type { AxisType } from "src/entities";

import { ScaleButtonSet, useVectorLength, useVectorScale } from "src/features";

import { LengthDisplay } from "src/entities";

import { ButtonGroup, Input, Label, Panel } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

type ElementsType = {
  name: "xMultiplier" | "yMultiplier";
  placeholder: string;
  axis: AxisType;
  multiplierValue: unknown;
  axisProjectionLength: number;
  label: string;
};

export const VectorScalePanel: FC<{ className?: string }> = ({ className }) => {
  const { register, xMultiplierValue, yMultiplierValue, scaleAxis } = useVectorScale();
  const { vectorLength, xProjectionLength, yProjectionLength } = useVectorLength();

  const t = useTranslations();

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
      <LengthDisplay
        vectorLength={vectorLength}
        xProjectionLength={xProjectionLength}
        yProjectionLength={yProjectionLength}
      />
      {elements.map((element) => (
        <ButtonGroup className="flex justify-between items-end mt-4" key={crypto.randomUUID()}>
          <div className="grid max-w-sm items-center gap-1 w-1.5/6">
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
            onScale={scaleAxis}
          />
        </ButtonGroup>
      ))}
    </Panel>
  );
};
