import axios from 'axios';

// TODO 백엔드 서버 구현 후 BASE 변수 선언하기
type SearchParams = Record<string, any>;

// 도서 검색
export async function search(paramObj: SearchParams) {
  const params = new URLSearchParams({ ...paramObj }).toString();
  return await axios.get('/data/search.json');
  // return await axios.get(`${BASE}/?${params}`)
}
