import type { JSX } from "react";

import { VectorInvertPanel, VectorNormalizePanel, VectorRotatePanel } from "src/features";

import { Panel, Separator } from "src/shared";

export const VectorSettings = (): JSX.Element => {
  return (
    <Panel>
      <VectorInvertPanel />
      <Separator className="my-6" />
      <VectorRotatePanel />
      <Separator className="my-6" />
      <VectorNormalizePanel />
    </Panel>
  );
};
