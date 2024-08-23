import Image from 'next/image';
import classNames from 'classnames';
import { Article } from '@/api/news/types';
import { formatDateString } from './helpers';

type Props = {
  article: Article;
};

export const ArticleCard: React.FC<Props> = ({ article }) => (
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
      <span
        className={classNames(
          'w-fit rounded bg-main px-2 py-1 font-semibold leading-extra-tight text-background',
          'first-letter:uppercase',
        )}
      >
        {article.section || article.subsection || 'Other'}
      </span>
      <span
        className={classNames(
          'mt-auto text-right text-sm leading-tight',
          'md:order-last md:text-left',
        )}
      >
        {formatDateString(article.published_date)}
      </span>
      <main className="col-span-2 flex flex-col gap-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p>{article.abstract}</p>
      </main>
    </div>
    <div
      className={classNames(
        'relative h-70 w-full shrink-0',
        'md:ml-auto md:h-full md:w-1/2',
      )}
    >
      {article.multimedia?.length ? (
        <Image
          src={article.multimedia[0].url}
          alt={article.multimedia[0].caption}
          fill={true}
          className={classNames('object-cover object-top', 'md:rounded-r-lg')}
        />
      ) : (
        <div className="h-full w-full bg-gray-200" />
      )}
    </div>
  </article>
);
