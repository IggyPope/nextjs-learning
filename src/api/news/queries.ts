import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchArticleById, fetchArticles } from './module';

enum QueryKeys {
  ARTICLES = 'articles',
}

export const useArticles = () =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES],
    queryFn: () => fetchArticles(),
    staleTime: 1000 * 60 * 5,
  });

export const prefetchArticles = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.ARTICLES],
    queryFn: () => fetchArticles(),
  });
};

export const useSingleArticle = (id: string) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES, id],
    queryFn: () => fetchArticleById(id),
    staleTime: 1000 * 60 * 5,
  });

export const prefetchSingleArticle = async (
  queryClient: QueryClient,
  id: string,
) => {
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.ARTICLES, id],
    queryFn: () => fetchArticleById(id),
  });
};
