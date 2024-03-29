import { ImgHTMLAttributes } from 'react';
import { useDarkModeContext } from '../../../contexts/DarkModeContext';

type DarkModeIconProps = ImgHTMLAttributes<HTMLImageElement>;

export default function DarkModeIcon({
  src,
  alt,
  className,
  ...props
}: DarkModeIconProps) {
  const { darkMode } = useDarkModeContext();

  const iconSrc = darkMode ? `/icon/dark/${src}` : `/icon/light/${src}`;
  const iconClass = darkMode
    ? ['hidden dark:block', className].join(' ')
    : ['block dark:hidden', className].join(' ');

  return (
    <img src={iconSrc} alt={alt} title={alt} {...props} className={iconClass} />
  );
}
