import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, DehydratedState } from '@tanstack/react-query';
import { Article } from '@/components/article/Article';
import { prefetchSingleArticle } from '@/api/news/queries';
import { queryClient } from '@/constants/query-client';

export const getServerSideProps = (async ({ query }) => {
  const { uri } = query;

  if (!(uri && typeof uri === 'string')) {
    return {
      notFound: true,
    };
  }

  await prefetchSingleArticle(queryClient, uri);

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

export default function ArticlePage({ uri }: Props) {
  return <Article uri={uri} />;
}
