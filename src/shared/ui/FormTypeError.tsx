import type { JSX } from "react";
import { TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";

export const FormTypeError = (): JSX.Element => {
  const t = useTranslations("form.type");

  return (
    <p className="flex">
      <TriangleAlert className="mr-2 text-yellow-500" />
      <span>{t("error")}</span>
    </p>
  );
};
