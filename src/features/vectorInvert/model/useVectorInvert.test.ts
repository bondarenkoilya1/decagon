import type { CoordinatesType } from "src/entities";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { act, renderHook } from "@testing-library/react";

import { useVectorInvert } from "src/features";

import { useVectorActions, useVectorPlacement } from "src/entities";

vi.mock("src/app", () => ({
  useVectorPlacement: vi.fn(),
  useVectorActions: vi.fn()
}));

const mockPlacement = (overrides: Partial<CoordinatesType> = {}): CoordinatesType => ({
  xStart: 0,
  yStart: 0,
  xEnd: 0,
  yEnd: 0,
  ...overrides
});

describe("useVectorInvert", () => {
  const mockSetVectorPlacement = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useVectorActions).mockReturnValue({
      setVectorPlacement: mockSetVectorPlacement,
      resetXVector: vi.fn(),
      resetYVector: vi.fn()
    });

    vi.mocked(useVectorPlacement).mockReturnValue(mockPlacement());
  });

  // --- invertAxis ----------------------------------------------------

  describe("invertAxis", () => {
    it("inverts X axis correctly", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(mockPlacement({ xStart: 0, xEnd: 5, yEnd: 3 }));

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertAxis("x"));

      expect(mockSetVectorPlacement).toHaveBeenCalledOnce();
      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        xEnd: -5
      });
    });

    it("inverts Y axis correctly", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(mockPlacement({ xEnd: 5, yEnd: 3 }));

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertAxis("y"));

      expect(mockSetVectorPlacement).toHaveBeenCalledOnce();
      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        yEnd: -3
      });
    });

    it("handles non-zero start coordinates for X axis", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(mockPlacement({ xStart: 2, xEnd: 7 }));

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertAxis("x"));

      // (xEnd - xStart) = 5 → new xEnd = 2 - 5 = -3
      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        xEnd: -3
      });
    });

    it("does nothing for invalid axis", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(mockPlacement());

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertAxis("invalid" as never));

      expect(mockSetVectorPlacement).not.toHaveBeenCalled();
    });
  });

  // --- invertVector ----------------------------------------------------

  describe("invertVector", () => {
    it("inverts entire vector around start point", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(
        mockPlacement({
          xStart: 1,
          yStart: 2,
          xEnd: 4,
          yEnd: 6
        })
      );

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertVector());

      expect(mockSetVectorPlacement).toHaveBeenCalledOnce();
      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        xStart: 1,
        yStart: 2,
        xEnd: -2,
        yEnd: -2
      });
    });

    it("inverts vector from origin correctly", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(
        mockPlacement({
          xStart: 0,
          yStart: 0,
          xEnd: 3,
          yEnd: 4
        })
      );

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertVector());

      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        xStart: 0,
        yStart: 0,
        xEnd: -3,
        yEnd: -4
      });
    });

    it("keeps vector unchanged if it is zero-length", () => {
      vi.mocked(useVectorPlacement).mockReturnValue(
        mockPlacement({
          xStart: 0,
          yStart: 0,
          xEnd: 0,
          yEnd: 0
        })
      );

      const { result } = renderHook(() => useVectorInvert());

      act(() => result.current.invertVector());

      expect(mockSetVectorPlacement).toHaveBeenCalledWith({
        xStart: 0,
        yStart: 0,
        xEnd: 0,
        yEnd: 0
      });
    });
  });
});
