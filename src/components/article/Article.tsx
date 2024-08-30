import classNames from 'classnames';
import Image from 'next/image';
import Head from 'next/head';
import { useSingleArticle } from '@/api/news/queries';
import { Badge } from '@/components/common/badge/Badge';
import { PublishedDate } from '@/components/common/published-date/PublishedDate';
import { API_IMAGES_BASE_URL, DEPLOY_BASE_URL } from '@/constants/variables';

type Props = {
  id: string;
};

export const Article: React.FC<Props> = ({ id }) => {
  const { data, error, isPending } = useSingleArticle(id);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data.data) {
    return <div>Article not found</div>;
  }

  const { title, description, section, paragraph, date, image } =
    data.data.attributes;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Best News" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${API_IMAGES_BASE_URL}${image.data.attributes.url}`}
        />
        <meta
          property="og:url"
          content={`${DEPLOY_BASE_URL}article?id=${id}`}
        />
      </Head>
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
              {image ? (
                <Image
                  src={`${API_IMAGES_BASE_URL}${image.data.attributes.url}`}
                  alt={image.data.attributes.alternativeText || 'article image'}
                  fill={true}
                  className={classNames('object-cover object-center')}
                  priority={true}
                />
              ) : (
                <div className="h-full w-full bg-gray-200" />
              )}
            </div>
            <div className={classNames('flex flex-col gap-4 px-4', 'md:px-0')}>
              <h1>{title}</h1>
              <p className="italic">{`"${description.slice(0, 90)}..."`}</p>
            </div>
            <p className={classNames('px-4', 'md:px-0')}>{paragraph}</p>
          </main>
        </article>
      </main>
    </>
  );
};
