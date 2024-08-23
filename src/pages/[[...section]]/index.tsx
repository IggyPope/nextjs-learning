import { Section } from '@/components/section/Section';
import { Sections } from '@/constants/routes';

export default function Page() {
  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center gap-5">
      <Section section={Sections.WORLD} />
    </main>
  );
}
