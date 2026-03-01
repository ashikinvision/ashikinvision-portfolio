import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Section.css';

/**
 * Section Component - Consistent page section wrapper
 * 
 * Provides consistent spacing, backgrounds, and entrance animations.
 */

type SectionBackground = 'default' | 'hero' | 'alt' | 'dark' | 'accent';
type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
    children: ReactNode;
    background?: SectionBackground;
    spacing?: SectionSpacing;
    container?: boolean;
    animate?: boolean;
    id?: string;
    className?: string;
}

const Section = ({
    children,
    background = 'default',
    spacing = 'lg',
    container = true,
    animate = true,
    id,
    className = '',
}: SectionProps) => {
    const classes = [
        'section',
        `section--bg-${background}`,
        `section--spacing-${spacing}`,
        className,
    ].filter(Boolean).join(' ');

    const content = container ? (
        <div className="section__container">
            {children}
        </div>
    ) : children;

    if (animate) {
        return (
            <motion.section
                id={id}
                className={classes}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                {content}
            </motion.section>
        );
    }

    return (
        <section id={id} className={classes}>
            {content}
        </section>
    );
};

// Sub-component for section headers
interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    align?: 'left' | 'center' | 'right';
}

const SectionHeader = ({ badge, title, subtitle, align = 'left' }: SectionHeaderProps) => (
    <div className={`section__header section__header--${align}`}>
        {badge && (
            <span className="section__badge">{badge}</span>
        )}
        <h2 className="section__title">{title}</h2>
        {subtitle && (
            <p className="section__subtitle">{subtitle}</p>
        )}
    </div>
);

Section.Header = SectionHeader;

export default Section;
