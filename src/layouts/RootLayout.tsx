import classNames from 'classnames';
import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div
    className={classNames(
      'flex h-full min-h-screen flex-col gap-5',
      'md:gap-10',
    )}
  >
    <Header />
    {children}
    <Footer />
  </div>
);
