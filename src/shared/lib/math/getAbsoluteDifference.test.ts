import { describe, expect, it } from "vitest";

import { getAbsoluteDifference } from "src/shared";

describe("Get Axis Length", () => {
  it("Valid case", () => expect(getAbsoluteDifference(2, 5)).toEqual(3));

  it("Valid case with negative number", () => expect(getAbsoluteDifference(-4, 6)).toEqual(10));
  it("Valid case with negative number", () => expect(getAbsoluteDifference(7, -11)).toEqual(18));

  it("Valid case with two negative numbers", () =>
    expect(getAbsoluteDifference(-9, -4)).toEqual(5));
});
