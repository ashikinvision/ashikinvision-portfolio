import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import './Header.css';

// --- Magnetic Component ---
const Magnetic = ({ children, strength = 0.15 }: { children: React.ReactNode; strength?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        position.x.set(middleX * strength);
        position.y.set(middleY * strength);
    }

    const reset = () => {
        position.x.set(0);
        position.y.set(0);
    }

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(position.x, springConfig);
    const springY = useSpring(position.y, springConfig);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
};

// --- Smart Header Component ---
const Header = () => {
    const location = useLocation();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Smart Reveal
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            const previous = scrollY.getPrevious() || 0;
            if (latest > previous && latest > 150) {
                setHidden(true);
                setMobileMenuOpen(false);
            } else {
                setHidden(false);
            }
        });
    }, [scrollY]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { path: '/', label: 'Work' },
        { path: '/ui-ux', label: 'UI/UX' },
        { path: '/graphic-design', label: 'Graphic' },
        { path: '/about', label: 'About' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            clipPath: "circle(0% at calc(100% - 40px) 40px)",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        },
        open: {
            opacity: 1,
            clipPath: "circle(150% at calc(100% - 40px) 40px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 50 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 + i * 0.1, duration: 0.5 }
        })
    };

    return (
        <>
            <motion.header
                className="header"
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="header-container">
                    {/* Logo with playful sound */}
                    <Magnetic strength={0.2}>
                        <Link
                            to="/"
                            className="logo"
                        >
                            <span className="logo-icon">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" /></svg>
                            </span>
                            <span className="logo-text">ashikinvision</span>
                        </Link>
                    </Magnetic>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        {navLinks.map((link, _index) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Magnetic key={link.path} strength={0.1}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active"
                                                className="nav-active-bg"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </Magnetic>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="header-actions">
                        <Magnetic strength={0.15}>
                            <Link
                                to="/contact"
                                className="cta-button"
                            >
                                <span>Let's Talk</span>
                                <span className="cta-arrow">→</span>
                            </Link>
                        </Magnetic>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>

                {/* Floating decorations */}
                <motion.div
                    className="header-deco deco-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="header-deco deco-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="mobile-menu-content">
                            <nav className="mobile-nav">
                                {navLinks.map((link, index) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.path}
                                            custom={index}
                                            variants={linkVariants}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                <motion.div custom={navLinks.length} variants={linkVariants}>
                                    <Link to="/contact" className="mobile-cta">
                                        Let's Talk →
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* Mobile menu decorations */}
                            <div className="mobile-menu-blobs">
                                <div className="menu-blob blob-pink"></div>
                                <div className="menu-blob blob-sky"></div>
                                <div className="menu-blob blob-yellow"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
};

export default Header;
