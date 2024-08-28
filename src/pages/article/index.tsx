import { ParsedUrlQuery } from 'querystring';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Article } from '@/components/article/Article';

export const getServerSideProps = (async ({ query }) => ({
  props: {
    uri: query.uri,
  },
})) satisfies GetServerSideProps<{ uri: ParsedUrlQuery[string] }>;

export default function ArticlePage({
  uri,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!(uri && typeof uri === 'string')) {
    return <div>Article not found</div>;
  }

  return <Article uri={uri}></Article>;
}
