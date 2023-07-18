import { useDarkModeContext } from '../../contexts/DarkModeContext';
import Icon from '../UI/Icon';

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <button type="button" onClick={toggleDarkMode}>
      {darkMode && (
        <Icon src="moon.png" alt="다크모드" className="icon w-[22px]" />
      )}
      {!darkMode && (
        <Icon src="sun.png" alt="라이트모드" className="icon w-[22px]" />
      )}
    </button>
  );
}
