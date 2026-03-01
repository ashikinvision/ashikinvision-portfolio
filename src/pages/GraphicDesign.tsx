import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LazyImage from '../components/ui/LazyImage';
import { graphicProjects, type GraphicCategory, type GraphicProject } from '../data/graphicProjects';
import './GraphicDesign.css';

const CATEGORIES: { id: GraphicCategory | 'All'; label: string }[] = [
    { id: 'All', label: 'All Projects' },
    { id: 'Identity', label: 'Brand Identity' },
    { id: 'Marketing', label: 'Marketing' },
    { id: 'Social', label: 'Social Media' },
    { id: 'Packaging', label: 'Packaging' },
    { id: 'Editorial', label: 'Editorial' },
    { id: 'Illustration', label: 'Illustration' },
];

const GraphicDesign = () => {
    const [activeCategory, setActiveCategory] = useState<GraphicCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState<GraphicProject | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        let projects = graphicProjects;

        if (activeCategory !== 'All') {
            projects = projects.filter(p => p.category === activeCategory);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            projects = projects.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        return projects;
    }, [activeCategory, searchQuery]);

    // Optimized category counts
    const categoryCounts = useMemo(() => {
        let projectsToCheck = graphicProjects;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            projectsToCheck = graphicProjects.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        const counts: Record<string, number> = { All: projectsToCheck.length };
        CATEGORIES.forEach(cat => {
            if (cat.id !== 'All') {
                counts[cat.id] = projectsToCheck.filter(p => p.category === cat.id).length;
            }
        });
        return counts;
    }, [searchQuery]);

    const handleCategoryChange = (id: GraphicCategory | 'All') => {
        if (activeCategory === id) {
            setActiveCategory('All');
        } else {
            setActiveCategory(id);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        setSelectedProject(filteredProjects[nextIndex]);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setSelectedProject(filteredProjects[prevIndex]);
    };

    return (
        <div className="page graphic-design-page">
            <Helmet>
                <title>Graphic Design | Ashik - Visual Designer</title>
                <meta name="description" content="Playful and vibrant graphic design portfolio featuring branding, marketing, and illustrations." />
            </Helmet>
            <Header />

            <main>
                {/* 🎨 HERO SECTION - Playful Style */}
                <section className="graphic-hero">
                    <div className="container hero-layout">
                        {/* LEFT: Text Content */}
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                className="hero-badge"
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            >
                                <span>Visual Craftsman</span>
                            </motion.div>

                            <h1 className="hero-headline">
                                <span className="line">Bringing <span className="highlight">Ideas</span></span>
                                <span className="line">to <span className="highlight-alt">Life.</span></span>
                            </h1>

                            <p className="hero-subtext">
                                Bridging strategy and aesthetics across every touchpoint.
                                From <strong>Identity</strong> to <strong>Illustration</strong>.
                            </p>

                            <motion.div
                                className="hero-cta-group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a
                                    href="#projects"
                                    className="btn-primary"
                                >
                                    View My Work
                                    <span className="btn-icon">↓</span>
                                </a>
                                <a
                                    href="/about"
                                    className="btn-secondary"
                                >
                                    About Me
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: Illustration with Decorations */}
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="illustration-wrapper">
                                <motion.img
                                    src="/images/graphic-hero-illustration.png"
                                    alt="Graphic Design Tools Illustrations"
                                    className="hero-illustration"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* Floating decorations */}
                                <motion.div
                                    className="deco deco-palette"
                                    animate={{ rotate: [0, 10, 0], y: [0, 5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    🎨
                                </motion.div>
                                <motion.div
                                    className="deco deco-vector"
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    ✒️
                                </motion.div>
                                <motion.div
                                    className="deco deco-shape"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    ●
                                </motion.div>
                            </div>
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

                {/* 🎴 GALLERY SECTION */}
                <section className="graphic-gallery-section" id="projects">
                    {/* Background Decorations - STATIC for performance */}
                    <div className="section-decorations">
                        <div className="section-blob blob-1" />
                        <div className="section-blob blob-2" />
                    </div>

                    <div className="container gallery-layout">
                        {/* Sidebar */}
                        <aside className="category-sidebar">
                            <div className="category-header">
                                <h3>Categories</h3>
                            </div>
                            <nav>
                                <ul>
                                    {CATEGORIES.map((cat) => (
                                        <li key={cat.id}>
                                            <button
                                                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                                onClick={() => handleCategoryChange(cat.id)}
                                                aria-pressed={activeCategory === cat.id}
                                            >
                                                <span className="cat-label">{cat.label}</span>
                                                <span className="cat-count">{categoryCounts[cat.id]}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        {/* Content Area */}
                        <div className="projects-content-wrapper">
                            {/* Header Controls */}
                            <div className="graphic-header-controls">
                                <div className="graphic-search-bar">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search projects..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* White Content Box */}
                            <div className="projects-content-box">
                                <motion.div
                                    layout
                                    className="graphic-grid-container"
                                >
                                    <AnimatePresence mode="wait">
                                        {isLoading ? (
                                            <motion.div
                                                key="skeleton"
                                                className="graphic-grid"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                                    <div key={n} className="graphic-project-card skeleton-card">
                                                        <div className="card-image skeleton-pulse" />
                                                        <div className="card-info">
                                                            <div className="skeleton-text skeleton-pulse" style={{ width: '70%' }} />
                                                            <div className="skeleton-text skeleton-pulse" style={{ width: '40%' }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        ) : filteredProjects.length > 0 ? (
                                            <div className="graphic-grid">
                                                {filteredProjects.map((project) => (
                                                    <div
                                                        key={project.id}
                                                        className="graphic-project-card"
                                                        onClick={() => { setSelectedProject(project); }}
                                                    >
                                                        <div className="card-image">
                                                            <LazyImage src={project.image} alt={project.title} />
                                                            <div className="card-overlay">
                                                                <span>View</span>
                                                            </div>
                                                        </div>
                                                        <div className="card-info">
                                                            <h3>{project.title}</h3>
                                                            <span className="card-category">{project.category}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <motion.div
                                                className="empty-state"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                            >
                                                <div className="empty-icon">
                                                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </div>
                                                <h3>No projects found</h3>
                                                <p>Try adjusting your search or category.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <button className="lightbox-close" onClick={() => { setSelectedProject(null); }} aria-label="Close modal">×</button>

                        {/* Navigation */}
                        <button className="lightbox-nav prev" onClick={handlePrev} aria-label="Previous project">‹</button>
                        <button className="lightbox-nav next" onClick={handleNext} aria-label="Next project">›</button>

                        <motion.div
                            className="lightbox-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                        >
                            <div className="lightbox-image-container">
                                <img src={selectedProject.assets?.image || selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="lightbox-details">
                                <div className="lightbox-header">
                                    <h2>{selectedProject.title}</h2>
                                    <span className="lightbox-cat-badge">{selectedProject.category}</span>
                                </div>
                                <p>{selectedProject.description}</p>
                                <div className="lightbox-meta">
                                    <span>Date: {new Date(selectedProject.date).toLocaleDateString()}</span>
                                </div>
                                {selectedProject.assets?.image && (
                                    <a href={selectedProject.assets.image} download className="download-btn">
                                        Download Asset
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div >
    );
};

export default GraphicDesign;
