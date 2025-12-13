import type { JSX } from "react";

import { VectorCreateForm, VectorPropertiesPanel, VectorScalePanel } from "src/features";

import { useVectorPlacement, Vector, VectorContainer, VectorSettingsPanel } from "src/entities";

import { Container, Typography } from "src/shared";

const VectorPage = (): JSX.Element => {
  const vectorPlacement = useVectorPlacement();
  const { t } = useTranslation();

  return (
    <Container>
      <Typography.H1 className="mb-8 border-b-4 border-blue-500 pb-2 w-fit">
        {t("vectors.single.title")}
      </Typography.H1>

      <div className="flex">
        <VectorContainer>
          <Vector placement={vectorPlacement} />
        </VectorContainer>
        <div className="ml-10 max-w-fit">
          <VectorCreateForm type="single" />
        </div>
      </div>

      <div className="mt-10 w-fit flex items-start">
        <div className="mr-5">
          <VectorPropertiesPanel />
          <VectorScalePanel className="mt-5" />
        </div>
        <VectorSettingsPanel />
      </div>
    </Container>
  );
};

export default VectorPage;
