import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { cookies } from 'next/headers';
import { getSeoData } from "@/services/product";
import { SEOData } from "@/types/global";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export async function generateMetadata(): Promise<Metadata> {
  const seo: SEOData = await getSeoData('en');
  if (!seo) return {};
  const ogData = seo.defaultMeta.reduce((acc, meta) => {
    if (meta.value.startsWith('og:')) {
      const key = meta.value.replace('og:', '');
      if (key === 'image') {
        acc.images = acc.images || [];
        acc.images.push({
          url: meta.content,
          alt:
            seo.defaultMeta.find((m) => m.value === 'og:image:alt')?.content ||
            '',
          type:
            seo.defaultMeta.find((m) => m.value === 'og:image:type')?.content ||
            '',
          secureUrl:
            seo.defaultMeta.find(
              (m) => m.value === 'og:image:secure_url'
            )?.content || meta.content,
        });
      } else if (key === 'type') {
        // Skip og:type here, we will set it manually below
      } else {
        acc[key] = meta.content;
      }
    }
    return acc;
  }, {} as any);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      type: 'website',
      ...ogData,
    },
    alternates: {
      canonical: ogData.url,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  const cookieStore = cookies();
  const langCookie = (await cookieStore).get('lang')?.value as 'en' | 'bn' | undefined;


  return (
    <html lang={langCookie}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}