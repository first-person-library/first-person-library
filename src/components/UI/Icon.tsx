import type { ImgHTMLAttributes } from 'react';

type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export default function Icon({ src, alt, ...props }: IconProps) {
  return <img src={src} alt={alt} {...props} />;
}
