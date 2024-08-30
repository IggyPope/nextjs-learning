export type ArticlesResponse = {
  data: Article[];
};

export type Article = {
  id: number;
  attributes: ArticleAttributes;
};

type ArticleAttributes = {
  title: string;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedA: string;
  paragraph: string;
  section: string;
  image: Image;
};

export type SingleArticleResponse = {
  data: Article | null;
};

type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      mime: string;
      size: number;
      url: string;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};
