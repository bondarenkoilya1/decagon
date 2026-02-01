import type { MatrixType } from "src/entities";

import {
  calculateSingleBlockSize,
  calculateZeroCoordinate,
  drawVector,
  transformDesiredVectorToCanvas
} from "src/shared/ui/coordinates-system/lib";
import { GRID_STEP } from "src/shared/ui/coordinates-system/model";

export const handleDrawVector = (
  canvas: HTMLCanvasElement | null,
  ctx: CanvasRenderingContext2D | null,
  desiredVector: MatrixType
): void => {
  if (!canvas || !ctx) {
    console.warn("Canvas or context not available");
    return;
  }

  const { width, height } = canvas.getBoundingClientRect();

  const zeroCoordinate = calculateZeroCoordinate(width, height);
  const blockSize = calculateSingleBlockSize(canvas.width, canvas.height, GRID_STEP);

  const canvasVector = transformDesiredVectorToCanvas(desiredVector, zeroCoordinate, blockSize);
  drawVector(ctx, canvasVector);
};
