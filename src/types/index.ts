export type Books<T> = {
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  item: T[];
};

export type Book = {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  cover: string;
};
