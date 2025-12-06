import type { ReactNode } from "react";

export type ClassNameProp = {
  className?: string;
};

export type Children = {
  children: ReactNode;
};

export type OnClickProp = {
  onClick?: () => void;
};

export type MultiplicationOperationType = "multiply" | "divide";
export type AddOperationType = "increase" | "decrease";
export type IndexingType = "zero" | "one";
export type FormType = "single" | "pair";
