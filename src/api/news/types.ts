export type BaseResponse<T> = {
  status: string;
  copyright: string;
  num_results: number;
  results: T[];
};

export type ArticlesResponse = BaseResponse<Article>;

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

type Multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
};
