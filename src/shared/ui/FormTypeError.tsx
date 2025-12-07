import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { TriangleAlert } from "lucide-react";

export const FormTypeError = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <p className="flex">
      <TriangleAlert className="mr-2 text-yellow-500" />
      <span>{t("form.type.error")}</span>
    </p>
  );
};
