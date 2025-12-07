import type { FC } from "react";
import type { AddOperationType } from "src/shared";

import { Badge, Button, MAX_ROWS_COUNT } from "src/shared";

type BadgeGroupProps = {
  label: string;
  selected: number;
  onSelect: (value: number) => void;
  onStep: (operation: AddOperationType) => void;
};

type StepButtonProps = { operation: AddOperationType; disabled: boolean };

export const BadgeGroup: FC<BadgeGroupProps> = ({ label, onSelect, selected, onStep }) => {
  const values = Array.from({ length: MAX_ROWS_COUNT }, (_, i) => i + 1);

  const StepButton: FC<StepButtonProps> = ({ operation, disabled }) => (
    <Button
      variant="outline"
      className="w-6 h-6"
      onClick={() => onStep(operation)}
      disabled={disabled}>
      {operation === "increase" ? "+" : "-"}
    </Button>
  );

  return (
    <div className="my-4">
      <div className="flex items-center mb-2">
        <StepButton operation="decrease" disabled={selected <= 1} />
        <span className="font-medium mx-3">{label}</span>
        <StepButton operation="increase" disabled={selected >= MAX_ROWS_COUNT} />
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
