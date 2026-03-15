import { describe, expect, it } from "vitest";

import { transferDegreeToRadian } from "src/shared";

describe("Transfer degree to radian", () => {
  it("Valid neutral number case", () => {
    expect(transferDegreeToRadian(0)).toBe(0);
  });

  it("Valid case", () => {
    expect(transferDegreeToRadian(90)).toBeCloseTo(Math.PI / 2);
  });

  it("Valid case", () => {
    expect(transferDegreeToRadian(180)).toBeCloseTo(Math.PI);
  });

  it("Valid negative number case", () => {
    expect(transferDegreeToRadian(-90)).toBeCloseTo(-Math.PI / 2);
  });
});
