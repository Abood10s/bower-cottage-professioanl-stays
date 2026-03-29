import React from 'react'

/**
 * Renders a <picture> element with AVIF, WebP, and JPEG srcset variants.
 *
 * @param {string} src - Base image path, e.g. "/assets/hero-landscape.jpg"
 * @param {number[]} widths - Available responsive widths, e.g. [480, 800, 1600]
 * @param {string} sizes - Responsive sizes attribute, e.g. "100vw"
 * @param {string} alt - Alt text
 * @param {string} className - CSS class for the img element
 * @param {string} loading - "lazy" or "eager"
 * @param {string} fetchPriority - "high", "low", or "auto"
 */
export default function OptimizedImage({
  src,
  widths = [480, 800],
  sizes = '100vw',
  alt = '',
  className,
  loading = 'lazy',
  fetchPriority,
  ...rest
}) {
  const baseName = src.replace(/\.[^.]+$/, '')
  const ext = src.match(/\.[^.]+$/)?.[0] || '.jpg'

  const buildSrcSet = (format) =>
    widths.map((w) => `${baseName}-${w}.${format} ${w}w`).join(', ')

  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet('webp')} sizes={sizes} />
      <source type={`image/${ext.slice(1)}`} srcSet={buildSrcSet(ext.slice(1))} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        {...rest}
      />
    </picture>
  )
}
