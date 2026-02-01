import type { ColorType } from "src/shared";

import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";

export const drawGrid = (
  canvasProperties: CanvasPropertiesType,
  step: number,
  color: ColorType
): void => {
  const { ctx, width, height } = canvasProperties;
  const stepX = width / step;
  const stepY = height / step;
  ctx.fillStyle = color;

  for (let x = 0; x <= width; x += stepX) {
    ctx.fillRect(x, 0, 1, height);
  }

  for (let y = 0; y <= height; y += stepY) {
    ctx.fillRect(0, y, width, 1);
  }
};

export const drawGridLabels = (
  canvasProperties: CanvasPropertiesType,
  step: number,
  color: ColorType
): void => {
  const { ctx, width, height } = canvasProperties;
  const stepX = width / step;
  const stepY = height / step;
  ctx.fillStyle = color;

  const half = step / 2;
  const diapason = Array.from({ length: step + 1 }, (_, i) => i - half);

  for (let i = 0; i <= step; i++) {
    const x = i * stepX;
    const y = i * stepY;
    ctx.fillText(String(diapason[i]), x - 4, height / 2 + 14);
    if (y === height / 2) {
      continue;
    }
    ctx.fillText(String(diapason[step - i]), width / 2 - 14, y + 4);
  }
};
