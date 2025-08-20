// src/app/layout.tsx
import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'LuxeShop - فروشگاه لوکس آنلاین',
  description: 'تجربه‌ای لوکس از خرید آنلاین با بهترین محصولات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${roboto.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}