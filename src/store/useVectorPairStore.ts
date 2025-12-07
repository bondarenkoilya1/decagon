import type { CoordinatesType } from "src/shared";
import { create } from "zustand";

import { createInitialVectorPlacement, roundCoordinates } from "src/entities";

type VectorPairStoreType = {
  vectorPlacement: CoordinatesType[];
  actions: {
    setVectorPlacement: (index: number, coordinates: Partial<CoordinatesType>) => void;
  };
};

const useVectorPairStore = create<VectorPairStoreType>((set) => ({
  vectorPlacement: createInitialVectorPlacement(2),
  actions: {
    setVectorPlacement: (index, coordinates) =>
      set((state) => {
        // Could be done shorter with immer
        const newVectorPlacement = [...state.vectorPlacement];
        newVectorPlacement[index] = {
          ...newVectorPlacement[index],
          ...roundCoordinates(coordinates)
        };

        return {
          ...state,
          vectorPlacement: newVectorPlacement
        };
      })
  }
}));

export const useVectorPairPlacement = (): CoordinatesType[] =>
  useVectorPairStore((state) => state.vectorPlacement);
export const useVectorPairActions = (): VectorPairStoreType["actions"] =>
  useVectorPairStore((state) => state.actions);
