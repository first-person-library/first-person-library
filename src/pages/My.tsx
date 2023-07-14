import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BookSlider from '../components/BookSlider';
import Comments from '../components/Comment/Comments';
import MyComments from '../components/Comment/MyComments';

export default function My() {
  const location = useLocation();
  const { pathname } = location;
  const isHomePage = pathname === '/';
  const isComments = pathname === '/my';
  const { title } = useParams();
  console.log(pathname);

  return (
    <main className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
      <MyComments />
    </main>
  );
}
