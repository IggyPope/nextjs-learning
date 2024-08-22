import classNames from 'classnames';
import { FooterLinks } from '@/components/common/footer/components/footer-links/FooterLinks';
import { SocialIcons } from '@/components/common/footer/components/social-icons/SocialIcons';

export const Footer: React.FC = () => (
  <footer
    className={classNames(
      'flex flex-col items-center justify-center px-4',
      'lg:h-15 lg:flex-row',
    )}
  >
    <div
      className={classNames(
        'container flex h-full w-full flex-col items-center justify-between gap-8 border-t-2 py-5 text-sm text-subtext',
        'lg:flex-row',
      )}
    >
      <FooterLinks />
      <SocialIcons />
      <p className="lg:order-first">© 2022 Best News</p>
    </div>
  </footer>
);
