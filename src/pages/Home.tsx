import GeneralComments from '../components/Comment/GeneralComments';
import Hero from '../components/UI/Hero/Hero';
import BookSlider from '../components/UI/Slider/BookSlider';
import usePageFlags from '../hooks/usePageFlags';

export default function Home() {
  const { IS_HOME_PAGE } = usePageFlags();

  return (
    <main>
      {IS_HOME_PAGE && <Hero />}
      <div className="w-full mx-auto lg:w-5/6 md:px-4 p-6">
        {IS_HOME_PAGE && <BookSlider />}
        <GeneralComments />
      </div>
    </main>
  );
}
