import { useState, useEffect, useRef } from 'react';
import imageMap from '../data/imageMap.json';

/**
 * Type for image map entries
 */
interface ImageMapEntry {
    thumb: string;
    medium: string;
    placeholder: string;
    original: string;
}

/**
 * Get optimized image URLs for a given original path
 */
export const getOptimizedImage = (originalPath: string): ImageMapEntry | null => {
    const entry = (imageMap as Record<string, ImageMapEntry>)[originalPath];
    return entry || null;
};

/**
 * Hook for progressive image loading with blur-up effect
 */
export const useProgressiveImage = (src: string) => {
    const [currentSrc, setCurrentSrc] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [isBlurred, setIsBlurred] = useState(true);

    // Get optimized versions
    const optimized = getOptimizedImage(src);

    useEffect(() => {
        if (!optimized) {
            // No optimized version, load original
            setCurrentSrc(src);
            setIsBlurred(false);
            setIsLoading(false);
            return;
        }

        // Start with placeholder
        setCurrentSrc(optimized.placeholder);
        setIsBlurred(true);
        setIsLoading(true);

        // Load thumbnail
        const thumbImg = new Image();
        thumbImg.src = optimized.thumb;
        thumbImg.onload = () => {
            setCurrentSrc(optimized.thumb);
            setIsBlurred(false);
            setIsLoading(false);
        };
        thumbImg.onerror = () => {
            // Fallback to original
            setCurrentSrc(src);
            setIsBlurred(false);
            setIsLoading(false);
        };

    }, [src, optimized]);

    return {
        src: currentSrc,
        isLoading,
        isBlurred,
        thumbSrc: optimized?.thumb || src,
        mediumSrc: optimized?.medium || src,
        originalSrc: optimized?.original || src,
    };
};

/**
 * Hook for lazy loading images with Intersection Observer
 */
export const useLazyImage = (originalSrc: string, options: {
    rootMargin?: string;
    threshold?: number;
    loadMedium?: boolean;
} = {}) => {
    const {
        rootMargin = '100px',
        threshold = 0,
        loadMedium = false,
    } = options;

    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>('');
    const ref = useRef<HTMLDivElement>(null);

    const optimized = getOptimizedImage(originalSrc);

    // Intersection Observer
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(element);
                    }
                });
            },
            { rootMargin, threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    // Load image when in view
    useEffect(() => {
        if (!isInView) {
            // Show placeholder
            if (optimized) {
                setCurrentSrc(optimized.placeholder);
            }
            return;
        }

        const targetSrc = optimized
            ? (loadMedium ? optimized.medium : optimized.thumb)
            : originalSrc;

        const img = new Image();
        img.src = targetSrc;
        img.onload = () => {
            setCurrentSrc(targetSrc);
            setIsLoaded(true);
        };
        img.onerror = () => {
            setCurrentSrc(originalSrc);
            setIsLoaded(true);
        };

    }, [isInView, originalSrc, optimized, loadMedium]);

    return {
        ref,
        src: currentSrc,
        isInView,
        isLoaded,
        placeholderSrc: optimized?.placeholder || '',
        thumbSrc: optimized?.thumb || originalSrc,
        mediumSrc: optimized?.medium || originalSrc,
        originalSrc: optimized?.original || originalSrc,
    };
};

export default useProgressiveImage;
