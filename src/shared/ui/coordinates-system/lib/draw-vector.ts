import type { CoordinatesType } from "src/entities";

const ARROW_LENGTH = 12;
const ARROW_ANGLE = (25 * Math.PI) / 180;

const drawArrowhead = (
  ctx: CanvasRenderingContext2D,
  tipX: number,
  tipY: number,
  angle: number
): void => {
  const wing1X = tipX + ARROW_LENGTH * Math.cos(angle + Math.PI - ARROW_ANGLE);
  const wing1Y = tipY + ARROW_LENGTH * Math.sin(angle + Math.PI - ARROW_ANGLE);
  const wing2X = tipX + ARROW_LENGTH * Math.cos(angle + Math.PI + ARROW_ANGLE);
  const wing2Y = tipY + ARROW_LENGTH * Math.sin(angle + Math.PI + ARROW_ANGLE);

  ctx.moveTo(tipX, tipY);
  ctx.lineTo(wing1X, wing1Y);
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(wing2X, wing2Y);
};

export const drawVector = (ctx: CanvasRenderingContext2D, vector: CoordinatesType): void => {
  const dx = vector.xEnd - vector.xStart;
  const dy = vector.yEnd - vector.yStart;
  const angle = Math.atan2(dy, dx);

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(vector.xStart, vector.yStart);
  ctx.lineTo(vector.xEnd, vector.yEnd);
  drawArrowhead(ctx, vector.xEnd, vector.yEnd, angle);
  ctx.stroke();
};
