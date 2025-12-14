import type { JSX } from "react";
import { toast } from "sonner";
import type { StepButtonProps } from "src/entities";

import { Button } from "src/shared";

export const IncreaseButton = ({ disabled, onClick }: StepButtonProps): JSX.Element => {
  const onClickHandler = (): void | (string | number) => {
    if (disabled) {
      return toast("Нужны матрицы вплоть до 100х100? Приобретайте Premium подписку!");
    }

    onClick?.();
  };

  return (
    <Button variant="outline" className="w-6 h-6 select-none" onClick={onClickHandler}>
      +
    </Button>
  );
};
