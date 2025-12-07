export const CONTAINER_SIDE_LENGTH = 250;

export const SIDEBAR_NAVIGATION_ITEMS: NavigationSectionProps[] = [
  {
    title: "vectors",
    items: [
      { title: "vectors.single", url: "" },
      { title: "vectors.two", url: "two-vectors" }
    ]
  },
  {
    title: "matrices",
    items: [
      { title: "matrices.single", url: "matrix" },
      { title: "matrices.two", url: "two-matrices" }
    ]
  },
  {
    title: "equations",
    items: [
      { title: "equations.linear", url: "linear" },
      { title: "equations.quadratic", url: "quadratic" },
      { title: "equations.cubic", url: "cubic" }
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
