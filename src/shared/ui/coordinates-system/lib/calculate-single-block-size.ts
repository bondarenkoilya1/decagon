import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";

export type BlockSizesType = {
  blockWidth: number;
  blockHeight: number;
};

export const calculateSingleBlockSize = (
  canvasWidth: CanvasPropertiesType["width"],
  canvasHeight: CanvasPropertiesType["height"],
  gridStep: number
): BlockSizesType => ({
  blockWidth: canvasWidth / gridStep / 2,
  blockHeight: canvasHeight / gridStep / 2
});
