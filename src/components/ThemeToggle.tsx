import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle-container">
            <motion.button
                className="pull-rope"
                onClick={toggleTheme}
                whileHover={{ y: 5 }}
                whileTap={{ y: 20 }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                <div className="rope-string" />
                <motion.div
                    className="rope-handle"
                    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bulb-icon">
                        {theme === 'light' ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </div>
                </motion.div>
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
