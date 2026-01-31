import type { AddVectorsType } from "src/features";

import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";

export const calculateZeroCoordinate = (
  canvasWidth: CanvasPropertiesType["width"],
  canvasHeight: CanvasPropertiesType["height"]
): AddVectorsType => ({
  x: canvasWidth / 2,
  y: canvasHeight / 2
});
