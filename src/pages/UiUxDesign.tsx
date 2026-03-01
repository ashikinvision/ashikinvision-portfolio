import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { uiUxProjects } from '../data/uiUxProjects';
import type { UiUxCategory } from '../data/uiUxProjects';
import './UiUxDesign.css';

const CATEGORIES: { id: UiUxCategory | 'All'; label: string }[] = [
    { id: 'All', label: 'All Projects' },
    { id: 'Websites', label: 'Websites' },
    { id: 'Mobile Apps', label: 'Mobile Apps' },
    { id: 'Dashboards', label: 'Dashboards & Analytics' },
    { id: 'Design Systems', label: 'Design Systems' },
    { id: 'SaaS Platforms', label: 'SaaS Platforms' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Landing Pages', label: 'Landing Pages' },
    { id: 'Prototyping', label: 'Prototyping' },
];

const UiUxDesign = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState<UiUxCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        let projects = uiUxProjects;

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
        let projectsToCheck = uiUxProjects;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            projectsToCheck = uiUxProjects.filter(p =>
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

    const handleCategoryChange = (id: UiUxCategory | 'All') => {
        if (activeCategory === id) {
            setActiveCategory('All');
        } else {
            setActiveCategory(id);
        }
    };

    return (
        <div className="page ui-ux-design-page">
            <Helmet>
                <title>UI/UX Design | Ashik - Product Designer</title>
                <meta name="description" content="Playful and vibrant UI/UX design portfolio featuring websites, mobile apps, dashboards, and design systems." />
            </Helmet>
            <Header />

            <main>
                {/* 🎨 HERO SECTION */}
                <section className="uiux-hero">
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
                                <span>Experience Crafter</span>
                            </motion.div>

                            <h1 className="hero-headline">
                                <span className="line">Designing <span className="highlight">Digital</span></span>
                                <span className="line"><span className="highlight-alt">Experiences.</span></span>
                            </h1>

                            <p className="hero-subtext">
                                From user research to polished interfaces.
                                Creating <strong>intuitive</strong> and <strong>delightful</strong> products.
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
                                    Explore Projects
                                    <span className="btn-icon">↓</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: Visual */}
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="illustration-wrapper">
                                <img
                                    src="/images/uiux-hero-illustration.png"
                                    alt="UI/UX Design Illustration"
                                    className="hero-illustration"
                                />
                                <motion.span
                                    className="deco deco-palette"
                                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    🎨
                                </motion.span>
                                <motion.span
                                    className="deco deco-vector"
                                    animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    📱
                                </motion.span>
                                <motion.span
                                    className="deco deco-shape"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    ✨
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="scroll-hint"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span>Scroll to Explore</span>
                        <span className="scroll-arrow">↓</span>
                    </motion.div>
                </section>

                {/* 🎴 GALLERY SECTION */}
                <section className="uiux-gallery-section" id="projects">
                    {/* Decorative blobs */}
                    <div className="section-decorations">
                        <div className="section-blob blob-1" />
                        <div className="section-blob blob-2" />
                    </div>

                    <div className="container gallery-layout">
                        {/* 📚 Sidebar */}
                        <aside className="category-sidebar">
                            <div className="category-header">
                                <h3>Categories</h3>
                            </div>
                            <ul>
                                {CATEGORIES.map(cat => (
                                    <li key={cat.id}>
                                        <button
                                            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                            onClick={() => handleCategoryChange(cat.id)}
                                        >
                                            <span className="cat-label">{cat.label}</span>
                                            <span className="cat-count">{categoryCounts[cat.id] || 0}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* 📦 Content Wrapper */}
                        <div className="projects-content-wrapper">
                            {/* Header Controls (Search) */}
                            <div className="uiux-header-controls">
                                <div className="uiux-search-bar">
                                    <span className="search-icon">🔍</span>
                                    <input
                                        type="text"
                                        placeholder="Search projects..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* 🎴 Projects Grid */}
                            <div className="projects-content-box">
                                {isLoading ? (
                                    <div className="uiux-grid">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="skeleton-card" />
                                        ))}
                                    </div>
                                ) : filteredProjects.length === 0 ? (
                                    <div className="empty-state">
                                        <motion.div
                                            className="empty-icon"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            🔍
                                        </motion.div>
                                        <h3>No projects found</h3>
                                        <p>Try a different search or category.</p>
                                    </div>
                                ) : (
                                    <motion.div className="uiux-grid" layout>
                                        <AnimatePresence mode="popLayout">
                                            {filteredProjects.map((project, index) => (
                                                <motion.div
                                                    key={project.id}
                                                    className="uiux-project-card"
                                                    layout
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    whileHover={{ y: -8 }}
                                                    onClick={() => {
                                                        navigate(`/case-study/${project.id}`);
                                                    }}
                                                >
                                                    <div className="card-image">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            loading="lazy"
                                                        />
                                                        <div className="card-overlay">
                                                            <span>View Project</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-info">
                                                        <span className="card-category">{project.category}</span>
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default UiUxDesign;
