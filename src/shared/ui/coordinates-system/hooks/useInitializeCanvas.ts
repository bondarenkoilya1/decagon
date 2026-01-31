import { useEffect } from "react";

import {
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels,
  setupCanvas
} from "src/shared/ui/coordinates-system/lib";
import type { CanvasPropertiesType, CanvasRefsType } from "src/shared/ui/coordinates-system/model";
import { COLORS, GRID_STEP, LABELS_OFFSET } from "src/shared/ui/coordinates-system/model";

const renderCoordinateSystem = (canvasProperties: CanvasPropertiesType): void => {
  drawGrid(canvasProperties, GRID_STEP, COLORS.grid);
  drawGridLabels(canvasProperties, GRID_STEP, COLORS.axes);
  drawAxes(canvasProperties, COLORS.axes);
  drawAxesLabels(canvasProperties, COLORS.labels, LABELS_OFFSET);
};

export const useInitializeCanvas = (
  canvasRef: CanvasRefsType["canvasRef"],
  ctxRef: CanvasRefsType["ctxRef"]
): void => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = setupCanvas(canvas);
    ctxRef.current = ctx;

    const { width, height } = canvas.getBoundingClientRect();
    renderCoordinateSystem({ ctx, width, height });
  }, [canvasRef, ctxRef]);
};
