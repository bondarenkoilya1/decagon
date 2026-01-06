"use client";
import type { JSX } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import type { ColorType } from "src/shared";

type ColorsType = Record<string, ColorType>;

const COLORS: ColorsType = {
  grid: "#e8f4f8",
  axes: "#2c3e50",
  labels: "#34495e"
};

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

    drawAxis(ctx, canvasWidth, canvasHeight);
  }, []);

  const drawAxis = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    color: ColorType = COLORS.grid
  ): void => {
    ctx.fillStyle = color;
    ctx.fillRect(0, canvasHeight / 2, canvasWidth, 1);
    ctx.fillRect(canvasWidth / 2, 0, 1, canvasHeight);
  };

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={400}
      className="bg-white border-2 border-solid border-[#3498db] rounded-lg shadow-md mx-auto"
    />
  );
};
