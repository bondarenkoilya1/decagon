"use client";

import type { JSX } from "react";
import { useRef } from "react";

import { Button } from "src/shared";
import { handleDrawVector } from "src/shared/ui/coordinates-system/handlers";
import { useInitializeCanvas } from "src/shared/ui/coordinates-system/hooks";

// Todo: I need to take values from the state and draw such vector as user wants
export const CoordinatesSystem = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useInitializeCanvas(canvasRef, ctxRef);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="mx-auto h-[600px] w-[1000px] rounded-lg border-2 border-solid border-[#3498db] bg-white shadow-md"
      />
      <Button
        onClick={() =>
          handleDrawVector(canvasRef, ctxRef, [
            [1, 2],
            [2, 1]
          ])
        }>
        Draw line
      </Button>
    </>
  );
};
