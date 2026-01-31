import type { addVectorsType } from "src/features";

import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";

export const calculateZeroCoordinate = ({
  width,
  height
}: Pick<CanvasPropertiesType, "width" | "height">): addVectorsType => ({
  x: width / 2,
  y: height / 2
});
