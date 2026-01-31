"use client";

import type { JSX } from "react";
import { useEffect, useRef } from "react";

import {
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels,
  drawVector,
  setupCanvas
} from "src/shared/ui/coordinates-system/lib";
import { calculateSingleBlockSize } from "src/shared/ui/coordinates-system/lib/calculate-single-block-size";
import { calculateZeroCoordinate } from "src/shared/ui/coordinates-system/lib/calculate-zero-coordinate";

import type { CanvasPropertiesType } from "./model";
import { COLORS, GRID_STEP, LABELS_OFFSET } from "./model";

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

    const zeroCoordinates = calculateZeroCoordinate({ width, height });
    const singleBlockSize = calculateSingleBlockSize({ width, height });

    // [xStart, xEnd], [yStart, yEnd]
    const formDataVector = [
      [-4, 2].map((coordinate) => coordinate * singleBlockSize.blockWidth),
      [2, 2].map((coordinate) => coordinate * singleBlockSize.blockHeight)
    ];

    const canvasVector = {
      xStart: zeroCoordinates.x + formDataVector[0][0],
      xEnd: zeroCoordinates.x + formDataVector[0][1],
      yStart: zeroCoordinates.y + formDataVector[1][0],
      yEnd: zeroCoordinates.y + formDataVector[1][1]
    };

    drawVector(ctx, canvasVector);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto h-[600px] w-[1000px] rounded-lg border-2 border-solid border-[#3498db] bg-white shadow-md"
    />
  );
};
