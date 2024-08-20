import { useState } from 'react';
import classNames from 'classnames';
import { MenuToggle } from '@/components/common/menu-toggle/MenuToggle';
import { NavList } from '@/components/common/nav-list/NavList';

export const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <menu
        className={classNames([
          'absolute left-0 right-0 top-full z-[1] flex-col gap-5 bg-background px-[15px] py-[20px] shadow-header',
          isMenuOpen ? 'flex' : 'hidden',
          'md:static md:z-auto md:flex md:h-full md:flex-row md:gap-8 md:p-0 md:shadow-inherit',
        ])}
      >
        <NavList closeMenu={() => setIsMenuOpen(false)} />
      </menu>
      <MenuToggle isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};
