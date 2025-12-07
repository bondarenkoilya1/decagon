import { useEffect, useState } from "react";

import { useVectorPlacement } from "src/app";

import { getVectorLength } from "src/entities";

import { getAbsoluteDifference, roundTo } from "src/shared/lib/math";

type UseVectorAxisLengthType = {
  xProjectionLength: number;
  yProjectionLength: number;
  vectorLength: number;
};

export const useVectorLength = (): UseVectorAxisLengthType => {
  const { xStart, xEnd, yStart, yEnd } = useVectorPlacement();
  const [xProjectionLength, setXProjectionLength] = useState(0);
  const [yProjectionLength, setYProjectionLength] = useState(0);

  useEffect(
    () => setXProjectionLength(roundTo(getAbsoluteDifference(xStart, xEnd), 2)),
    [xStart, xEnd]
  );
  useEffect(
    () => setYProjectionLength(roundTo(getAbsoluteDifference(yStart, yEnd), 2)),
    [yStart, yEnd]
  );

  const vectorLength = roundTo(getVectorLength(xProjectionLength, yProjectionLength), 2);

  return { vectorLength, xProjectionLength, yProjectionLength };
};
