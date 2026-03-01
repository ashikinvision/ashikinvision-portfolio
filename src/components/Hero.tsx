import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { RESUME_URL } from '../constants';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax for blobs
    const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const illustrationY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Text reveal animation
    const textReveal: Variants = {
        hidden: { y: 60, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    return (
        <section className="hero" ref={containerRef}>
            {/* 🎨 Colorful Background Blobs - More Decorations */}
            <div className="blob-container">
                <motion.div
                    className="blob blob-lime blob-1"
                    style={{ y: blob1Y }}
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="blob blob-pink blob-2"
                    style={{ y: blob2Y }}
                    animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Main Content Grid */}
            <div className="container hero-grid">

                {/* LEFT: Typography */}
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                >

                    {/* Main Headline */}
                    <h1 className="hero-headline">
                        <motion.span className="line" custom={1} variants={textReveal}>
                            I design the
                        </motion.span>
                        <motion.span className="line highlight" custom={2} variants={textReveal}>
                            systems behind
                        </motion.span>
                        <motion.span className="line" custom={3} variants={textReveal}>
                            the screen.
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        className="hero-subheadline"
                        custom={4}
                        variants={textReveal}
                    >
                        Product & Systems Designer with 5+ years in operations.
                        I build dashboards, SaaS tools, and workflows that teams actually use.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-cta"
                        custom={5}
                        variants={textReveal}
                    >
                        <motion.button
                            className="btn-primary"
                            onClick={() => navigate('/work')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <span className="arrow">→</span>
                        </motion.button>

                        <motion.a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* RIGHT: Illustration with Decorations */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="illustration-wrapper"
                        style={{ y: illustrationY }}
                    >
                        <img
                            src="/images/designer-illustration.png"
                            alt="Designer at work"
                            className="hero-illustration"
                            width={600}
                            height={500}
                        />

                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
                <span>Scroll to explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
