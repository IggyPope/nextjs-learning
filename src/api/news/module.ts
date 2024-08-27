import { Sections } from '@/constants/routes';
import {
  API_STORIES_BASE_URL,
  API_SEARCH_BASE_URL,
  API_KEY,
} from '@/constants/variables';
import { DetailedArticleResponse, type ArticlesResponse } from './types';

export const fetchArticles = async (section: Sections) => {
  const response = await fetch(
    `${API_STORIES_BASE_URL}${section}.json?api-key=${API_KEY}`,
  );

  if (response.ok) {
    const data: ArticlesResponse = await response.json();

    return {
      ...data,
      results: data.results.filter(
        (article) => article.item_type === 'Article',
      ),
    };
  }

  throw new Error('Error fetching the data.');
};

export const fetchArticleByUri = async (uri: string) => {
  const response = await fetch(
    `${API_SEARCH_BASE_URL}?fq=uri:("${uri}")&api-key=${API_KEY}`,
  );

  if (response.ok) {
    const data: DetailedArticleResponse = await response.json();

    return data;
  }

  throw new Error('Error fetching the data.');
};
