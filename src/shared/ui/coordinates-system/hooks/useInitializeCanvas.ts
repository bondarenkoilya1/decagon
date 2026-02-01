"use client";
import type { RefObject } from "react";
import { useEffect, useRef } from "react";

import {
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels,
  setupCanvas
} from "src/shared/ui/coordinates-system/lib";
import type { CanvasPropertiesType } from "src/shared/ui/coordinates-system/model";
import {
  COLORS,
  GRID_STEP,
  LABELS_OFFSET,
  useCanvasActions
} from "src/shared/ui/coordinates-system/model";

const renderCoordinateSystem = (canvasProperties: CanvasPropertiesType): void => {
  drawGrid(canvasProperties, GRID_STEP, COLORS.grid);
  drawGridLabels(canvasProperties, GRID_STEP, COLORS.axes);
  drawAxes(canvasProperties, COLORS.axes);
  drawAxesLabels(canvasProperties, COLORS.labels, LABELS_OFFSET);
};

type UseInitializeCanvasReturnType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

export const useInitializeCanvas = (): UseInitializeCanvasReturnType => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef, setCtxRef } = useCanvasActions();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = setupCanvas(canvas);

    setCanvasRef(canvas);
    setCtxRef(ctx);

    const { width, height } = canvas.getBoundingClientRect();
    renderCoordinateSystem({ ctx, width, height });

    return () => {
      setCanvasRef(null);
      setCtxRef(null);
    };
  }, [setCanvasRef, setCtxRef]);

  return { canvasRef };
};
