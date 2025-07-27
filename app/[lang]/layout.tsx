
import "../globals.css";
import { Inter } from 'next/font/google';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { getTranslation } from "@/constants/translation";
import { TranslatedData } from "@/types/global";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bn' }]
}


// export async function generateMetadata(): Promise<Metadata> {

// }

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: 'en' | 'bn' }>
}>) {
  const { lang } = await params
  const translation: TranslatedData = await getTranslation(lang)
  return (
    <html lang={(await params).lang}>
      <body className={inter.className}>
        <Navbar translation={translation}/>
        {children}
        <Footer translation={translation}/>
      </body>
    </html>
  );
}