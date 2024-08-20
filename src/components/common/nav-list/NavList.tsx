import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NEWS_SECTIONS } from '@/constants/enums';

type NavListProps = {
  closeMenu: () => void;
};

export const NavList: React.FC<NavListProps> = ({ closeMenu }) => {
  const pathname = usePathname();

  return (
    <>
      {NEWS_SECTIONS.map((section) => {
        const isActive = pathname === section.url;

        return (
          <Link
            key={section.name}
            href={section.url}
            className={classNames([
              'flex h-full w-fit items-center border-b-4 font-semibold hover:text-text',
              `${isActive ? 'border-b-main' : 'border-b-transparent text-subtext'}`,
            ])}
            onClick={closeMenu}
          >
            {section.name}
          </Link>
        );
      })}
    </>
  );
};
