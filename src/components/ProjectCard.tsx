import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
    project: Project;
    index: number;
    layout?: 'grid' | 'list';
}

const ProjectCard = memo(({ project, index, layout = 'grid' }: ProjectCardProps) => {
    const isEven = index % 2 === 0;
    const cardClass = layout === 'list'
        ? 'project-card list-mode'
        : `project-card ${isEven ? 'left' : 'right'}`;

    return (
        <motion.article
            className={cardClass}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="project-image-wrapper">
                <motion.img
                    src={project.heroImage}
                    alt={project.title}
                    className="project-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                />
            </div>

            <div className="project-content">
                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link to={project.link} className="project-link">
                    View Case Study
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 8H13M13 8L8 3M13 8L8 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </motion.article>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
