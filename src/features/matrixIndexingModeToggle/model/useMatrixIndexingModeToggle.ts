import { useEffect } from "react";

import { usePremiumFeaturesActions } from "src/app";

type MatrixIndexingModeToggleType = {
  toggleMode: (isChecked: boolean) => void;
};

export const useMatrixIndexingModeToggle = (): MatrixIndexingModeToggleType => {
  const { setMatrixIndexingMode } = usePremiumFeaturesActions();

  useEffect(() => {
    const saved = localStorage.getItem("matrixIndexingMode");
    if (saved === "zero" || saved === "one") {
      setMatrixIndexingMode(saved);
    }
  }, [setMatrixIndexingMode]);

  const toggleMode = (isChecked: boolean): void => {
    const newMode = isChecked ? "zero" : "one";
    setMatrixIndexingMode(newMode);
    localStorage.setItem("matrixIndexingMode", newMode);
  };

  return { toggleMode };
};
