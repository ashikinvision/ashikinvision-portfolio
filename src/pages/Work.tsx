import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Work.css';

interface WorkProps {
    initialFilter?: 'all' | 'product' | 'graphic';
}

const Work = ({ initialFilter = 'all' }: WorkProps) => {
    const [filter, setFilter] = useState<'all' | 'product' | 'graphic'>(initialFilter);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'az'>('date-desc');

    // Memoize filtered and sorted projects for performance
    const filteredProjects = useMemo(() => {
        return projects
            .filter(project => {
                const matchesCategory = filter === 'all' || project.category === filter;
                const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => {
                if (sortBy === 'az') {
                    return a.title.localeCompare(b.title);
                }
                // Note: Projects don't have a date field yet
                // This logic assumes array order is newest first
                // When date field is added, replace with: new Date(b.date).getTime() - new Date(a.date).getTime()
                if (sortBy === 'date-asc') {
                    // Return reverse order for ascending
                    return projects.indexOf(b) - projects.indexOf(a);
                }
                // date-desc: maintain original order (assumed newest first)
                return projects.indexOf(a) - projects.indexOf(b);
            });
    }, [filter, searchQuery, sortBy]);

    return (
        <div className="page work-page">
            <Helmet>
                <title>Work | Ashik - Product & Systems Designer</title>
                <meta name="description" content="A curated selection of case studies in Product Design, Systems Thinking, and Graphic Design." />
            </Helmet>
            <Header />
            <main id="main">
                <section className="work-header">
                    <div className="container">
                        <h1>Selected <span className="highlight-text">Work.</span></h1>
                        <p>A collection of projects bridging logic, systems, and aesthetics.</p>
                    </div>
                </section>

                <section id="work" className="work-section">
                    <div className="work-controls-stack">
                        {/* 1. Large Search Bar */}
                        <div className="search-container-large">
                            <div className="search-input-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon-large">
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

                        {/* 2. Sort Options */}
                        <div className="sort-container">
                            <span className="sort-label">Sort by:</span>
                            <div className="sort-options">
                                <button
                                    className={`sort-btn ${sortBy === 'date-desc' ? 'active' : ''}`}
                                    onClick={() => setSortBy('date-desc')}
                                >
                                    Newest
                                </button>
                                <button
                                    className={`sort-btn ${sortBy === 'date-asc' ? 'active' : ''}`}
                                    onClick={() => setSortBy('date-asc')}
                                >
                                    Oldest
                                </button>
                                <button
                                    className={`sort-btn ${sortBy === 'az' ? 'active' : ''}`}
                                    onClick={() => setSortBy('az')}
                                >
                                    A-Z
                                </button>
                            </div>
                        </div>

                        {/* 3. Category Filters */}
                        <div className="filter-container-pills">
                            <button
                                className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-pill ${filter === 'product' ? 'active' : ''}`}
                                onClick={() => setFilter('product')}
                            >
                                UI/UX Design
                            </button>
                            <button
                                className={`filter-pill ${filter === 'graphic' ? 'active' : ''}`}
                                onClick={() => setFilter('graphic')}
                            >
                                Graphic Design
                            </button>
                        </div>

                        {/* 4. Project Count */}
                        <div className="projects-count">
                            Showing <span>{filteredProjects.length}</span> of <span>{projects.length}</span> projects
                        </div>
                    </div>

                    <div className="work-container">
                        <LayoutGroup>
                            <AnimatePresence mode='popLayout'>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="project-wrapper"
                                        >
                                            <ProjectCard
                                                project={project}
                                                index={index}
                                                layout="grid"
                                            />
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        className="empty-work-state"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {searchQuery ? (
                                            <>
                                                <h3>No matches found</h3>
                                                <p>Try adjusting your search terms or filters.</p>
                                            </>
                                        ) : (
                                            <>
                                                <h3>Work in Progress</h3>
                                                <p>I'm currently curating my latest projects. <br />Check back shortly for updates.</p>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </LayoutGroup>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Work;
