import type { CoordinatesType } from "src/entities";

import { roundTo } from "src/shared/lib/math/roundTo";

// UNIT TEST
export const roundCoordinates = (coordinates: Partial<CoordinatesType>): Partial<CoordinatesType> =>
  Object.fromEntries(
    Object.entries(coordinates).map(([key, value]) => [key, roundTo(value, 2)])
  ) as Partial<CoordinatesType>;
