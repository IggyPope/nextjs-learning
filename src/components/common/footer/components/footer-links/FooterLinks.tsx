import classNames from 'classnames';
import Link from 'next/link';
import { FOOTER_LINKS } from './constants';

export const FooterLinks: React.FC = () => (
  <nav
    className={classNames(
      'flex flex-col items-center gap-5',
      'lg:flex-row lg:items-center lg:justify-center lg:gap-8',
    )}
  >
    {Object.entries(FOOTER_LINKS).map(([href, label]) => (
      <Link
        key={label}
        href={`/${href}`}
        className={classNames('text-subtext', 'hover:text-text')}
      >
        {label}
      </Link>
    ))}
  </nav>
);
