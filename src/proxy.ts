import createMiddleware from "next-intl/middleware";
import { routing } from "src/i18n/routing";

export default createMiddleware(routing);

/** Used by Next.js to decide when to run the proxy (not passed to createMiddleware). */
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"]
};
