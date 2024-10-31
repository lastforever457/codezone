import './globals.css';
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
