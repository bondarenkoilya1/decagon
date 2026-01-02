"use client";
import { useVectorPlacement } from "src/entities";

import { roundTo } from "src/shared/lib/math";

type UseVectorPropertiesType = {
  vectorCoordinates: number[];
  startCoordinates: number[];
  endCoordinates: number[];
};

export const useVectorProperties = (): UseVectorPropertiesType => {
  const { xStart, yStart, xEnd, yEnd } = useVectorPlacement();

  const roundCoordinates = (coordinates: number[]): number[] =>
    coordinates.map((coordinate) => roundTo(coordinate, 2));

  const vectorCoordinates = roundCoordinates([xEnd - xStart, yEnd - yStart]);
  const startCoordinates = roundCoordinates([xStart, yStart]);
  const endCoordinates = roundCoordinates([xEnd, yEnd]);

  return { vectorCoordinates, startCoordinates, endCoordinates };
};
