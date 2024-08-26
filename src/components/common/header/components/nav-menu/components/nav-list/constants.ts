import { Sections } from '@/constants/routes';

export const NAV_LINKS: Record<Sections, string> = {
  [Sections.HOME]: 'Home',
  [Sections.WORLD]: 'World',
  [Sections.AUTOMOBILES]: 'Automobiles',
  [Sections.TECHNOLOGY]: 'Technology',
  [Sections.BUSINESS]: 'Business',
} as const;
