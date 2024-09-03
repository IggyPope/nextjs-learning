import { API_STORIES_BASE_URL, API_KEY } from '@/constants/variables';
import { SingleArticleResponse, ArticlesResponse } from './types';

export const fetchArticles = async () => {
  const response = await fetch(`${API_STORIES_BASE_URL}?populate=*`, {
    headers: {
      Authorization: `bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data: ArticlesResponse = await response.json();

    return data;
  }

  throw new Error('Error fetching the data.');
};

export const fetchArticleById = async (id: string) => {
  const response = await fetch(`${API_STORIES_BASE_URL}/${id}?populate=*`, {
    headers: {
      Authorization: `bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data: SingleArticleResponse = await response.json();

    return data;
  }

  throw new Error('Error fetching the data.');
};
