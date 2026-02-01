import type { CoordinatesType, MatrixType } from "src/entities";

export const placementToMatrix = (placement: CoordinatesType): MatrixType => [
  [placement.xStart, placement.xEnd],
  [placement.yStart, placement.yEnd]
];
