import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, DehydratedState } from '@tanstack/react-query';
import { Article } from '@/components/article/Article';
import { prefetchSingleArticle } from '@/api/news/queries';
import { queryClient } from '@/constants/query-client';

export const getServerSideProps = (async ({ query }) => {
  const { id } = query;

  if (!(id && typeof id === 'string')) {
    return {
      notFound: true,
    };
  }

  await prefetchSingleArticle(queryClient, id);

  return {
    props: {
      id: id,
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps<{
  id: string;
  dehydratedState: DehydratedState;
}>;

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ArticlePage({ id }: Props) {
  return <Article id={id} />;
}
