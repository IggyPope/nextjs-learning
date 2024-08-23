import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from './constants';

type Props = {
  onItemClick: () => void;
};

export const NavList: React.FC<Props> = ({ onItemClick }) => {
  const pathname = usePathname();

  return (
    <>
      {Object.entries(NAV_LINKS).map(([href, label]) => {
        const isActive = pathname === `/${href}`;

        return (
          <Link
            key={href}
            href={href}
            className={classNames(
              'flex h-full w-fit items-center border-b-4 font-semibold',
              'hover:text-text',
              `${isActive ? 'border-b-main' : 'border-b-transparent text-subtext'}`,
            )}
            onClick={onItemClick}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};
