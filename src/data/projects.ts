
import { graphicProjects } from './graphicProjects';
import { caseStudies } from './uiUxCaseStudies';

export interface Project {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    tags: string[];
    link: string;
    category: 'product' | 'graphic';
    date?: string;

    // Extended properties for Case Study page
    subtitle?: string;
    overview?: string;
    problem?: string;
    solution?: string;
    outcome?: string;
    features?: string[];
}

export const projects: Project[] = [
    // Map Case Studies (Product/UIUX)
    ...caseStudies.map(p => ({
        id: p.id,
        title: p.title,
        description: p.overview || p.subtitle,
        heroImage: p.heroImage,
        tags: [p.category, 'UI/UX'],
        link: `/case-study/${p.id}`,
        category: 'product' as const,
        date: '2025-01-01',

        subtitle: p.subtitle,
        overview: p.overview,
        problem: p.problem,
        solution: p.solution,
        outcome: p.outcome,
        features: p.process?.map(s => s.title) || undefined
    })),
    // Map Graphic Projects
    ...graphicProjects.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        heroImage: p.image,
        tags: [p.category, 'Graphic Design'],
        link: `/work/${p.id}`,
        category: 'graphic' as const,
        date: p.date,

        subtitle: p.category,
        overview: p.description,
        problem: undefined,
        solution: undefined,
        outcome: undefined,
        features: undefined
    }))
];
