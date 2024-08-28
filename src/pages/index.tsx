import {
  dehydrate,
  DehydratedState,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetchArticles } from '@/api/news/module';
import { QueryKeys } from '@/api/news/queries';
import { Section } from '@/components/section/Section';
import { Sections } from '@/constants/routes';

export const getServerSideProps = (async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.ARTICLES, Sections.WORLD],
    queryFn: () => fetchArticles(Sections.WORLD),
  });

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
