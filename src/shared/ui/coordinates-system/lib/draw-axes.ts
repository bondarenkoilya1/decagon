import type { ColorType } from "src/shared";

import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";

export const drawAxes = (canvasProperties: CanvasPropertiesType, color: ColorType): void => {
  const { ctx, width, height } = canvasProperties;
  ctx.fillStyle = color;
  ctx.fillRect(0, height / 2, width, 1);
  ctx.fillRect(width / 2, 0, 1, height);
};

export const drawAxesLabels = (
  canvasProperties: CanvasPropertiesType,
  color: ColorType,
  offset: number
): void => {
  const { ctx, width, height } = canvasProperties;
  ctx.fillStyle = color;
  ctx.fillText("x", width - offset, height / 2 + offset);
  ctx.fillText("y", width / 2 - offset, offset);
};
