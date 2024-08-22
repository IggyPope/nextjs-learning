import classNames from 'classnames';
import Link from 'next/link';
import { SOCIALS } from './constants';

export const SocialIcons: React.FC = () => (
  <div
    className={classNames(
      'flex gap-5',
      'lg:items-center lg:justify-center lg:gap-8',
    )}
  >
    {SOCIALS.map(({ name, href, icon: IconComponent }) => (
      <Link key={name} href={href}>
        <IconComponent
          className={classNames(
            'h-10 w-10 text-subtext',
            'hover:text-text',
            'lg:h-6 lg:w-6',
          )}
        />
      </Link>
    ))}
  </div>
);
