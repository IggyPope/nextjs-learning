import Link from 'next/link';
import { LogoIcon } from '@/assets/icons';

export const Logo: React.FC = () => (
  <Link href="/">
    <LogoIcon />
  </Link>
);
