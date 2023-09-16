import { NextResponse } from "next/server";
import { getServerSession } from "./lib/getServerSession";

let locales = ["en", "ro"];
let defaultLocale = "en";

export async function middleware(request) {
  const session = await getServerSession(request.cookies ?? "");

  // Check if there is any supported language in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLang = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLang) {
    const locale = defaultLocale;

    if (
      !session &&
      (request.nextUrl.pathname.startsWith(`/${locale}/account`) ||
        request.nextUrl.pathname.startsWith(`/${locale}/add-post`) ||
        request.nextUrl.pathname.startsWith(`/${locale}/listings`))
    ) {
      // NO lang-NO session
      return NextResponse.redirect(new URL(`/${locale}/news`, request.url));
    } else {
      //NO lang - YES session
      return NextResponse.redirect(
        new URL(`/${locale}/${pathname}`, request.url)
      );
    }
  } else {
    const locale = pathname.slice(1, 3);
    if (
      !session &&
      (request.nextUrl.pathname.startsWith(`/${locale}/account`) ||
        request.nextUrl.pathname.startsWith(`/${locale}/add-post`) ||
        request.nextUrl.pathname.startsWith(`/${locale}/listings`))
    ) {
      // YES lang - NO session
      // NEWS is only for test purpose
      return NextResponse.redirect(new URL(`/${locale}/news`, request.url));
    }
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
    "/en/account",
    "/en/add-post",
    "/en/listings",
    "/ro/account",
    "/ro/add-post",
    "/ro/listings",
  ],
};
