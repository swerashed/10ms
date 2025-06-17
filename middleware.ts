import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the pathname already starts with a valid locale, continue.
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // If pathname starts with a string that LOOKS like a locale but is invalid → Let it 404.
  const firstPathSegment = pathname.split('/')[1];
  if (firstPathSegment && firstPathSegment.length === 2 && !locales.includes(firstPathSegment)) {
    // Let Next.js 404 handle it (do not redirect)
    return NextResponse.next();
  }

  // Detect browser language and redirect
  const detectedLocale = getLocale(request);
  const redirectUrl = new URL(`/${detectedLocale}${pathname}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};
