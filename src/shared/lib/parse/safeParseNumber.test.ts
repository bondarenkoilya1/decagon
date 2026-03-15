import { describe, expect, it } from "vitest";

import { safeParseNumber } from "src/shared";

describe("Safely parse numbers", () => {
  it("Valid case with number", () => expect(safeParseNumber(412)).toEqual(412));

  it("Valid case with string as number", () => expect(safeParseNumber("5")).toEqual(5));
  it("Non valid case with string as number", () => expect(safeParseNumber("4s6")).toEqual(0));

  it("Non valid case with Infinity", () => expect(safeParseNumber(Infinity)).toEqual(0));
});
