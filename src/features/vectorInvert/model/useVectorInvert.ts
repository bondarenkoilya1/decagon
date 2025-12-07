import type { AxisType } from "src/shared";

import { useVectorActions, useVectorPlacement } from "src/app";

type UseVectorInvertType = {
  invertAxis: (axis: AxisType) => void;
  invertVector: () => void;
};

export const useVectorInvert = (): UseVectorInvertType => {
  const vectorPlacement = useVectorPlacement();
  const { setVectorPlacement } = useVectorActions();

  const invertAxis = (axis: AxisType): void => {
    if (axis !== "x" && axis !== "y") {
      return;
    }

    const { xEnd, yEnd, yStart, xStart } = vectorPlacement;

    if (axis === "x") {
      const vectorLength = xEnd - xStart;
      return setVectorPlacement({ xEnd: xStart - vectorLength });
    }

    const vectorLength = yEnd - yStart;
    return setVectorPlacement({ yEnd: yStart - vectorLength });
  };

  const invertVector = (): void => {
    const swapedCoordinates = {
      xStart: vectorPlacement.xStart,
      yStart: vectorPlacement.yStart,
      xEnd: 2 * vectorPlacement.xStart - vectorPlacement.xEnd,
      yEnd: 2 * vectorPlacement.yStart - vectorPlacement.yEnd
    };

    setVectorPlacement(swapedCoordinates);
  };

  return { invertAxis, invertVector };
};
