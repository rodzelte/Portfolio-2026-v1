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
  title: 'Rodzel John Te — Virtual Assistant & Developer',
  description: 'Portfolio of Rodzel John Te, a Virtual Assistant and full-stack developer specializing in GoHighLevel automation and WordPress.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Rodzel John Te — Virtual Assistant & Developer',
    description: 'GoHighLevel automations, WordPress websites, and full-stack web apps, with real proof of work.',
    type: 'website',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Rodzel John Te — Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodzel John Te — Virtual Assistant & Developer',
    description: 'GoHighLevel automations, WordPress websites, and full-stack web apps, with real proof of work.',
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
