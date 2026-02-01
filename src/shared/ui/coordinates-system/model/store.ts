import { create } from "zustand";

type CanvasStoreType = {
  canvasRef: HTMLCanvasElement | null;
  ctxRef: CanvasRenderingContext2D | null;
  actions: {
    setCanvasRef: (canvas: HTMLCanvasElement | null) => void;
    setCtxRef: (ctx: CanvasRenderingContext2D | null) => void;
  };
};

const useCanvasStore = create<CanvasStoreType>((set) => ({
  canvasRef: null,
  ctxRef: null,
  actions: {
    setCanvasRef: (canvas) => set({ canvasRef: canvas }),
    setCtxRef: (ctx) => set({ ctxRef: ctx })
  }
}));

export const useCanvasRef = (): CanvasStoreType["canvasRef"] =>
  useCanvasStore((state) => state.canvasRef);

export const useCtxRef = (): CanvasStoreType["ctxRef"] => useCanvasStore((state) => state.ctxRef);

export const useCanvasActions = (): CanvasStoreType["actions"] =>
  useCanvasStore((state) => state.actions);
