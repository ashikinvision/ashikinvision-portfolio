import { useCallback, useRef } from 'react';

/**
 * Sound Hook - Creates subtle audio feedback for interactions
 * 
 * PERFORMANCE OPTIMIZATION:
 * - AudioContext is created lazily (on first user interaction)
 * - Single AudioContext instance is reused across all sounds
 * - Proper cleanup with oscillator scheduling
 */

// Lazy AudioContext singleton (created on first use)
let audioContextInstance: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
    // Only create in browser environment
    if (typeof window === 'undefined') return null;

    if (!audioContextInstance) {
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
                audioContextInstance = new AudioContextClass();
            }
        } catch (error) {
            console.warn('AudioContext not supported:', error);
            return null;
        }
    }
    return audioContextInstance;
};

export const useSound = () => {
    // Track if sounds are enabled (can be used for user preference)
    const isEnabled = useRef(true);

    const playHover = useCallback(() => {
        if (!isEnabled.current) return;

        const audioContext = getAudioContext();
        if (!audioContext) return;

        // Resume context if suspended (required after user interaction)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Playful "tick" sound for hover
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);

            gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
        } catch (error) {
            // Silently fail - audio is not critical
        }
    }, []);

    const playClick = useCallback(() => {
        if (!isEnabled.current) return;

        const audioContext = getAudioContext();
        if (!audioContext) return;

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Satisfying "pop" sound for click
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.12);

            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.12);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.12);
        } catch (error) {
            // Silently fail - audio is not critical
        }
    }, []);

    const playSuccess = useCallback(() => {
        if (!isEnabled.current) return;

        const audioContext = getAudioContext();
        if (!audioContext) return;

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        try {
            // Two-tone success chime
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator1.type = 'sine';
            oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator2.type = 'sine';
            oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5

            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);

            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.15);
            oscillator2.start(audioContext.currentTime + 0.1);
            oscillator2.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            // Silently fail
        }
    }, []);

    const setEnabled = useCallback((enabled: boolean) => {
        isEnabled.current = enabled;
    }, []);

    return { playHover, playClick, playSuccess, setEnabled };
};

export default useSound;
