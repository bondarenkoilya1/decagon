import type { CoordinatesType } from "src/entities";

import type { NavigationSectionProps } from "src/shared/types";

export const CONTAINER_SIDE_LENGTH = 250;

export const SIDEBAR_NAVIGATION_ITEMS: NavigationSectionProps[] = [
  {
    title: "vectors",
    items: [
      { title: "vectorsItem.single", url: "/" },
      { title: "vectorsItem.two", url: "two-vectors" }
    ]
  },
  {
    title: "matrices",
    items: [
      { title: "matricesItem.single", url: "matrix" },
      { title: "matricesItem.two", url: "two-matrices" }
    ]
  },
  {
    title: "equations",
    items: [
      { title: "equationsItem.linear", url: "linear" },
      { title: "equationsItem.quadratic", url: "quadratic" },
      { title: "equationsItem.cubic", url: "cubic" }
    ]
  }
];

export const initialVectorPlacements: CoordinatesType = {
  xStart: 0,
  xEnd: 0,
  yStart: 0,
  yEnd: 0
};

export const MAX_ROWS_COUNT = 10;
