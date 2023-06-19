export type Books<T> = {
  query: string;
  totalResults: string;
  startIndex: string;
  itemsPerPage: string;
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
