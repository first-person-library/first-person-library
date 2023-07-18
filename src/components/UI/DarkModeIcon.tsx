import type { ImgHTMLAttributes } from 'react';

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
  return (
    <>
      <img
        src={`/icon/light/${src}`}
        alt={alt}
        {...props}
        className={['block dark:hidden', className].join(' ')}
      />
      <img
        src={`/icon/dark/${src}`}
        alt={alt}
        {...props}
        className={['hidden dark:block', className].join(' ')}
      />
    </>
  );
}
