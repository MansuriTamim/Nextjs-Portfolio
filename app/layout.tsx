import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: 'Tamim Mansuri',
  description: `Hi 👋, I'm Tamim. I'm a passionate software engineer with a knack for creating scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are as impactful for users as they are efficient for developers.`,
  creator: 'Tamim Mansuri',
  applicationName: 'My website',
  keywords: [
    'Tamim Mansuri',
    'Tamim',
    'Mansuri',
    'Portfolio',
    'Next.js',
    'Software Developer',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
 
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
