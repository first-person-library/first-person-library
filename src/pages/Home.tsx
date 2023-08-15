import { useLocation, useParams } from 'react-router-dom';
import BookSlider from '../components/BookSlider';
import GeneralComments from '../components/Comment/GeneralComments';
import Hero from '../components/UI/Hero';

export default function Home() {
  const location = useLocation();
  const { pathname } = location;
  const isHomePage = pathname === '/';

  return (
    <main className="w-full mx-auto">
      {isHomePage && <Hero />}
      <div className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
        {isHomePage && <BookSlider />}
        <GeneralComments />
      </div>
    </main>
  );
}
