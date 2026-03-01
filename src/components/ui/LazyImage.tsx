import { useRef, useState, useEffect, type CSSProperties } from 'react';
import { getOptimizedImage } from '../../hooks/useOptimizedImage';
import './LazyImage.css';

/**
 * LazyImage Component
 * 
 * Optimized image component with:
 * - Intersection Observer lazy loading
 * - WebP thumbnail loading (400px)
 * - Blur-up placeholder effect
 * - Smooth fade-in transition
 */

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: CSSProperties;
    aspectRatio?: number;
    onClick?: () => void;
    loadMedium?: boolean; // Load medium (800px) instead of thumb (400px)
}

const LazyImage = ({
    src,
    alt,
    className = '',
    style,
    aspectRatio,
    onClick,
    loadMedium = false,
}: LazyImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>('');
    const [hasError, setHasError] = useState(false);

    // Get optimized image paths
    const optimized = getOptimizedImage(src);
    const placeholderSrc = optimized?.placeholder || '';
    const targetSrc = optimized
        ? (loadMedium ? optimized.medium : optimized.thumb)
        : src;

    // Intersection Observer for lazy loading
    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        // Check if IntersectionObserver is available
        if (!('IntersectionObserver' in window)) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(element);
                    }
                });
            },
            {
                rootMargin: '200px', // Start loading 200px before visible
                threshold: 0,
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Load image when in view
    useEffect(() => {
        if (!isInView) {
            // Set placeholder
            if (placeholderSrc) {
                setCurrentSrc(placeholderSrc);
            }
            return;
        }

        // Load the target image
        const img = new Image();
        img.src = targetSrc;

        img.onload = () => {
            setCurrentSrc(targetSrc);
            setIsLoaded(true);
        };

        img.onerror = () => {
            // Fallback to original
            setCurrentSrc(src);
            setIsLoaded(true);
            setHasError(true);
        };

    }, [isInView, targetSrc, placeholderSrc, src]);

    const containerStyle: CSSProperties = {
        ...style,
        ...(aspectRatio && { aspectRatio: String(aspectRatio) }),
    };

    const classes = [
        'lazy-image',
        isLoaded ? 'lazy-image--loaded' : '',
        hasError ? 'lazy-image--error' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={containerRef}
            className={classes}
            style={containerStyle}
            onClick={onClick}
        >
            {/* Skeleton/Placeholder */}
            {!isLoaded && (
                <div className="lazy-image__skeleton" aria-hidden="true">
                    {currentSrc && (
                        <img
                            src={currentSrc}
                            alt=""
                            className="lazy-image__placeholder"
                        />
                    )}
                </div>
            )}

            {/* Main Image */}
            {isInView && currentSrc && (
                <img
                    src={currentSrc}
                    alt={alt}
                    className="lazy-image__img"
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
};

export default LazyImage;
