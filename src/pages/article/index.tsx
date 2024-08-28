import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  dehydrate,
  DehydratedState,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Article } from '@/components/article/Article';
import { QueryKeys } from '@/api/news/queries';
import { fetchArticleByUri } from '@/api/news/module';

export const getServerSideProps = (async ({ query }) => {
  const { uri } = query;

  if (!(uri && typeof uri === 'string')) {
    return {
      notFound: true,
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.ARTICLES, uri],
    queryFn: () => fetchArticleByUri(uri),
  });

  return {
    props: {
      uri: uri,
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps<{
  uri: string;
  dehydratedState: DehydratedState;
}>;

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ArticlePage({ uri, dehydratedState }: Props) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Article uri={uri} />
    </HydrationBoundary>
  );
}
