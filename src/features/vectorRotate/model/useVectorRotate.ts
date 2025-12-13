import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { VectorRotateValues } from "src/shared";

import { zodResolver } from "@hookform/resolvers/zod";

import { useVectorActions, useVectorPlacement } from "src/entities";

import { VectorRotateSchema } from "src/shared";
import { transferDegreeToRadian } from "src/shared/lib/math";

type UseVectorRotateType = UseFormReturn<VectorRotateValues> & {
  rotateVector: () => void;
  isButtonDisabled: boolean;
};

// TODO: Validate 360, 720 values, .etc
export const useVectorRotate = (): UseVectorRotateType => {
  const { xStart, xEnd, yStart, yEnd } = useVectorPlacement();
  const { setVectorPlacement } = useVectorActions();
  const formMethods = useForm<VectorRotateValues>({
    resolver: zodResolver(VectorRotateSchema)
  });

  const degrees = formMethods.watch("degrees");

  const rotateVector = (): void => {
    const degreesInRadians = transferDegreeToRadian(-degrees);

    const vectorX = xEnd - xStart;
    const vectorY = yEnd - yStart;
    const cosAngle = Math.cos(degreesInRadians);
    const sinAngle = Math.sin(degreesInRadians);

    const rotatedX = vectorX * cosAngle - vectorY * sinAngle;
    const rotatedY = vectorX * sinAngle + vectorY * cosAngle;

    setVectorPlacement({ xEnd: xStart + rotatedX, yEnd: yStart + rotatedY });
  };

  return { ...formMethods, isButtonDisabled: !degrees || degrees === 0, rotateVector };
};
