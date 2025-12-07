import { describe, expect, it, vi } from "vitest";

import { act, renderHook } from "@testing-library/react";

/**
 * @vitest-environment jsdom
 */
vi.mock("react-hook-form");
vi.mock("src/app");
vi.mock("src/shared/lib/math");

import { useForm } from "react-hook-form";

import { useVectorActions, useVectorPlacement } from "src/app";

import { useVectorScale } from "src/features";

import { roundTo } from "src/shared/lib/math";

describe("Scale Axis", () => {
  const mockSetVectorPlacement = vi.fn();

  vi.mocked(useForm).mockReturnValue({ watch: () => 2 } as never);
  vi.mocked(useVectorActions).mockReturnValue({
    setVectorPlacement: mockSetVectorPlacement,
    resetXVector: vi.fn(),
    resetYVector: vi.fn()
  });
  vi.mocked(roundTo).mockImplementation((x) => x);

  it("Multiplies x-axis", () => {
    vi.mocked(useVectorPlacement).mockReturnValue({ xStart: 0, xEnd: 10, yStart: 0, yEnd: 0 });

    const { result } = renderHook(() => useVectorScale());
    act(() => result.current.scaleAxis("x", "multiply"));

    expect(mockSetVectorPlacement).toHaveBeenCalledWith({ xEnd: 20 });
  });

  it("Divides y-axis", () => {
    vi.mocked(useVectorPlacement).mockReturnValue({ xStart: 0, xEnd: 0, yStart: 0, yEnd: 10 });

    const { result } = renderHook(() => useVectorScale());
    act(() => result.current.scaleAxis("y", "divide"));

    expect(mockSetVectorPlacement).toHaveBeenCalledWith({ yEnd: 5 });
  });
});
