export type Books<T> = {
  documents: T[];
  meta: Meta;
};

export interface Book {
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
  translators: string[] | [];
  url: string;
}

export interface Meta {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}
