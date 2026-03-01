import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import './CaseStudy.css';

const CaseStudy = () => {
    const { slug } = useParams<{ slug: string }>();
    // Find project by ID. Handles both legacy /case-studies/:slug and new /work/:slug
    const study = projects.find(p => p.id === slug);

    if (!study) {
        return (
            <div className="page case-study-page">
                <Header />
                <main className="case-study-not-found">
                    <Helmet>
                        <title>Project Not Found | Ashik</title>
                        <meta name="robots" content="noindex" />
                    </Helmet>
                    <div style={{ padding: '140px 24px', textAlign: 'center' }}>
                        <h1>Project Not Found</h1>
                        <p style={{ marginBottom: '24px' }}>The case study you're looking for doesn't exist or has been moved.</p>
                        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>Back to Home</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="page case-study-page">
            <Helmet>
                <title>{study.title} - Case Study | Ashik</title>
                <meta name="description" content={study.description} />
            </Helmet>

            <Header />
            <main id="main" className="case-study-content">
                <motion.section
                    className="case-study-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/work" className="back-link">← Back to Work</Link>
                    <div className="case-study-meta">
                        <span className="case-study-label">Case Study</span>
                        {study.tags && study.tags.map(tag => (
                            <span key={tag} className="meta-tag">• {tag}</span>
                        ))}
                    </div>
                    <h1 className="case-study-title">{study.title}</h1>
                    <p className="case-study-subtitle">{study.subtitle}</p>
                    <p className="case-study-description">{study.description}</p>
                </motion.section>

                <motion.div
                    className="case-study-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img
                        src={study.heroImage}
                        alt={`${study.title} Preview`}
                        className="case-study-image"
                        width="1200"
                        height="675"
                        loading="eager" // Hero image should load fast
                    />
                </motion.div>

                <div className="case-study-sections">
                    <article className="case-study-body">
                        <section className="case-study-section">
                            <h2>Overview</h2>
                            <p>{study.overview}</p>
                        </section>

                        <div className="grid-2-col">
                            {study.problem && (
                                <section className="case-study-section">
                                    <h2>The Problem</h2>
                                    <p>{study.problem}</p>
                                </section>
                            )}

                            {study.solution && (
                                <section className="case-study-section">
                                    <h2>The Solution</h2>
                                    <p>{study.solution}</p>
                                </section>
                            )}
                        </div>

                        {study.features && (
                            <section className="case-study-section">
                                <h2>Key Features</h2>
                                <ul className="features-list">
                                    {study.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {study.outcome && (
                            <section className="case-study-section outcome-section">
                                <h2>Outcome</h2>
                                <p className="outcome-text">{study.outcome}</p>
                            </section>
                        )}
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CaseStudy;
