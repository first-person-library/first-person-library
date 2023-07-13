import { useParams } from 'react-router-dom';
import BookSlider from '../components/BookSlider';
import Comments from '../components/Comment/Comments';

const Home = () => {
  const { title } = useParams();

  return (
    <main className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
      {!title && <BookSlider />}
      <Comments />
    </main>
  );
};

export default Home;
