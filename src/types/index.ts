export type BackgroundType = 'color' | 'blur' | null;

export type Books<T> = {
  documents: T[];
  meta: Meta;
};

export type Book = {
  authors: string[];
  contents?: string;
  datetime?: string;
  isbn: string;
  price?: number;
  publisher?: string;
  sale_price?: number;
  status?: string;
  thumbnail?: string;
  title: string;
  translators: string[];
  url?: string;
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
  uid: string;
  createdAt: string;
  updatedAt: string;
  book: Book;
};

export type Suggest = {
  author: string;
  contents: string;
  isbn: string;
  publisher: string;
  thumbnail: string;
  title: string;
};

export interface BookSearchHistoryProps {
  removeKeyword: (index: number) => void;
  discardKeywords: () => void;
  keywords: string[];
  searchSelectedKeyword: (keyword: string) => void;
}

export enum Color {
  Dark = '#757575',
  Light = '#f7f7f7',
}
