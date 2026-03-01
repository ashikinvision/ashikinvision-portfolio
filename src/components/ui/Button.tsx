import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button Component - Playful, bouncy buttons
 * 
 * Supports both button and link variants with consistent styling.
 * Features hard shadows and elastic hover animations.
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
    className?: string;
    // Button specific
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    // Link specific
    to?: string;
    // External link specific
    href?: string;
    target?: string;
    rel?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    fullWidth = false,
    className = '',
    onClick,
    disabled,
    type = 'button',
    to,
    href,
    target,
    rel,
}: ButtonProps) => {
    const classes = [
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth ? 'button--full' : '',
        className,
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className="button__icon button__icon--left">{icon}</span>
            )}
            <span className="button__text">{children}</span>
            {icon && iconPosition === 'right' && (
                <span className="button__icon button__icon--right">{icon}</span>
            )}
        </>
    );

    // Internal link (React Router)
    if (to) {
        return (
            <motion.span
                whileHover={{ y: -3 }}
                whileTap={{ y: 2 }}
                style={{ display: 'inline-block' }}
            >
                <Link to={to} className={classes}>
                    {content}
                </Link>
            </motion.span>
        );
    }

    // External link
    if (href) {
        return (
            <motion.span
                whileHover={{ y: -3 }}
                whileTap={{ y: 2 }}
                style={{ display: 'inline-block' }}
            >
                <a
                    href={href}
                    className={classes}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : rel}
                >
                    {content}
                </a>
            </motion.span>
        );
    }

    // Regular button
    return (
        <motion.button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            type={type}
            whileHover={disabled ? undefined : { y: -3 }}
            whileTap={disabled ? undefined : { y: 2 }}
        >
            {content}
        </motion.button>
    );
};

export default Button;
