import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopBar } from '@/components/layout/TopBar';
import { MainNavigation } from '@/components/layout/MainNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mr Maple - Japanese Maples and Rare Trees',
  description: 'Shop our collection of Japanese Maples, Conifers, Dogwoods, and other rare trees.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header>
          <TopBar />
          <MainNavigation />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
