export type UiUxCategory =
    | 'Websites'
    | 'Mobile Apps'
    | 'Dashboards'
    | 'Design Systems'
    | 'SaaS Platforms'
    | 'E-commerce'
    | 'Landing Pages'
    | 'Prototyping';

export interface UiUxProject {
    id: string;
    title: string;
    category: UiUxCategory;
    image: string;
    fullImage?: string;
    description: string;
}

export const uiUxProjects: UiUxProject[] = [
    {
        id: 'aura-landing',
        title: 'Aura',
        category: 'Landing Pages',
        image: '/ui-ux-projects/Aura/hero-main.png',
        fullImage: '/ui-ux-projects/Aura/hero-main.png',
        description: 'High-performance audio e-commerce landing page with scrollytelling visuals.'
    }
];
