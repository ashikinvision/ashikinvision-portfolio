import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { getFeaturedCaseStudies } from '../data/uiUxCaseStudies';
import './Home.css';

const Home = () => {
    const featuredProjects = getFeaturedCaseStudies();

    return (
        <div className="page home-page">
            <Helmet>
                <title>Ashik | Product & Systems Designer</title>
                <meta name="description" content="Product Designer specializing in complex systems, operations logic, and intuitive UX. Bridging business goals with user needs." />
            </Helmet>
            <Header />
            <main id="main">
                <Hero />

                {/* Selected Work Section */}
                <section id="work" className="work-section">
                    <div className="container">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="work-header"
                        >
                            <span className="work-label" aria-hidden="true">Featured Projects</span>
                            <h2 className="work-title">
                                Selected <span className="highlight">Work</span>
                            </h2>
                            <p className="work-subtitle">
                                A collection of complex systems and user-centric products I've designed.
                            </p>
                        </motion.div>

                        {/* Featured Projects Grid */}
                        <div className="projects-grid">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={{
                                        id: project.id,
                                        title: project.title,
                                        description: project.overview || project.subtitle,
                                        heroImage: project.heroImage,
                                        tags: [project.category, ...project.tools.slice(0, 2)],
                                        link: `/case-study/${project.slug}`,
                                        category: 'product',
                                    }}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* View All Button */}
                        <motion.div
                            className="view-all-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                to="/work"
                                className="view-all-btn"
                            >
                                <span>View All Projects</span>
                                <span className="arrow" aria-hidden="true">→</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
