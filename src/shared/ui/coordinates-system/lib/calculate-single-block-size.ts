import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";
import { GRID_STEP } from "src/shared/ui/coordinates-system/model";

type BlockSizesType = {
  blockWidth: number;
  blockHeight: number;
};

export const calculateSingleBlockSize = ({
  width,
  height
}: Pick<CanvasPropertiesType, "width" | "height">): BlockSizesType => ({
  blockWidth: width / GRID_STEP / 2,
  blockHeight: height / GRID_STEP / 2
});
