import type { JSX } from "react";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "src/i18n/routing";
import type { Children } from "src/shared";

import { AppSidebar, Header } from "src/widgets";

import {
  SIDEBAR_NAVIGATION_ITEMS,
  SidebarInset,
  SidebarProvider,
  Toaster,
  WEBSITE_NAME
} from "src/shared";

import NotFoundPage from "../not-found";

type LocaleParams = Promise<{ locale: string }>;

export function generateStaticParams(): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await params.then((p) => p.locale);
  if (!hasLocale(routing.locales, locale)) {
    return { title: "404" };
  }
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    title: t("appTitle"),
    description: t("appDescription")
  };
}

type LocaleLayoutProps = Readonly<Children> & { params: LocaleParams };

const LocaleLayout = async ({ children, params }: LocaleLayoutProps): Promise<JSX.Element> => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    const messages = (await import(`../../../messages/${routing.defaultLocale}.json`)).default;
    return (
      <NextIntlClientProvider locale={routing.defaultLocale} messages={messages}>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {WEBSITE_NAME && (
              <AppSidebar title={WEBSITE_NAME} components={SIDEBAR_NAVIGATION_ITEMS} />
            )}

            <SidebarInset className="flex-1">
              <Header />
              <main className="flex-1 p-6">
                <NotFoundPage />
                <Toaster />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </NextIntlClientProvider>
    );
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          {WEBSITE_NAME && (
            <AppSidebar title={WEBSITE_NAME} components={SIDEBAR_NAVIGATION_ITEMS} />
          )}

          <SidebarInset className="flex-1">
            <Header />
            <main className="flex-1 p-6">
              {children}
              <Toaster />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
