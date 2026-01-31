import type { CoordinatesType } from "src/entities";

export const drawVector = (ctx: CanvasRenderingContext2D, vector: CoordinatesType): void => {
  ctx.beginPath();

  ctx.moveTo(vector.xStart, vector.yStart);
  ctx.lineTo(vector.xEnd, vector.yEnd);

  ctx.lineTo(vector.xEnd - 15, vector.yEnd - 15);
  ctx.moveTo(vector.xEnd, vector.yEnd);
  ctx.lineTo(vector.xEnd - 15, vector.yEnd + 15);

  ctx.stroke();
};
