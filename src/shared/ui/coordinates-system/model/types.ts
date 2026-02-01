import type { ColorType } from "src/shared";

export type ColorsType = Record<string, ColorType>;
export type CanvasPropertiesType = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
};
