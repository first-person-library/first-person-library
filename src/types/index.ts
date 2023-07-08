export type Books<T> = {
  documents: T[];
  meta: Meta;
};

export type Book = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

export type Meta = {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
};

export type Comment = {
  id: string;
  content: string;
  backgroundColor: string;
  backgroundType: string;
  isbn: string;
  uid: string;
};
