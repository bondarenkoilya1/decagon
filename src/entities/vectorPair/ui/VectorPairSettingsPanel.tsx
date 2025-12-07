import type { FC } from "react";
import type { ClassNameProp } from "src/shared";

import { AddPanel, SubtractPanel } from "src/features";

import { Panel, Separator } from "src/shared";

export const TwoVectorsSettingsPanel: FC<ClassNameProp> = ({ className }) => {
  return (
    <Panel className={className}>
      <AddPanel />
      <Separator className="my-4" />
      <SubtractPanel />
    </Panel>
  );
};
