import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import './NextProject.css';

interface NextProjectProps {
    currentId: string;
}

const NextProject = ({ currentId }: NextProjectProps) => {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    if (currentIndex === -1) return null;

    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];

    return (
        <section className="next-project-container">
            <Link to={nextProject.link} className="next-project-link">
                <div className="next-project-image-wrapper">
                    <img
                        src={nextProject.heroImage}
                        alt=""
                        className="next-project-image"
                        loading="lazy"
                    />
                    <div className="next-project-overlay"></div>
                </div>

                <div className="next-project-content">
                    <motion.div
                        initial={{ opacity: 0.8, y: 0 }}
                        whileHover={{ opacity: 1, y: -5 }}
                        className="content-inner"
                    >
                        <span className="next-label">Next Case Study</span>
                        <h2 className="next-title">{nextProject.title}</h2>
                        <span className="next-action">
                            View Project
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </motion.div>
                </div>
            </Link>
        </section>
    );
};

export default NextProject;
