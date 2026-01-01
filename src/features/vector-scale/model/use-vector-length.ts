"use client";

import { getVectorLength, useVectorPlacement } from "src/entities";

import { getAbsoluteDifference, roundTo } from "src/shared/lib/math";

type UseVectorAxisLengthType = {
  xProjectionLength: number;
  yProjectionLength: number;
  vectorLength: number;
};

export const useVectorLength = (): UseVectorAxisLengthType => {
  const { xStart, xEnd, yStart, yEnd } = useVectorPlacement();

  const xProjectionLength = roundTo(getAbsoluteDifference(xStart, xEnd), 2);
  const yProjectionLength = roundTo(getAbsoluteDifference(yStart, yEnd), 2);
  const vectorLength = roundTo(getVectorLength(xProjectionLength, yProjectionLength), 2);

  return { vectorLength, xProjectionLength, yProjectionLength };
};
