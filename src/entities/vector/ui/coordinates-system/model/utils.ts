import type { CoordinatesType } from "src/entities";
import type { ColorType } from "src/shared";

import { LABELS_FONT } from "src/entities/vector/ui/coordinates-system/model/constants";
import type { CanvasPropertiesType } from "src/entities/vector/ui/coordinates-system/model/types";

export const setupCanvas = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas context not available");
  }

  const { width, height } = canvas.getBoundingClientRect();

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(dpr, dpr);
  ctx.font = LABELS_FONT;

  return ctx;
};

export const drawAxes = (canvasProperties: CanvasPropertiesType, color: ColorType): void => {
  const { ctx, width, height } = canvasProperties;
  ctx.fillStyle = color;
  ctx.fillRect(0, height / 2, width, 1);
  ctx.fillRect(width / 2, 0, 1, height);
};

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
    ctx.fillText(String(diapason[i]), width / 2 - 14, y + 4);
  }
};

export const drawVector = (ctx: CanvasRenderingContext2D, vector: CoordinatesType): void => {
  ctx.beginPath();

  ctx.moveTo(vector.xStart, vector.yStart);
  ctx.lineTo(vector.xEnd, vector.yEnd);

  ctx.lineTo(vector.xEnd - 15, vector.yEnd - 15);
  ctx.moveTo(vector.xEnd, vector.yEnd);
  ctx.lineTo(vector.xEnd - 15, vector.yEnd + 15);

  ctx.stroke();
};
