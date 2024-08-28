export type ArticlesResponse = {
  status: string;
  copyright: string;
  num_results: number;
  results: Article[];
};

export type Article = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  short_url: string;
  multimedia: Multimedia[];
};

export type DetailedArticleResponse = {
  status: string;
  copyright: string;
  response: {
    docs: DetailedArticle[];
  };
};

export type DetailedArticle = {
  abstract: string;
  snippet: string;
  lead_paragraph: string;
  section_name: string;
  pub_date: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  uri: string;
  web_url: string;
};

type Multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
};

type Headline = {
  main: string;
};
