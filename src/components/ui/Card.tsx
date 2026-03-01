import { type ReactNode, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import './Card.css';

/**
 * Card Component - Playful container with neo-brutalism styling
 * 
 * Used for content grouping with hard shadows and optional hover effects.
 */

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode;
    variant?: 'default' | 'elevated' | 'outline' | 'accent';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
    as?: 'div' | 'article' | 'section';
}

const Card = ({
    children,
    variant = 'default',
    padding = 'md',
    hover = false,
    as: Component = 'div',
    className = '',
    ...props
}: CardProps) => {
    const classes = [
        'card',
        `card--${variant}`,
        `card--padding-${padding}`,
        hover ? 'card--hover' : '',
        className
    ].filter(Boolean).join(' ');

    // Use motion.div regardless of 'as' prop for animation
    // The 'as' prop is for semantic HTML reference only
    return (
        <motion.div
            className={classes}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            role={Component === 'article' ? 'article' : Component === 'section' ? 'region' : undefined}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Sub-components for structured cards
const CardHeader = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`card__header ${className}`} {...props}>
        {children}
    </div>
);

const CardBody = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`card__body ${className}`} {...props}>
        {children}
    </div>
);

const CardFooter = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`card__footer ${className}`} {...props}>
        {children}
    </div>
);

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
