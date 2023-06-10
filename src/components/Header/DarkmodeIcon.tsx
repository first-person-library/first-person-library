import sun from '../../assets/icon/sun.png';
import moon from '../../assets/icon/moon.png';

const DarkmodeIcon = () => (
  <>
    {false && (
      <img
        src={moon}
        alt="다크모드"
        className="w-[22px] h-[22px] bg-no-repeat bg-contain cursor-pointer"
      />
    )}
    {true && (
      <img
        src={sun}
        alt="라이트모드"
        className="w-[22px] h-[22px] bg-no-repeat bg-contain cursor-pointer"
      />
    )}
  </>
);

export default DarkmodeIcon;
