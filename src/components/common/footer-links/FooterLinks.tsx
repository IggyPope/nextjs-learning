import classNames from 'classnames';
import Link from 'next/link';
import { SITE_PAGES } from '@/constants/enums';

export const FooterLinks = () => {
  return (
    <nav
      className={classNames([
        'flex flex-col items-center gap-5',
        'lg:flex-row lg:items-center lg:justify-center lg:gap-8',
      ])}
    >
      {SITE_PAGES.map((page) => (
        <Link
          key={page.name}
          href={page.url}
          className="text-subtext hover:text-text"
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};
