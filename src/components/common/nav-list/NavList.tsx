import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { capitalize } from '@/utils/string';
import { NewsSections } from '@/constants/enums';

type NavListProps = {
  closeMenu: () => void;
};

export const NavList: React.FC<NavListProps> = ({ closeMenu }) => {
  const pathname = usePathname();

  return (
    <>
      {['home', ...Object.values(NewsSections)].map((section) => {
        const href = `/${section.replace(/home/gi, '')}`;
        const isActive =
          pathname === `/${section}` || `${pathname}home` === `/${section}`;

        return (
          <Link
            key={section}
            href={href}
            className={classNames([
              'flex h-full w-fit items-center border-b-4 font-semibold',
              `${isActive ? 'border-b-main' : 'border-b-transparent text-subtext'}`,
            ])}
            onClick={closeMenu}
          >
            {capitalize(section)}
          </Link>
        );
      })}
    </>
  );
};
