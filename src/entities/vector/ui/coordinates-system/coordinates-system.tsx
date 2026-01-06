"use client";
import type { JSX } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import type { ColorType } from "src/shared";

import { drawAxes, drawGrid } from "src/entities/vector/ui/coordinates-system/model";

type ColorsType = Record<string, ColorType>;

const COLORS: ColorsType = {
  grid: "#e8f4f8",
  axes: "#2c3e50",
  labels: "#34495e"
};
const GRID_STEP = 10;

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
    const canvasWidth = canvasRect.width;
    const canvasHeight = canvasRect.height;

    drawGrid(GRID_STEP, ctx, canvasWidth, canvasHeight, COLORS.grid);
    drawAxes(ctx, canvasWidth, canvasHeight, COLORS.axes);
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
