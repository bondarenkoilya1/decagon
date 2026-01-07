"use client";
import type { JSX } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import type { CanvasPropertiesType } from "src/entities/vector/ui/coordinates-system/model";
import {
  drawAxes,
  drawAxesLabels,
  drawGrid,
  drawGridLabels
} from "src/entities/vector/ui/coordinates-system/model";
import {
  COLORS,
  DPR,
  GRID_STEP,
  LABELS_FONT,
  LABELS_OFFSET
} from "src/entities/vector/ui/coordinates-system/model";

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
    canvas.width = canvasRect.width * DPR;
    canvas.height = canvasRect.height * DPR;
    canvas.style.width = `${canvasRect.width}px`;
    canvas.style.height = `${canvasRect.height}px`;
    ctx.scale(DPR, DPR);
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
