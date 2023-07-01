import axios from 'axios';

// TODO 백엔드 서버 구현 후 BASE 변수 선언하기
type SearchParams = Record<string, any>;

const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-125-50-34.ap-northeast-2.compute.amazonaws.com:4564',
});

// 도서 검색
export async function search(paramObj: SearchParams) {
  const params = new URLSearchParams({ ...paramObj }).toString();
  //return await axios.get('/data/search.json');
  //return await http://ec2-13-125-50-34.ap-northeast-2.compute.amazonaws.com:4564/comments?pageNumber=1
  return await axiosInstance.get(`/comments?pageNumber=1`);
  //return await axiosInstance.get(`/comments?${params}`);
  // return await axios.get(`${BASE}/?${params}`)
}
