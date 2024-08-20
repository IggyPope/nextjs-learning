import { Logo } from '../logo/Logo';
import { NavMenu } from '../nav-menu/NavMenu';

export const Header = () => {
  return (
    <header className="relative z-10 flex h-[60px] justify-center bg-background px-[15px] shadow-header">
      <div className="flex h-full w-full max-w-[1200px] items-center justify-between">
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};
