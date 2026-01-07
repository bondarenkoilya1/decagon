"use client";
import type { JSX } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import type { ColorType, FontType } from "src/shared";

import {
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels
} from "src/entities/vector/ui/coordinates-system/model";

type ColorsType = Record<string, ColorType>;
export type CanvasPropertiesType = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const COLORS: ColorsType = {
  grid: "#e8f4f8",
  axes: "#2c3e50",
  labels: "#34495e"
};
const GRID_STEP = 20;
const LABELS_FONT: FontType = "14px Arial";
const LABELS_OFFSET = 14;

export const CoordinatesSystem = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    ctx.font = LABELS_FONT;

    const canvasProperties: CanvasPropertiesType = {
      ctx: ctx,
      width: canvasRect.width,
      height: canvasRect.height
    };

    // Objects on the top of the canvas should be drawn last.
    drawGrid(canvasProperties, GRID_STEP, COLORS.grid);
    drawGridLabels(canvasProperties, GRID_STEP, COLORS.axes);
    drawAxes(canvasProperties, COLORS.axes);
    drawAxesLabels(canvasProperties, COLORS.labels, LABELS_OFFSET);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={400}
      className="bg-white border-2 border-solid border-[#3498db] rounded-lg shadow-md mx-auto"
    />
  );
};
