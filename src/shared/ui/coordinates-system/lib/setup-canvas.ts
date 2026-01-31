import { LABELS_FONT } from "src/shared/ui/coordinates-system/model";

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
