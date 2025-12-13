import type { JSX } from "react";
import type { Metadata } from "next";
import type { Children } from "src/shared";

import { AppSidebar, LanguageSelect } from "src/widgets";

import {
  SIDEBAR_NAVIGATION_ITEMS,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
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
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {WEBSITE_NAME && (
              <AppSidebar title={WEBSITE_NAME} components={SIDEBAR_NAVIGATION_ITEMS} />
            )}

            <SidebarInset className="flex-1">
              <header className="flex h-16 items-center gap-2 border-b px-4 justify-between">
                <SidebarTrigger />
                <LanguageSelect />
              </header>

              <main className="flex-1 p-6">
                {children}
                <Toaster />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
