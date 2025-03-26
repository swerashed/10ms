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
  const langCookie = request.cookies.get('lang')?.value as 'en' | 'bn' | undefined;
  const manualLang = request.cookies.get('manualLang')?.value as 'en' | 'bn' | undefined;

  const detectedLocale = getLocale(request);

  const response = NextResponse.next();

  if (manualLang) {
    // Manual language preference: sync lang cookie with manualLang
    if (langCookie !== manualLang) {
      response.cookies.set('lang', manualLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    }
  } else {
    // Auto-detect language from Accept-Language header
    if (langCookie !== detectedLocale) {
      response.cookies.set('lang', detectedLocale, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};
