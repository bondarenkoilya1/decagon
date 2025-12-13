import type { CoordinatesType } from "src/entities";
import { create } from "zustand";

import { createInitialVectorPlacement, roundCoordinates } from "src/entities";

type VectorStoreType = {
  vectorPlacement: CoordinatesType;
  actions: {
    setVectorPlacement: (coordinates: Partial<CoordinatesType>) => void;
    resetXVector: () => void;
    resetYVector: () => void;
  };
};

const useVectorStore = create<VectorStoreType>((set) => ({
  vectorPlacement: createInitialVectorPlacement(1)[0],
  actions: {
    setVectorPlacement: (coordinates) =>
      set((state) => ({
        vectorPlacement: { ...state.vectorPlacement, ...roundCoordinates(coordinates) }
      })),
    resetXVector: () =>
      set((state) => ({
        vectorPlacement: { ...state.vectorPlacement, xStart: 0, xEnd: 0 }
      })),
    resetYVector: () =>
      set((state) => ({
        vectorPlacement: { ...state.vectorPlacement, yStart: 0, yEnd: 0 }
      }))
  }
}));

export const useVectorPlacement = (): CoordinatesType =>
  useVectorStore((state) => state.vectorPlacement);
export const useVectorActions = (): VectorStoreType["actions"] =>
  useVectorStore((state) => state.actions);
