'use server';

import { cookies } from 'next/headers';

export async function manageCookie(lang: string) {
    const cookieStore = cookies();

    if (lang === 'system') {
        (await cookieStore).delete('manualLang');
    } else {
         (await cookieStore).set('manualLang', lang, { path: '/', httpOnly: false });
    }
}
