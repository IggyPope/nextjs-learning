import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
