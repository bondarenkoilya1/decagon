import { useCallback } from "react";
import type { MatrixType } from "src/entities";

import { handleDrawVector } from "src/shared/ui/coordinates-system/handlers";
import { useCanvasRef, useCtxRef } from "src/shared/ui/coordinates-system/model";

export type UseDrawVectorReturnType = {
  drawVector: (vector: MatrixType) => void;
};

export const useDrawVector = (): UseDrawVectorReturnType => {
  const canvasRef = useCanvasRef();
  const ctxRef = useCtxRef();

  const drawVector = useCallback(
    (vector: MatrixType) => handleDrawVector(canvasRef, ctxRef, vector),
    [canvasRef, ctxRef]
  );

  return { drawVector };
};
