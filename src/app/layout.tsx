import PrelineScript from '@/components/PrelineScript';
import { inter } from '@/utils/fonts';

import type { Metadata } from 'next';

import '@/assets/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Uvita',
    default: 'Uvita',
  },
  description: 'Focused on manage clinic processes',
  authors: [
    {
      name: 'Cercedo',
      url: 'https://github.com/Cercedo',
    },
  ],
  keywords: ['Uvita', 'Next.js', 'medical'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
