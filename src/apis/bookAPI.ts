import axios from 'axios';

type SearchProp = {
  keyword: string;
};

// 도서 검색
export async function search({ keyword }: SearchProp) {
  return axios.get('/data/search.json');
  // return keyword
  //   ? axios.get(
  //       `http://22b3-119-206-80-194.ngrok-free.app/books?query=빨강&page=1`
  //     )
  //   : axios.get('/data/search.json');
}
