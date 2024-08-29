import {
  dehydrate,
  DehydratedState,
  HydrationBoundary,
} from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function HomePage({ dehydratedState }: Props) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Section section={Sections.WORLD} />
    </HydrationBoundary>
  );
}
