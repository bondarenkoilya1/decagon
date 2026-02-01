"use client";

import type { JSX } from "react";

import { useInitializeCanvas } from "src/shared/ui/coordinates-system/hooks";

export const CoordinatesSystem = (): JSX.Element => {
  const { canvasRef } = useInitializeCanvas();

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto h-[600px] w-[1000px] rounded-lg border-2 border-solid border-[#3498db] bg-white shadow-md"
    />
  );
};
