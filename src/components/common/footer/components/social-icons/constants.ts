import { TwitterIcon, FacebookIcon, InstagramIcon } from '@/assets/icons';

enum SocialLinks {
  TWITTER = 'https://twitter.com',
  FACEBOOK = 'https://facebook.com',
  INSTAGRAM = 'https://instagram.com',
}

export const SOCIALS = [
  { name: 'Twitter', href: SocialLinks.TWITTER, icon: TwitterIcon },
  { name: 'Facebook', href: SocialLinks.FACEBOOK, icon: FacebookIcon },
  { name: 'Instagram', href: SocialLinks.INSTAGRAM, icon: InstagramIcon },
] as const;
