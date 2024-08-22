const enum SectionURLs {
  HOME = '/',
  WORLD = '/world',
  AUTOMOBILES = '/automobiles',
  TECHNOLOGY = '/technology',
  BUSINESS = '/business',
}

export const NAV_LINKS: Record<SectionURLs, string> = {
  [SectionURLs.HOME]: 'Home',
  [SectionURLs.WORLD]: 'World',
  [SectionURLs.AUTOMOBILES]: 'Automobiles',
  [SectionURLs.TECHNOLOGY]: 'Technology',
  [SectionURLs.BUSINESS]: 'Business',
} as const;
