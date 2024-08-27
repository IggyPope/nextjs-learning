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

  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center gap-5">
      {data.results.map((article, index) => (
        <ArticleCard key={article.url} article={article} index={index} />
      ))}
    </main>
  );
};
