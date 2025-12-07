import { describe, expect, it } from "vitest";

import { getVectorLength } from "src/entities/vector/lib/calculations/getVectorLength";

describe("getVectorLength", () => {
  it.each([
    { x: 0, y: 0, name: "zero vector" },
    { x: 3, y: 4, name: "3-4-5 triangle" },
    { x: -3, y: 4, name: "negative x" },
    { x: 1.5, y: 2.5, name: "decimals" },
    { x: 1e6, y: 1e6, name: "large numbers" }
  ])("should calculate correct length for $name", ({ x, y }) => {
    const expected = Math.sqrt(x ** 2 + y ** 2);
    expect(getVectorLength(x, y)).toBeCloseTo(expected, 10);
  });
});
