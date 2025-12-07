import { describe, expect, it } from "vitest";

import { roundTo } from "./roundTo";

describe("Round to Fixed Decimal", () => {
  it("Valid case with 2 decimals", () => expect(roundTo(12.5472, 2)).toEqual(12.55));

  it("Valid case with 2 decimals, problematic JS rounding", () =>
    expect(roundTo(1.005, 2)).toEqual(1.01));
  it("Valid case with 2 decimals, problematic JS rounding", () =>
    expect(roundTo(2.675, 2)).toEqual(2.68));

  it("Valid case with 5 decimals", () => expect(roundTo(35.8535281, 5)).toEqual(35.85353));
});
