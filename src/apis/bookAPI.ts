import axios, { AxiosResponse } from 'axios';
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
}: {
  query: string;
  page: number;
}): Promise<AxiosResponse<Books<Book>, Error>> {
  return await client.get<Books<Book>>('book', {
    params: {
      query,
      sort: 'accuracy',
      page: page,
      size: 10,
    },
  });
}
