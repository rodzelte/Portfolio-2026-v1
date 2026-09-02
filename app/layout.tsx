import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rodzel John Te — Designer & Developer',
  description: 'Portfolio of Rodzel John Te, a WordPress, Shopify, and Wix designer and developer.',
  openGraph: {
    title: 'Rodzel John Te — Designer & Developer',
    description: 'WordPress, Shopify, and Wix websites designed and developed with clarity, personality, and purpose.',
    type: 'website',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Rodzel John Te — Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodzel John Te — Designer & Developer',
    description: 'WordPress, Shopify, and Wix websites designed and developed with clarity, personality, and purpose.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
