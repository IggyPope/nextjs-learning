import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
