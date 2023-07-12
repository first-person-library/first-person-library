import BookSlider from '../components/BookSlider';
import Comments from '../components/Comment/Comments';

const Home = () => {
  return (
    <main className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
      <BookSlider />
      <Comments />
    </main>
  );
};

export default Home;
