import type { AddOperationType, OnClickProp } from "src/shared";

export type MatrixType = number[][];

export type StepButtonProps = { disabled: boolean } & OnClickProp;
export type StepButtonFabricProps = { operation: AddOperationType } & StepButtonProps;
