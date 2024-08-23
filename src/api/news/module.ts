import { Sections } from '@/constants/routes';
import { API_BASE_URL, API_KEY } from '@/constants/variables';
import { type ArticlesResponse } from './types';

export const fetchArticles = async (section: Sections) => {
  const newsSection = section || 'home';

  const response = await fetch(
    `${API_BASE_URL}${newsSection}.json?api-key=${API_KEY}`,
  );

  if (response.ok) {
    const data: ArticlesResponse = await response.json();

    return data;
  }

  throw new Error('Error fetching the data.');
};
