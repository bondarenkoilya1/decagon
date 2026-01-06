import type { ColorType, FontType } from "src/shared";

export const drawAxes = (
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  color: ColorType
): void => {
  ctx.fillStyle = color;
  ctx.fillRect(0, canvasHeight / 2, canvasWidth, 1);
  ctx.fillRect(canvasWidth / 2, 0, 1, canvasHeight);
};

export const drawGrid = (
  step: number,
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  color: ColorType,
  font: FontType
): void => {
  const stepX = canvasWidth / step;
  const stepY = canvasHeight / step;
  ctx.fillStyle = color;
  ctx.font = font;

  for (let x = 0; x <= canvasWidth; x += stepX) {
    ctx.fillRect(x, 0, 1, canvasHeight);
  }

  for (let y = 0; y <= canvasHeight; y += stepY) {
    ctx.fillRect(0, y, canvasWidth, 1);
  }
};

export const drawAxesLabels = (
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  color: ColorType,
  font: FontType,
  offset: number
): void => {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText("x", canvasWidth - offset, canvasHeight / 2 + offset);
  ctx.fillText("y", canvasWidth / 2 - offset, offset);
};
