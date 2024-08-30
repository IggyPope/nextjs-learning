import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { Article } from '@/api/news/types';
import { Badge } from '@/components/common/badge/Badge';
import { PublishedDate } from '@/components/common/published-date/PublishedDate';
import { API_IMAGES_BASE_URL } from '@/constants/variables';

type Props = {
  article: Article;
  index: number;
};

export const ArticleCard: React.FC<Props> = ({ article, index }) => (
  <Link
    href={{
      pathname: `/article/`,
      query: {
        id: article.id,
      },
    }}
    className="block w-full"
  >
    <article
      className={classNames(
        'flex w-full flex-col gap-5 shadow-card',
        'md:h-115 md:flex-row md:gap-0 md:rounded-lg',
      )}
    >
      <div
        className={classNames(
          'grid h-full grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-5 px-4 pt-5',
          'md:grid-cols-1 md:grid-rows-[auto_1fr_auto] md:p-10',
        )}
      >
        <Badge content={article.attributes.section} />
        <PublishedDate
          date={article.attributes.date}
          className={classNames(
            'mt-auto text-right',
            'md:order-last md:text-left',
          )}
        />
        <main className="col-span-2 flex flex-col gap-4">
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.description}</p>
        </main>
      </div>
      <div
        className={classNames(
          'relative h-70 w-full shrink-0',
          'md:ml-auto md:h-full md:w-1/2',
        )}
      >
        {article.attributes.image ? (
          <Image
            src={`${API_IMAGES_BASE_URL}${article.attributes.image.data.attributes.url}`}
            alt={article.attributes.image.data.attributes.alternativeText}
            fill={true}
            className={classNames('object-cover object-top', 'md:rounded-r-lg')}
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>
    </article>
  </Link>
);
