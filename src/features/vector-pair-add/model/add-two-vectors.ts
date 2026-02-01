export type AddVectorsType = {
  x: number;
  y: number;
};

export const addTwoVectors = (x1: number, y1: number, x2: number, y2: number): AddVectorsType => {
  return { x: x1 + x2, y: y1 + y2 };
};

export const subtractTwoVectors = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): AddVectorsType => {
  return { x: x1 - x2, y: y1 - y2 };
};
