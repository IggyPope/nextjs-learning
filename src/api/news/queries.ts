import { useQuery } from '@tanstack/react-query';
import { Sections } from '@/constants/routes';
import { fetchArticles } from './module';

enum QueryKeys {
  ARTICLES = 'articles',
}

export const useArticles = (section: Sections) =>
  useQuery({
    queryKey: [QueryKeys.ARTICLES],
    queryFn: () => fetchArticles(section),
  });
