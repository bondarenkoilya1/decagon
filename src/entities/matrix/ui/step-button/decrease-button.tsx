import type { JSX } from "react";
import type { StepButtonProps } from "src/entities";

import { Button } from "src/shared";

export const DecreaseButton = ({ disabled, onClick }: StepButtonProps): JSX.Element => (
  <Button variant="outline" className="w-6 h-6 select-none" onClick={onClick} disabled={disabled}>
    -
  </Button>
);
