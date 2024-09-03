import { useArticles } from '@/api/news/queries';
import { ArticleCard } from './components/article-card/ArticleCard';

export const Section: React.FC = () => {
  const { data, error, isPending } = useArticles();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center gap-5">
      {data.data.map((article, index) => (
        <ArticleCard key={article.id} article={article} index={index} />
      ))}
    </main>
  );
};
