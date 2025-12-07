import type { CoordinatesType } from "src/shared";

import { initialVectorPlacements } from "src/shared";

// UNIT TEST
export const createInitialVectorPlacement = (number: number): CoordinatesType[] =>
  Array.from({ length: number }, () => ({ ...initialVectorPlacements }));
