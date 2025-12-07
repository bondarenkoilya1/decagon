import type { MatrixType } from "src/shared";

export const scalarMultiply = (matrix: MatrixType, scalar: number): MatrixType =>
  matrix.map((row) => row.map((item) => item * scalar));
