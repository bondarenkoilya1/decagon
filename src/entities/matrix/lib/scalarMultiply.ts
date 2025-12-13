import type { MatrixType } from "src/entities";

export const scalarMultiply = (matrix: MatrixType, scalar: number): MatrixType =>
  matrix.map((row) => row.map((item) => item * scalar));
