import type { CoordinatesType, MatrixType } from "src/entities";
import type { AddVectorsType } from "src/features";

import type { BlockSizesType } from "src/shared/ui/coordinates-system/lib/calculate-single-block-size";

export const transformDesiredVectorToCanvas = (
  desiredVector: MatrixType,
  zeroCoordinates: AddVectorsType,
  blockSize: BlockSizesType
): CoordinatesType => ({
  xStart: zeroCoordinates.x + desiredVector[0][0] * blockSize.blockWidth,
  xEnd: zeroCoordinates.x + desiredVector[0][1] * blockSize.blockWidth,
  yStart: zeroCoordinates.y - desiredVector[1][0] * blockSize.blockHeight,
  yEnd: zeroCoordinates.y - desiredVector[1][1] * blockSize.blockHeight
});
