import { useQuery } from '@tanstack/react-query';
import { Sections } from '@/constants/routes';
import { fetchArticleByUri, fetchArticles } from './module';

export enum QueryKeys {
  ARTICLES = 'articles',
}

export const useArticles = (section: Sections) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES, section],
    queryFn: () => fetchArticles(section),
    staleTime: 1000 * 60 * 5,
  });

export const useSingleArticle = (uri: string) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES, uri],
    queryFn: () => fetchArticleByUri(uri),
    staleTime: 1000 * 60 * 5,
  });
