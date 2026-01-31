import type { RefObject } from "react";
import type { ColorType } from "src/shared";

export type ColorsType = Record<string, ColorType>;
export type CanvasPropertiesType = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
};

export type CanvasRefsType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  ctxRef: RefObject<CanvasRenderingContext2D | null>;
};
