import classNames from 'classnames';
import { FooterLinks } from '@/components/common/footer-links/FooterLinks';
import { SocialIcons } from '@/components/common/social-icons/SocialIcons';

export const Footer = () => {
  return (
    <footer
      className={classNames([
        'flex flex-col items-center justify-center px-[15px]',
        'lg:h-[60px] lg:flex-row',
      ])}
    >
      <div
        className={classNames([
          'flex h-full w-full max-w-[1200px] flex-col items-center justify-between gap-8 border-t-2 py-5 text-sm text-subtext',
          'lg:flex-row',
        ])}
      >
        <FooterLinks />
        <SocialIcons />
        <p className="lg:order-first">© 2022 Best News</p>
      </div>
    </footer>
  );
};
