import type { FC } from "react";

import { VectorInvertPanel, VectorNormalizePanel, VectorRotatePanel } from "src/features";

import { Panel, Separator } from "src/shared";

export const VectorSettingsPanel: FC = () => {
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
