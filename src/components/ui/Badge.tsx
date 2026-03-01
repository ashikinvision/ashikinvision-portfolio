import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Badge.css';

/**
 * Badge Component - Playful label/tag for sections
 * 
 * Used for section labels like "THE STORY", "FEATURED", etc.
 * Matches the neo-brutalism design system.
 */

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'outline' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    rotate?: boolean;
    icon?: ReactNode;
    className?: string;
}

const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    rotate = true,
    icon,
    className = '',
}: BadgeProps) => {
    const classes = [
        'badge',
        `badge--${variant}`,
        `badge--${size}`,
        rotate ? 'badge--rotated' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <motion.span
            className={classes}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {icon && <span className="badge__icon">{icon}</span>}
            {children}
        </motion.span>
    );
};

export default Badge;
