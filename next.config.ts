import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["english", "russian"],
    defaultLocale: "english"
  }
};

export default nextConfig;
