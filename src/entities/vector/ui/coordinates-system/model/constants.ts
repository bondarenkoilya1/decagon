import type { FontType } from "src/shared";

import type { ColorsType } from "src/entities/vector/ui/coordinates-system/model/types";

export const COLORS: ColorsType = {
  grid: "#e8f4f8",
  axes: "#2c3e50",
  labels: "#34495e"
};
export const GRID_STEP = 20;
export const LABELS_FONT: FontType = "14px Arial";
export const LABELS_OFFSET = 14;
export const DPR = window.devicePixelRatio || 1;
