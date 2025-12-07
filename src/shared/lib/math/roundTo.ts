export const roundTo = (number: number, decimal: number): number => {
  const factor = 10 ** decimal;
  return Math.round((number + Number.EPSILON) * factor) / factor;
};
