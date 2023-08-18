import axios from 'axios';
import { Book, Books } from '../types';

const client = axios.create({
  baseURL: 'https://dapi.kakao.com/v3/search/',
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
  },
});

export async function search({
  query,
  page,
  size,
}: {
  query: string;
  page: number;
  size: number;
}): Promise<Books<Book>> {
  const response = await client.get<Books<Book>>('book', {
    params: {
      query,
      sort: 'accuracy',
      page,
      size,
    },
  });
  return response.data;
}
