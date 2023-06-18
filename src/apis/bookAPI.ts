import axios from 'axios';

type SearchProp = {
  keyword?: string;
};

export async function search(keyword: SearchProp) {
  return axios.get('data/search.json');
}
