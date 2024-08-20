import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants/enums';

const socialComponents = SOCIAL_LINKS.map((social) => {
  const Component = dynamic(
    () => import(`@/components/common/icons/${social.name}Icon.tsx`),
    { ssr: false },
  ) as React.FC<React.SVGProps<SVGSVGElement>>;

  return { name: social.name, url: social.url, component: Component };
});

export const SocialIcons = () => {
  return (
    <div
      className={classNames([
        'flex gap-5',
        'lg:items-center lg:justify-center lg:gap-8',
      ])}
    >
      {socialComponents.map(({ name, url, component: Component }) => (
        <Link key={name} href={url}>
          <Component
            key={name}
            className={classNames([
              'h-10 w-10 text-subtext hover:text-text',
              'lg:h-6 lg:w-6',
            ])}
          />
        </Link>
      ))}
    </div>
  );
};
