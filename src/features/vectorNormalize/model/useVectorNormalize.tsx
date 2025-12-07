import { useVectorActions, useVectorPlacement } from "src/app";

import { useVectorLength } from "src/features";

type UseVectorNormalizeType = {
  normalize: () => void;
  isButtonDisabled: boolean;
};

const EPSILON = 1e-4;

export const useVectorNormalize = (): UseVectorNormalizeType => {
  const { xStart, yStart, xEnd, yEnd } = useVectorPlacement();
  const { setVectorPlacement } = useVectorActions();
  const { vectorLength } = useVectorLength();

  const isButtonDisabled = vectorLength === 0 || Math.abs(vectorLength - 1) < EPSILON;

  const normalize = (): void => {
    const vector = [xEnd - xStart, yEnd - yStart];
    const normalizedVector = vector.map((component) => component / vectorLength);
    const [newXEnd, newYEnd] = [xStart + normalizedVector[0], yStart + normalizedVector[1]];
    setVectorPlacement({ xEnd: newXEnd, yEnd: newYEnd });
  };

  return { normalize, isButtonDisabled };
};
