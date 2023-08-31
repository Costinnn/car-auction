import { NextResponse } from "next/server";

let locales = ["en", "ro"];
let defaultLocale = "en";

export function middleware(request) {
  //LANGUAGE REDIRECT if no /lang/ found in url
  // Check if there is any supported language in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLang = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no /lang/ in url
  if (pathnameIsMissingLang) {
    const locale = defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
