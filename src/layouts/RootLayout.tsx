import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex h-full min-h-screen flex-col gap-10">
    <Header />
    {children}
    <Footer />
  </div>
);
