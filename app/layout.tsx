'use client';

import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import '../i18n/i18n';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
