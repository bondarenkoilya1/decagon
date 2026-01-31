import type { MatrixType } from "src/entities";

import {
  calculateSingleBlockSize,
  calculateZeroCoordinate,
  drawVector,
  transformDesiredVectorToCanvas
} from "src/shared/ui/coordinates-system/lib";
import type { CanvasRefsType } from "src/shared/ui/coordinates-system/model";
import { GRID_STEP } from "src/shared/ui/coordinates-system/model";

export const handleDrawVector = (
  canvasRef: CanvasRefsType["canvasRef"],
  ctxRef: CanvasRefsType["ctxRef"],
  desiredVector: MatrixType = [
    [-4, 2],
    [2, 2]
  ]
): void => {
  const canvas = canvasRef.current;
  const ctx = ctxRef.current;

  if (!canvas || !ctx) {
    return;
  }

  const { width, height } = canvas.getBoundingClientRect();

  const zeroCoordinate = calculateZeroCoordinate(width, height);
  const blockSize = calculateSingleBlockSize(canvas.width, canvas.height, GRID_STEP);

  const canvasVector = transformDesiredVectorToCanvas(desiredVector, zeroCoordinate, blockSize);

  drawVector(ctx, canvasVector);
};
