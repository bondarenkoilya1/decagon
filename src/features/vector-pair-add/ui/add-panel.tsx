import type { JSX } from "react";
import type { AddOperationType } from "src/shared";

import { Button, ButtonGroup, ButtonGroupSeparator, Typography } from "src/shared";

type AddPanelProps = {
  operation: AddOperationType;
};

export const AddPanel = ({ operation }: AddPanelProps): JSX.Element => {
  const sign = operation === "increase" ? "+" : "-";

  return (
    <div>
      <Typography.H5>Add two vectors:</Typography.H5>
      <ButtonGroup className="mt-3 w-full">
        <Button className="w-1/2" variant="outline">
          A {sign} B
        </Button>
        <ButtonGroupSeparator />
        <Button className="w-1/2" variant="outline">
          B {sign} A
        </Button>
      </ButtonGroup>
    </div>
  );
};
