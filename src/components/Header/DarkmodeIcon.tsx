import Icon from '../UI/Icon';

const DarkmodeIcon = () => (
  <>
    {false && (
      <Icon src="/icon/moon.png" alt="다크모드" className="icon w-[22px]" />
    )}
    {true && (
      <Icon src="/icon/sun.png" alt="라이트모드" className="icon w-[22px]" />
    )}
  </>
);

export default DarkmodeIcon;
