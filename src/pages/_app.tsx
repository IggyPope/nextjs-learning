import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import { HydrationBoundary } from '@tanstack/react-query';
import { RootLayout } from '@/layouts/RootLayout';
import { QueryClientProvider } from '@/providers/QueryClientProvider';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <div className={openSans.className}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
