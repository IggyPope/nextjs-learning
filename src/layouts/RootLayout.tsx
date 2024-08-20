import { Header } from '@/components/common/header/Header';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
