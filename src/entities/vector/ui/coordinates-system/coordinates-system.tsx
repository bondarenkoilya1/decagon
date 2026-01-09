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

    const singleBlockWidth = canvas.width / GRID_STEP / 2;
    const singleBlockHeight = canvas.height / GRID_STEP / 2;

    const zeroCoordinate = {
      x: width / 2,
      y: height / 2
    };

    // [xStart, xEnd], [yStart, yEnd]
    const formDataVector = [
      [-4, 2].map((coordinate) => coordinate * singleBlockWidth),
      [2, 2].map((coordinate) => coordinate * singleBlockHeight)
    ];

    const canvasVector = {
      xStart: zeroCoordinate.x + formDataVector[0][0],
      xEnd: zeroCoordinate.x + formDataVector[0][1],
      yStart: zeroCoordinate.y + formDataVector[1][0],
      yEnd: zeroCoordinate.y + formDataVector[1][1]
    };

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvasVector.xStart, canvasVector.yStart);
    ctx.lineTo(canvasVector.xEnd, canvasVector.yEnd);
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto h-[600px] w-[1000px] rounded-lg border-2 border-solid border-[#3498db] bg-white shadow-md"
    />
  );
};
