import type { AxisType } from "src/entities";
import type { MultiplicationOperationType } from "src/shared";

export type ScaleButtonSetProps = {
  axis: AxisType;
  multiplierValue: unknown;
  axisProjectionLength: number;
  onScale: (axis: AxisType, operation: MultiplicationOperationType) => void;
};
