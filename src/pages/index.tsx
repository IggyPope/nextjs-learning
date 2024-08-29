import { dehydrate, DehydratedState } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { Section } from '@/components/section/Section';
import { Sections } from '@/constants/routes';
import { queryClient } from '@/constants/query-client';
import { prefetchArticles } from '@/api/news/queries';

export const getServerSideProps = (async () => {
  await prefetchArticles(queryClient, Sections.WORLD);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps<{ dehydratedState: DehydratedState }>;

export default function HomePage() {
  return <Section section={Sections.WORLD} />;
}
