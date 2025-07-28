import "../globals.css";
import { Inter } from 'next/font/google';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { getTranslation } from "@/constants/translation";
import { Metadata } from "next";
import { SEOData } from "@/types/global";
import { getSeoData } from "@/services/product";
import { LangParamProps, LayoutParams } from "@/types/page-component-props";
import StickyPricingBar from "@/components/common/sticky-pricing-bar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bn' }]
}

//SEO META START
export async function generateMetadata({ params }: LangParamProps): Promise<Metadata> {
  const lang = (await params)?.lang
  const seoData: SEOData = await getSeoData(lang);
  const ogImageMeta = seoData?.defaultMeta?.find(meta => meta?.value === 'og:image');
  const ogImageTypeMeta = seoData?.defaultMeta?.find(meta => meta?.value === 'og:image:type');
  return {
    title: seoData?.title || "10 Minute School",
    description: seoData?.description || "10 Minute School",
    keywords: seoData?.keywords,
    openGraph: {
      title: seoData?.title,
      description: seoData?.description,
      type: "website",
      images: ogImageMeta?.content
        ? [
          {
            url: ogImageMeta?.content,
            type: ogImageTypeMeta?.content || 'image/jpeg',
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

export default async function RootLayout({ children, params }: LayoutParams) {
  const lang  = (await params).lang;
  const translation = await getTranslation(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar translation={translation} />
        {children}
        <StickyPricingBar />
        <Footer translation={translation} />
      </body>
    </html>
  );
}
