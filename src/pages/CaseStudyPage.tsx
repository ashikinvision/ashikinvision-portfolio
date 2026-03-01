import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCaseStudyBySlug, type CaseStudy } from '../data/uiUxCaseStudies';
import './CaseStudyPage.css';

const CaseStudyPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeProcessStep, setActiveProcessStep] = useState(0);

    useEffect(() => {
        if (slug) {
            const study = getCaseStudyBySlug(slug);
            if (study) {
                setCaseStudy(study);
                window.scrollTo(0, 0);
            } else {
                navigate('/ui-ux-design', { replace: true });
            }
        }
    }, [slug, navigate]);

    if (!caseStudy) {
        return (
            <div className="case-study-loading">
                <div className="loader-spinner" />
            </div>
        );
    }

    return (
        <div className="case-study-page">
            <Helmet>
                <title>{caseStudy.title} | Case Study | Ashik's Portfolio</title>
                <meta name="description" content={caseStudy.overview} />
            </Helmet>

            <Header />

            <main>
                {/* Hero Section */}
                {/* Hero Section */}
                <section
                    className="case-study-hero"
                    style={{ '--accent-color': caseStudy.color } as React.CSSProperties}
                >
                    <div className="hero-background">
                        <div className="hero-gradient" />
                        {/* Decorative Blobs */}
                        <motion.div
                            className="hero-blob blob-1"
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="hero-blob blob-2"
                            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="container">
                        <div className="hero-grid">
                            <motion.div
                                className="hero-content"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link to="/ui-ux-design" className="back-link-pill">
                                    <span className="arrow">←</span>
                                    <span>All Projects</span>
                                </Link>

                                <div className="hero-badge-group">
                                    <span className="category-pill" style={{ borderColor: caseStudy.color, color: caseStudy.color }}>
                                        {caseStudy.category}
                                    </span>
                                    <span className="duration-pill">
                                        ⏱ {caseStudy.duration}
                                    </span>
                                </div>

                                <h1 className="hero-title">
                                    {caseStudy.title}
                                    <motion.span
                                        className="title-deco"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring' }}
                                        style={{ color: caseStudy.color }}
                                    >.</motion.span>
                                </h1>
                                <p className="hero-subtitle">{caseStudy.subtitle}</p>

                                <p className="hero-overview">
                                    {caseStudy.overview}
                                </p>

                                <div className="hero-stats">
                                    <div className="stat-item">
                                        <label>My Role</label>
                                        <span>{caseStudy.role}</span>
                                    </div>
                                    <div className="stat-item">
                                        <label>Tools</label>
                                        <span>{caseStudy.tools.join(', ')}</span>
                                    </div>
                                </div>

                                {caseStudy.behanceLink && (
                                    <motion.a
                                        href={caseStudy.behanceLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hero-cta"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ background: caseStudy.color }}
                                    >
                                        View on Behance
                                        <span className="icon">↗</span>
                                    </motion.a>
                                )}
                            </motion.div>

                            <motion.div
                                className="hero-visual"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            >
                                <div className="visual-card">
                                    <img src={caseStudy.heroImage} alt={caseStudy.title} />
                                    {/* Floaties */}
                                    <motion.div
                                        className="floater floater-1"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        ✨
                                    </motion.div>
                                    <motion.div
                                        className="floater floater-2"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        🎨
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Problem & Solution Section */}
                <section className="problem-solution-section">
                    <div className="container">
                        <div className="ps-grid">
                            <motion.div
                                className="ps-card problem-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="ps-icon">🔍</div>
                                <h2>The Problem</h2>
                                <p>{caseStudy.problem}</p>
                            </motion.div>

                            <motion.div
                                className="ps-card solution-card"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="ps-icon">💡</div>
                                <h2>The Solution</h2>
                                <p>{caseStudy.solution}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Design System Section */}
                {caseStudy.designSystem && (
                    <section className="design-system-section">
                        <div className="container">
                            <motion.div
                                className="section-header"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="section-label">Visual Language</span>
                                <h2>Design System</h2>
                            </motion.div>

                            <div className="design-tokens-grid">
                                {/* Colors */}
                                <motion.div
                                    className="token-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h3>🎨 Color Palette</h3>
                                    <div className="color-tokens">
                                        {caseStudy.designSystem.colors.map((token, index) => (
                                            <div key={index} className="color-token">
                                                <div
                                                    className="color-swatch"
                                                    style={{ background: token.value }}
                                                />
                                                <div className="token-info">
                                                    <span className="token-name">{token.name}</span>
                                                    <code className="token-value">{token.value}</code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Typography */}
                                <motion.div
                                    className="token-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h3>✏️ Typography</h3>
                                    <div className="font-tokens">
                                        {caseStudy.designSystem.typography.map((token, index) => (
                                            <div key={index} className="font-token">
                                                <span
                                                    className="font-preview"
                                                    style={{ fontFamily: token.value }}
                                                >
                                                    Aa
                                                </span>
                                                <div className="token-info">
                                                    <span className="token-name">{token.name}</span>
                                                    <code className="token-value">{token.value}</code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Interactive Demo Section */}
                {caseStudy.demoUrl && (
                    <section className="demo-section" style={{ background: '#0a0a0a', padding: '4rem 0' }}>
                        <div className="container">
                            <motion.div
                                className="section-header"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ marginBottom: '2rem' }}
                            >
                                <span className="section-label" style={{ color: caseStudy.color }}>Live Preview</span>
                                <h2 style={{ color: 'white' }}>Experience It Live</h2>
                                <p style={{ color: '#888', maxWidth: '600px' }}>
                                    Interact with the actual project below.
                                    <a href={caseStudy.demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: caseStudy.color, marginLeft: '0.5rem', textDecoration: 'underline' }}>
                                        Open in new tab ↗
                                    </a>
                                </p>
                            </motion.div>

                            <motion.div
                                className="demo-wrapper"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    width: '100%',
                                    height: '80vh',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: `1px solid ${caseStudy.color}30`,
                                    boxShadow: `0 0 40px ${caseStudy.color}10`,
                                    background: '#000'
                                }}
                            >
                                <iframe
                                    src={caseStudy.demoUrl}
                                    title={`${caseStudy.title} Interactive Demo`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        background: '#000'
                                    }}
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Design Process</span>
                            <h2>How I Built It</h2>
                        </motion.div>

                        <div className="process-content">
                            <div className="process-nav">
                                {caseStudy.process.map((step, index) => (
                                    <button
                                        key={index}
                                        className={`process-nav-item ${activeProcessStep === index ? 'active' : ''}`}
                                        onClick={() => setActiveProcessStep(index)}
                                    >
                                        <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="step-title">{step.title}</span>
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProcessStep}
                                    className="process-detail"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="process-image">
                                        {caseStudy.process[activeProcessStep].image && (
                                            <img
                                                src={caseStudy.process[activeProcessStep].image}
                                                alt={caseStudy.process[activeProcessStep].title}
                                                onClick={() => setSelectedImage(caseStudy.process[activeProcessStep].image || null)}
                                            />
                                        )}
                                    </div>
                                    <div className="process-info">
                                        <h3>{caseStudy.process[activeProcessStep].title}</h3>
                                        <p>{caseStudy.process[activeProcessStep].description}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="gallery-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Final Designs</span>
                            <h2>Project Gallery</h2>
                        </motion.div>

                        <div className="gallery-grid">
                            {caseStudy.galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="gallery-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img src={image} alt={`${caseStudy.title} - ${index + 1}`} loading="lazy" />
                                    <div className="gallery-overlay">
                                        <span>View Full</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outcome Section */}
                <section
                    className="outcome-section"
                    style={{ '--accent-color': caseStudy.color } as React.CSSProperties}
                >
                    <div className="container">
                        <motion.div
                            className="outcome-content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Results</span>
                            <h2>The Outcome</h2>
                            <p>{caseStudy.outcome}</p>

                            {caseStudy.behanceLink && (
                                <a
                                    href={caseStudy.behanceLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-button"
                                >
                                    View Full Case Study on Behance
                                </a>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* Navigation to other projects */}
                <section className="next-project-section">
                    <div className="container">
                        <Link to="/ui-ux-design" className="next-project-link">
                            <span>Explore More Projects</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="lightbox-close" aria-label="Close">×</button>
                        <motion.img
                            src={selectedImage}
                            alt="Full view"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default CaseStudyPage;
