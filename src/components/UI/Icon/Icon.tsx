import type { ImgHTMLAttributes } from 'react';

type IconProps = ImgHTMLAttributes<HTMLImageElement>;

export default function Icon({ src, alt, ...props }: IconProps) {
  return <img src={`/icon/${src}`} alt={alt} title={alt} {...props} />;
}
