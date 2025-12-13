import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { AxisType, MultiplicationOperationType } from "src/shared";
import type { VectorScaleValues } from "src/shared";

import { zodResolver } from "@hookform/resolvers/zod";

import { useVectorActions, useVectorPlacement } from "src/entities";

import { VectorScaleSchema } from "src/shared";

type UseVectorMultiplyType = UseFormReturn<VectorScaleValues> & {
  xMultiplierValue: unknown;
  yMultiplierValue: unknown;
  scaleAxis: (axis: AxisType, operation: MultiplicationOperationType) => void;
};

export const useVectorScale = (): UseVectorMultiplyType => {
  const { xStart, xEnd, yStart, yEnd } = useVectorPlacement();
  const { setVectorPlacement } = useVectorActions();
  const formMethods = useForm<VectorScaleValues>({
    resolver: zodResolver(VectorScaleSchema)
  });

  const xMultiplierValue = formMethods.watch("xMultiplier");
  const yMultiplierValue = formMethods.watch("yMultiplier");

  const scaleAxis = (axis: AxisType, operation: MultiplicationOperationType): void => {
    const isXAxis = axis === "x";
    const factor = (isXAxis ? xMultiplierValue : yMultiplierValue) as number;
    const axisStart = isXAxis ? xStart : yStart;
    const axisEnd = isXAxis ? xEnd : yEnd;

    const delta = axisEnd - axisStart;
    const scaledDelta = operation === "multiply" ? delta * factor : delta / factor;
    const newAxisEnd = axisStart + scaledDelta;

    setVectorPlacement(isXAxis ? { xEnd: newAxisEnd } : { yEnd: newAxisEnd });
  };

  return {
    ...formMethods,
    xMultiplierValue,
    yMultiplierValue,
    scaleAxis
  };
};
