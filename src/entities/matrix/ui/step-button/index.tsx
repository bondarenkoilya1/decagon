import type { JSX } from "react";
import type { StepButtonFabricProps } from "src/entities";

import { DecreaseButton } from "src/entities/matrix/ui/step-button/decrease-button";
import { IncreaseButton } from "src/entities/matrix/ui/step-button/increase-button";

export const StepButton = ({
  operation,
  disabled,
  onClick
}: StepButtonFabricProps): JSX.Element => {
  switch (operation) {
    case "increase":
      return <IncreaseButton onClick={onClick} disabled={disabled} />;
    case "decrease":
      return <DecreaseButton onClick={onClick} disabled={disabled} />;
    default:
      return <span>Укажите тип операции для StepButton</span>;
  }
};
