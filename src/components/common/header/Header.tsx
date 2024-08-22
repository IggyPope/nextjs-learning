import { NavMenu } from './components/nav-menu/NavMenu';
import { Logo } from './components/logo/Logo';

export const Header: React.FC = () => (
  <header className="relative flex h-15 justify-center bg-background px-4 shadow-header">
    <div className="container flex h-full w-full items-center justify-between">
      <Logo />
      <NavMenu />
    </div>
  </header>
);
