import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Aki Yuasa's Blog`,
  description: `Welcome to my Blog! I'm a freshman enrolled at Stanford University playing for the varsity women's soccer team. Apart from soccer, I like traveling, cooking, making art, and learning new things. I was born in Oakland and have lived in Hokkaido, Vermont, and Munich. Now I'm back in the Bay Area, diving headfirst into a new adventure.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cormorant.className + ' bg-slate-50 text-gray-950'}>
        {children}
      </body>
    </html>
  );
}
