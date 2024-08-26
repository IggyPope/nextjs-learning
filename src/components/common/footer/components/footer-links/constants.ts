import { Pages } from '@/constants/routes';

export const FOOTER_LINKS: Record<Pages, string> = {
  [Pages.ABOUT]: 'About Us',
  [Pages.HELP]: 'Help',
  [Pages.ADVERTISE]: 'Advertise',
  [Pages.PRIVACY]: 'Privacy Policy',
  [Pages.TERMS]: 'Terms of Service',
} as const;
