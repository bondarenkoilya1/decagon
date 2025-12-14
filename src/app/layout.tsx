import type { JSX } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import type { Children } from "src/shared";

import { AppSidebar, Header } from "src/widgets";

import {
  SIDEBAR_NAVIGATION_ITEMS,
  SidebarInset,
  SidebarProvider,
  Toaster,
  WEBSITE_NAME
} from "src/shared";

import "../globals.css";

export const metadata: Metadata = {
  title: "Decagon",
  description: "Math calculator with visualisation"
};

const RootLayout = ({ children }: Readonly<Children>): JSX.Element => {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
};

export default RootLayout;
