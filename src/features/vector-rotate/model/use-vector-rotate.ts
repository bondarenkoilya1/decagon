"use client";
import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { VectorRotateValues } from "src/entities";

import { zodResolver } from "@hookform/resolvers/zod";

import { useVectorActions, useVectorPlacement, VectorRotateSchema } from "src/entities";

import { transferDegreeToRadian } from "src/shared/lib/math";

type UseVectorRotateType = UseFormReturn<VectorRotateValues> & {
  rotateVector: (suggestedDegree?: number) => void;
  isButtonDisabled: boolean;
};

export const useVectorRotate = (): UseVectorRotateType => {
  const { xStart, xEnd, yStart, yEnd } = useVectorPlacement();
  const { setVectorPlacement } = useVectorActions();
  const formMethods = useForm<VectorRotateValues>({
    resolver: zodResolver(VectorRotateSchema)
  });

  const inputDegrees = formMethods.watch("degrees");

  const rotateVector = (suggestedDegree?: number): void => {
    const degreesInRadians = suggestedDegree
      ? transferDegreeToRadian(-suggestedDegree)
      : transferDegreeToRadian(-inputDegrees);

    const vectorX = xEnd - xStart;
    const vectorY = yEnd - yStart;
    const cosAngle = Math.cos(degreesInRadians);
    const sinAngle = Math.sin(degreesInRadians);

    const rotatedX = vectorX * cosAngle - vectorY * sinAngle;
    const rotatedY = vectorX * sinAngle + vectorY * cosAngle;

    setVectorPlacement({ xEnd: xStart + rotatedX, yEnd: yStart + rotatedY });
  };

  return { ...formMethods, isButtonDisabled: !inputDegrees || inputDegrees === 0, rotateVector };
};
