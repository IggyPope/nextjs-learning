import { useRouter } from 'next/router';
import { Section } from '@/components/section/Section';
import { Sections } from '@/constants/routes';

export default function SectionPage() {
  const { query } = useRouter();

  return <Section section={query.section as Sections} />;
}
