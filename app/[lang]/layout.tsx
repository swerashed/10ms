import "../globals.css";
import { Inter } from 'next/font/google';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { getTranslation } from "@/constants/translation";
import { Metadata } from "next";
import { SEOData } from "@/types/global";
import { getSeoData } from "@/services/product";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bn' }]
}

//SEO META START
export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'bn' };
}): Promise<Metadata> {
  const seoData: SEOData = await getSeoData(params.lang);
  return {
    title: seoData?.title || "10 Minute School",
    description: seoData?.description || "10 Minute School",
    keywords: seoData?.keywords,
    openGraph: {
      title: seoData?.title,
      description: seoData?.description,
      type: "website",
      images: seoData?.defaultMeta.find(meta => meta.value === 'og:image')?.content
        ? [
          {
            url: seoData.defaultMeta.find(meta => meta.value === 'og:image')?.content!,
            type: seoData.defaultMeta.find(meta => meta.value === 'og:image:type')?.content || 'image/jpeg',
          },
        ]
        : [],
    },
    other: seoData?.defaultMeta.reduce((acc, meta) => {
      acc[meta.value] = meta.content;
      return acc;
    }, {} as Record<string, string>),
  };
}
//SEO META END

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: 'en' | 'bn' };
}>) {
  const { lang } = params;
  const translation = await getTranslation(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar translation={translation} />
        {children}
        <Footer translation={translation} />
      </body>
    </html>
  );
}
