import { useArticles } from '@/api/news/queries';
import { Sections } from '@/constants/routes';
import { ArticleCard } from './components/article-card/ArticleCard';

type Props = {
  section: Sections;
};

export const Section: React.FC<Props> = ({ section }) => {
  const { data, error, isPending } = useArticles(section);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return data.results.map((article) => (
    <ArticleCard key={article.url} article={article} />
  ));
};
