import { useState, useRef, useEffect, type ImgHTMLAttributes } from 'react';
import './OptimizedImage.css';

/**
 * Optimized Image Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Blur placeholder during load
 * - Error handling with fallback
 * - Aspect ratio preservation to prevent layout shift
 */

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
    src: string;
    alt: string;
    aspectRatio?: number; // width / height, e.g., 16/9 = 1.777
    placeholder?: string;
    fallback?: string;
    eager?: boolean; // Disable lazy loading for above-the-fold images
    onLoadComplete?: () => void;
}

const OptimizedImage = ({
    src,
    alt,
    aspectRatio,
    placeholder,
    fallback = '/images/placeholder.png',
    eager = false,
    onLoadComplete,
    className = '',
    style,
    ...props
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(eager);
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (eager) return;

        const container = containerRef.current;
        if (!container) return;

        if (!('IntersectionObserver' in window)) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(container);
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0,
            }
        );

        observer.observe(container);

        return () => observer.disconnect();
    }, [eager]);

    const handleLoad = () => {
        setIsLoaded(true);
        setHasError(false);
        onLoadComplete?.();
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    const containerStyle: React.CSSProperties = {
        ...style,
        ...(aspectRatio && {
            aspectRatio: String(aspectRatio),
        }),
    };

    const classes = [
        'optimized-image',
        isLoaded ? 'optimized-image--loaded' : '',
        hasError ? 'optimized-image--error' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={containerRef}
            className={classes}
            style={containerStyle}
        >
            {/* Placeholder / Blur */}
            {placeholder && !isLoaded && (
                <img
                    src={placeholder}
                    alt=""
                    className="optimized-image__placeholder"
                    aria-hidden="true"
                />
            )}

            {/* Skeleton loader */}
            {!isLoaded && !placeholder && (
                <div className="optimized-image__skeleton" aria-hidden="true" />
            )}

            {/* Actual Image */}
            {isInView && (
                <img
                    ref={imgRef}
                    src={hasError ? fallback : src}
                    alt={alt}
                    className="optimized-image__img"
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={eager ? 'eager' : 'lazy'}
                    decoding="async"
                    {...props}
                />
            )}
        </div>
    );
};

export default OptimizedImage;
