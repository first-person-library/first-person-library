import { ImgHTMLAttributes } from 'react';
import { useDarkModeContext } from '../../../contexts/DarkModeContext';

type DarkModeIconProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  className?: string;
};

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

  return <img src={iconSrc} alt={alt} {...props} className={iconClass} />;
}
