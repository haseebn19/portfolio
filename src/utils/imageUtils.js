// Image optimization utilities
export const getOptimizedImageProps = (src, alt, lazy = true) => ({
    src,
    alt,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async'
});

// Preload critical images
export const preloadImage = (src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
};

// Responsive image sizes utility
export const getResponsiveImageSizes = () => ({
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1200px) 50vw',
    desktop: '33vw'
});
