import { Link } from 'react-router-dom';
import { images } from '@/lib/images';

const sizes = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-14',
};

/**
 * Fast Build logo — use everywhere for consistent branding.
 * @param {'sm' | 'md' | 'lg'} size
 * @param {boolean} linkToHome
 * @param {string} className
 * @param {boolean} onDark - light padding on dark backgrounds (e.g. footer)
 */
export default function Logo({
  size = 'md',
  linkToHome = true,
  className = '',
  onDark = false,
}) {
  const img = (
    <img
      src={images.logo}
      alt="Fast Build Inc."
      className={`${sizes[size]} w-auto object-contain ${onDark ? 'rounded-sm bg-white p-2' : ''} ${className}`}
      width={280}
      height={80}
      decoding="async"
    />
  );

  if (!linkToHome) {
    return img;
  }

  return (
    <Link to="/" className="inline-flex flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
      {img}
    </Link>
  );
}
