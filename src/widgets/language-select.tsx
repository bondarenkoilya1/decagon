"use client";

import type { JSX } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "src/i18n";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "src/shared";

export const LanguageSelect = (): JSX.Element => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string): void => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={switchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("main_languages")}</SelectLabel>
          <SelectItem value="en">{t("language_english")}</SelectItem>
          <SelectItem value="ru">{t("language_russian")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
