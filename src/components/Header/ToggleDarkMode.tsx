import { useDarkModeContext } from '../../contexts/DarkModeContext';
import Icon from '../UI/Icon';

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const iconSrc = darkMode ? 'moon.png' : 'sun.png';
  const iconLabel = darkMode ? '다크모드 활성화' : '라이트모드 활성화';

  return (
    <button type="button" onClick={toggleDarkMode} aria-label={iconLabel}>
      <Icon src={iconSrc} alt={iconLabel} className="icon h-5 md:h-[22px]" />
    </button>
  );
}
