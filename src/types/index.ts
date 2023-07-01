export type Books<T> = {
  query: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  item: T[];
};

export type Book = {
  isbn: string;
  title: string;
  link: string;
  publisher: string;
  pubDate: string;
  year: string;
  month: string;
  author: string;
  authorTypeAuthor: string;
  authorTypeTranslator: string;
  description: string;
  cover: string;
};
