import type { NextConfig } from "next";

import { getRewrites } from "./src/i18n/routes";

const nextConfig: NextConfig = {
  async rewrites() {
    // Localized public URLs -> internal /[locale]/... routes (see src/i18n/routes.ts).
    return { beforeFiles: getRewrites(), afterFiles: [], fallback: [] };
  },
};

export default nextConfig;
