'use client';

import { ReactNode } from 'react';
import '../i18n/i18n';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
