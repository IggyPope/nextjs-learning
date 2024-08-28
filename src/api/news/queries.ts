import { useQuery } from '@tanstack/react-query';
import { Sections } from '@/constants/routes';
import { fetchArticleByUri, fetchArticles } from './module';

enum QueryKeys {
  ARTICLES = 'articles',
}

export const useArticles = (section: Sections) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES, section],
    queryFn: () => fetchArticles(section),
  });

export const useSingleArticle = (uri: string) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES, uri],
    queryFn: () => fetchArticleByUri(uri),
  });
