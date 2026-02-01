"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const switchLanguage = (newLocale: "en" | "ru"): void => {
    router.replace(pathname, { locale: newLocale });
  };

  if (!mounted) {
    return (
      <div
        className="border-input flex h-9 w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm shadow-xs"
        aria-hidden>
        <span className="text-muted-foreground">{locale}</span>
      </div>
    );
  }

  return (
    <Select value={locale as string} onValueChange={switchLanguage}>
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
