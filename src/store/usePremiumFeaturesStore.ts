import { create } from "zustand";

import type { IndexingType } from "@/shared";

type PremiumFeaturesStoreType = {
  isSubscriber: boolean;
  matrixIndexingMode: IndexingType;
  actions: {
    setIsSubscriber: (value: boolean) => void;
    setMatrixIndexingMode: (mode: IndexingType) => void;
  };
};

const usePremiumFeaturesStore = create<PremiumFeaturesStoreType>((set) => ({
  isSubscriber: true,
  matrixIndexingMode: "zero",
  actions: {
    setIsSubscriber: (value) => set(() => ({ isSubscriber: value })),
    setMatrixIndexingMode: (mode) =>
      set(() => ({
        matrixIndexingMode: mode
      }))
  }
}));

export const useSubscriberState = (): boolean =>
  usePremiumFeaturesStore((state) => state.isSubscriber);
export const useMatrixIndexingMode = (): IndexingType =>
  usePremiumFeaturesStore((state) => state.matrixIndexingMode);
export const usePremiumFeaturesActions = (): PremiumFeaturesStoreType["actions"] =>
  usePremiumFeaturesStore((state) => state.actions);
