import type { FC } from "react";

import { Button, ButtonGroup, ButtonGroupSeparator, Typography } from "src/shared";

export const SubtractPanel: FC = () => {
  return (
    <div>
      <Typography.H5>Subtract two vectors:</Typography.H5>
      <ButtonGroup className="mt-3 w-full">
        <Button className="w-1/2" variant="outline">
          A - B
        </Button>
        <ButtonGroupSeparator />
        <Button className="w-1/2" variant="outline">
          B - A
        </Button>
      </ButtonGroup>
    </div>
  );
};
