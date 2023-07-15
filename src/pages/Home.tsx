import { useLocation, useParams } from 'react-router-dom';
import BookSlider from '../components/BookSlider';
import GeneralComments from '../components/Comment/GeneralComments';
import Hero from '../components/UI/Hero';

export default function Home() {
  const location = useLocation();
  const { pathname } = location;
  const isComments = pathname === '/my';
  const isHome = pathname === '/';
  const { title } = useParams();

  return (
    <main className="w-full mx-auto">
      {isHome && <Hero />}
      <div className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
        {!title && !isComments && <BookSlider />}
        <GeneralComments />
      </div>
    </main>
  );
}
