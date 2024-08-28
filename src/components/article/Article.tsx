import classNames from 'classnames';
import Image from 'next/image';
import { useSingleArticle } from '@/api/news/queries';
import { Badge } from '@/components/common/badge/Badge';
import { PublishedDate } from '@/components/common/published-date/PublishedDate';
import { API_IMAGES_BASE_URL } from '@/constants/variables';

type Props = {
  uri: string;
};

export const Article: React.FC<Props> = ({ uri }) => {
  const { data, error, isPending } = useSingleArticle(uri);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data.response.docs.length === 0) {
    return <div>Article not found</div>;
  }

  const {
    section_name: section,
    pub_date: date,
    headline,
    abstract,
    lead_paragraph: paragraph,
    multimedia,
  } = data.response.docs[0];

  return (
    <main className="flex w-full flex-1 flex-col">
      <article
        className={classNames(
          'container mx-auto flex w-full flex-col gap-5',
          'md:gap-10',
        )}
      >
        <header
          className={classNames(
            'flex w-full items-center justify-between gap-5 px-4',
            'md:justify-start md:px-0',
          )}
        >
          <Badge content={section} />
          <PublishedDate date={date} />
        </header>
        <main className="flex flex-col gap-10">
          <div className={classNames('relative h-70 w-full', 'md:h-115')}>
            {multimedia.length ? (
              <Image
                src={`${API_IMAGES_BASE_URL}${multimedia[0].url}`}
                alt={multimedia[0].caption || 'article image'}
                fill={true}
                className={classNames('object-cover object-center')}
                priority={true}
              />
            ) : (
              <div className="h-full w-full bg-gray-200" />
            )}
          </div>
          <div className={classNames('flex flex-col gap-4 px-4', 'md:px-0')}>
            <h1>{headline.main}</h1>
            <p className="italic">{`"${abstract.slice(0, 90)}..."`}</p>
          </div>
          <p className={classNames('px-4', 'md:px-0')}>{paragraph}</p>
        </main>
      </article>
    </main>
  );
};
