import { useState } from 'react';
import classNames from 'classnames';
import { MenuToggle } from './components/menu-toggle/MenuToggle';
import { NavList } from './components/nav-list/NavList';

export const NavMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <menu
        className={classNames(
          'absolute left-0 right-0 top-full z-10 flex-col gap-5 bg-background px-4 py-5 shadow-header',
          isMenuOpen ? 'flex' : 'hidden',
          'md:static md:z-auto md:flex md:h-full md:flex-row md:gap-8 md:p-0 md:shadow-inherit',
        )}
      >
        <NavList onItemClick={closeMenu} />
      </menu>
      <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};
