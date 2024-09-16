import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import { type PropsWithChildren } from 'react';

// Components
import { Footer } from '@/components/organisms/Footer/Footer';
import { Body, ThemeProvider } from '@/components/theme';
import Header from '../components/organisms/Header/index';

// Styling
import { Figtree } from 'next/font/google';
import './global/index.scss';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'An Optimizely demo for Jotun colour picker tool',
  keywords: 'Jotun, Colour picker, Optimizely',
  title: {
    default: 'Jotun colour picker - An Optimizely Demo',
    template: '%s - An Optimizely Demo',
  },
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TDNQ3PPP" />
      <Script src="https://cdn.optimizely.com/js/30057130179.js" data-test="script" />
        

      <ThemeProvider value={{ theme: 'system' }}>
        <Body
          className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white tw-overflow-x-hidden`}
        >
         
          <div className="flex min-h-screen flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </div>
        </Body>
      </ThemeProvider>
    </html>
  );
}