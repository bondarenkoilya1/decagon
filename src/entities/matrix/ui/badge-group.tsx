"use client";
import type { JSX } from "react";
import type { AddOperationType } from "src/shared";

import { StepButton } from "src/entities";

import { Badge, MAX_ROWS_COUNT } from "src/shared";

type BadgeGroupProps = {
  label: string;
  selected: number;
  onSelect: (value: number) => void;
  onStep: (operation: AddOperationType) => void;
};

export const BadgeGroup = ({ label, onSelect, selected, onStep }: BadgeGroupProps): JSX.Element => {
  const values = Array.from({ length: MAX_ROWS_COUNT }, (_, i) => i + 1);

  return (
    <div className="my-4">
      <div className="flex items-center mb-2">
        <StepButton
          operation="decrease"
          disabled={selected <= 1}
          onClick={() => onStep("decrease")}
        />
        <span className="font-medium mx-3">{label}</span>
        <StepButton
          operation="increase"
          disabled={selected >= MAX_ROWS_COUNT}
          onClick={() => onStep("increase")}
        />
      </div>
      <div className="grid grid-cols-10 gap-2">
        {values.map((value) => (
          <Badge
            key={value}
            onClick={() => onSelect(value)}
            selected={value === selected}
            className="w-full">
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
};
