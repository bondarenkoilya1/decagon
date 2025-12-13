import type { JSX } from "react";

import { CopyVectorPlacementButton, VectorCreateForm } from "src/features";

import {
  TwoVectorsSettingsPanel,
  useVectorPairPlacement,
  Vector,
  VectorContainer
} from "src/entities";

import { Container } from "src/shared";

const vectorStyles = "absolute inset-0 w-full h-full";

const TwoVectorsPage = (): JSX.Element => {
  const vectorPlacement = useVectorPairPlacement();
  const { t } = useTranslation();

  return (
    <Container>
      <Typography.H1 className="mb-8 border-b-8 border-blue-500 border-double pb-2 w-fit">
        {t("vectors.two.title")}
      </Typography.H1>

      <div className="flex">
        <VectorContainer>
          <Vector placement={vectorPlacement[0]} markerId="head-1" className={vectorStyles} />
          <Vector placement={vectorPlacement[1]} markerId="head-2" className={vectorStyles} />
        </VectorContainer>
        <div className="ml-10 max-w-fit">
          <VectorCreateForm type="pair" />
          <CopyVectorPlacementButton
            vectorPlacement={JSON.stringify(vectorPlacement)}
            className="w-full mt-3"
          />
        </div>
        <TwoVectorsSettingsPanel className="ml-10 h-fit" />
      </div>
    </Container>
  );
};

export default TwoVectorsPage;
