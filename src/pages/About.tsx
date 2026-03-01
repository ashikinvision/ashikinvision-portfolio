import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cosmologyImg from '../assets/images/cosmology.png';
import './About.css';

const About = () => {


    return (
        <div className="page about-page">
            <Helmet>
                <title>About Me | Ashik T M - Product & Systems Designer</title>
                <meta name="description" content="5+ years transitioning from Retail Operations to Product Design. Systems thinker building efficient, scalable digital products." />
            </Helmet>
            <Header />
            <main className="about-main">
                {/* HERO SECTION */}
                <section className="about-hero">
                    <div className="about-container hero-layout">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="about-badge">The Story</span>
                            <h1 className="about-title">
                                Not just a <span className="hero-word-block">designer.</span>
                                <br />
                                A <span className="hero-word-highlight">systems thinker.</span>
                            </h1>
                            <p className="about-lead">
                                I transitioned from 5+ years in Retail Operations to Product Design.
                                Why? Because I realized the biggest frustrations in business aren't "ugly screens"—they are broken workflows.
                            </p>
                            <p className="about-desc">
                                I don't just "make it pop." I audit the logic, simplify the steps, and ensure the interface matches the mental model of the user.
                            </p>
                        </motion.div>

                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="about-image-wrapper">
                                <img src={cosmologyImg} alt="System Thinking Illustration" className="about-profile-img illustration-mode" width={500} height={500} />
                                <motion.div
                                    className="deco deco-lines"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                        <path d="M50 0L50 100M0 50L100 50" stroke="var(--charcoal)" strokeWidth="2" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="about-container content-layout">
                    {/* Card 1: Experience */}
                    <div className="about-card">
                        <section className="about-section">
                            <div className="section-header-block">
                                <span className="section-label">01. The Path</span>
                                <h2 className="section-title">Experience & <span className="highlight-text">Growth.</span></h2>
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="year">2023 - Present</div>
                                    <div className="role">Product & Systems Designer</div>
                                    <div className="company">Freelance / Contract</div>
                                    <p>Designing complex SaaS tools, logistics apps, and dashboards for business clients.</p>
                                </div>
                                <div className="timeline-item">
                                    <div className="year">2018 - 2023</div>
                                    <div className="role">Retail Operations Manager</div>
                                    <div className="company">Various Retail Chains (UAE)</div>
                                    <p>Managed inventory systems, staff workflows, and customer experience. Learned exactly where software fails real workers.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Card 2: Skills */}
                    <div className="about-card">
                        <section className="about-section">
                            <div className="section-header-block">
                                <span className="section-label">02. The Toolkit</span>
                                <h2 className="section-title">Design & <span className="highlight-text">Code.</span></h2>
                            </div>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h3>Design</h3>
                                    <div className="skill-cloud">
                                        {['Figma (Variables)', 'Design Systems', 'Prototyping'].map(skill => (
                                            <motion.span
                                                key={skill}
                                                className="skill-pill"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h3>Engineering</h3>
                                    <div className="skill-cloud">
                                        {['HTML / CSS / JS', 'React (Basic)', 'Webflow / Framer'].map(skill => (
                                            <motion.span
                                                key={skill}
                                                className="skill-pill"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="about-cta-section">
                    <motion.div
                        className="cta-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to build systems that work?</h2>
                        <Link
                            to="/contact"
                            className="btn-primary"
                        >
                            Let's Talk <span className="btn-icon">→</span>
                        </Link>
                    </motion.div>
                </section>
            </main >
            <Footer />
        </div >
    );
};

export default About;
