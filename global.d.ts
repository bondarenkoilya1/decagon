import type en from "./messages/en.json";
import type { routing } from "./src/i18n/routing";

declare module "use-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en;
  }
}
