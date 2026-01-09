"use client";

import type { JSX } from "react";
import { useEffect, useRef } from "react";

import type { CanvasPropertiesType } from "src/entities/vector/ui/coordinates-system/model";
import { setupCanvas } from "src/entities/vector/ui/coordinates-system/model";
import {
  COLORS,
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels,
  GRID_STEP,
  LABELS_OFFSET
} from "src/entities/vector/ui/coordinates-system/model";

const renderCoordinateSystem = (canvasProperties: CanvasPropertiesType): void => {
  drawGrid(canvasProperties, GRID_STEP, COLORS.grid);
  drawGridLabels(canvasProperties, GRID_STEP, COLORS.axes);
  drawAxes(canvasProperties, COLORS.axes);
  drawAxesLabels(canvasProperties, COLORS.labels, LABELS_OFFSET);
};

export const CoordinatesSystem = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = setupCanvas(canvas);
    const { width, height } = canvas.getBoundingClientRect();

    renderCoordinateSystem({ ctx, width, height });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto h-[600px] w-[1000px] rounded-lg border-2 border-solid border-[#3498db] bg-white shadow-md"
    />
  );
};
