/**
 * UI/UX Case Studies Data
 * 
 * Full case study projects with detailed information
 * for dedicated case study pages
 */

export type CaseStudyCategory =
    | 'Mobile Apps'
    | 'Websites'
    | 'Dashboards'
    | 'Design Systems'
    | 'UX Improvement'
    | 'Landing Pages';

export interface CaseStudyProcess {
    title: string;
    description: string;
    image?: string;
}

export interface DesignToken {
    name: string;
    value: string;
    type: 'color' | 'font' | 'spacing';
}

export interface DesignSystem {
    colors: DesignToken[];
    typography: DesignToken[];
}

export interface CaseStudy {
    // Identification
    id: string;
    slug: string;

    // Basic Info
    title: string;
    subtitle: string;
    category: CaseStudyCategory;

    // Visual Assets
    heroImage: string;
    thumbnail: string;
    color: string; // Accent color for the project

    // Overview
    overview: string;
    duration: string;
    role: string;
    tools: string[];

    // Case Study Content
    problem: string;
    solution: string;

    // Process Steps (for detailed view)
    process: CaseStudyProcess[];

    // Gallery Images
    galleryImages: string[];

    // Design System
    designSystem?: DesignSystem;

    // Outcome
    outcome: string;

    // External Links
    behanceLink?: string;
    figmaLink?: string;

    // Interactive Demo
    demoUrl?: string;

    liveLink?: string;

    // Meta
    featured: boolean;
    order: number;
}

// Base path for UI/UX project images
const BASE_PATH = '/ui-ux-projects';

export const caseStudies: CaseStudy[] = [
    {
        id: 'aura-landing',
        slug: 'aura-landing',
        title: 'Aura',
        subtitle: 'Premium Audio Landing Page',
        category: 'Landing Pages',

        heroImage: `${BASE_PATH}/Aura/hero-main.png`,
        thumbnail: `${BASE_PATH}/Aura/hero-main.png`,
        color: '#3b82f6', // Cobalt Blue

        overview: 'A responsive, high-performance landing page for a fictional high-end audio brand. Built to demonstrate modern frontend techniques, strict design system adherence, and component-driven architecture.',
        duration: '3 Days',
        role: 'Frontend Developer & UI Designer',
        tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],

        problem: 'The objective was to create a visually immersive product page that conveys a "premium" feel while maintaining optimal performance. A key challenge was implementing complex gradient effects and scroll-based animations (like the floating headphone) without triggering layout shifts or compromising the 100 Lighthouse performance score.',

        solution: 'I built a React Single Page Application (SPA) using Vite for sub-second build times. The design system relies on a custom "Void" color palette defined in Tailwind. I utilized Framer Motion for hardware-accelerated animations, ensuring smooth 60fps scrolling even with heavy visual effects like the radial "rim light" gradients.',

        process: [
            {
                title: 'Architecture & Setup',
                description: 'Initialized the project with Vite and React. I configured a custom Tailwind theme to manage colors (Void Black, Electric Cobalt) and typography (Manrope, Inter) centrally, ensuring consistency across all components.',
                image: `${BASE_PATH}/Aura/hero-main.png`
            },
            {
                title: 'Component Development',
                description: 'Built atomic components (Navbar, Hero, Grid). specific focus was placed on the "Glassmorphism" navbar using backdrop-blur and specific RGBA transparency values to ensure legibility over dynamic backgrounds.',
                image: `${BASE_PATH}/Aura/features-grid.png`
            },
            {
                title: 'Motion & Optimization',
                description: ' implemented a scroll progress bar using Framer Motion’s `useScroll` hook linked to a spring physics animation. Image assets were optimized and lazy-loaded to ensure the "Largest Contentful Paint" remained under 1.5s.',
                image: `${BASE_PATH}/Aura/hero-main.png`
            }
        ],

        galleryImages: [
            `${BASE_PATH}/Aura/hero-main.png`,
            `${BASE_PATH}/Aura/features-grid.png`,
            `${BASE_PATH}/Aura/tech-specs.png`,
        ],

        designSystem: {
            colors: [
                { name: 'Void Black', value: '#0a0a0a', type: 'color' },
                { name: 'Electric Cobalt', value: '#3b82f6', type: 'color' },
                { name: 'Text Main', value: '#f5f5f5', type: 'color' },
                { name: 'Card Dark', value: '#1a1a1a', type: 'color' },
            ],
            typography: [
                { name: 'Headings', value: 'Manrope', type: 'font' },
                { name: 'Body', value: 'Inter', type: 'font' },
            ]
        },

        outcome: 'A production-ready landing page that successfully pairs high-end aesthetics with raw performance. The project demonstrates proficiency in modern React hooks, component lifecycle, and responsive CSS layouts.',

        demoUrl: '/demos/aura/index.html',
        liveLink: 'https://aura.ashikinvision.com', // Placeholder

        featured: true,
        order: 0
    },
    {
        id: 'farm-face',
        slug: 'farm-face',
        title: 'Farm Face',
        subtitle: 'Online Grocery App',
        category: 'Mobile Apps',

        heroImage: `${BASE_PATH}/FARM FACE/Behance/Hero.png`,
        thumbnail: `${BASE_PATH}/FARM FACE/Behance/Hero.png`,
        color: '#4CAF50', // Green for grocery/organic theme

        overview: 'A user-friendly grocery ordering app designed for all ages, bridging the gap between traditional supermarkets and online convenience.',
        duration: '2 Months',
        role: 'Research, Wireframes, UX/UI Design, Prototyping',
        tools: ['Figma'],

        problem: 'Shoppers experience time-consuming trips, unpredictable stock availability, long checkout lines, and difficulty finding deals. This leads to frustration and inefficient shopping for essential goods.',

        solution: 'A user-friendly grocery ordering app designed for all ages with delivery or in-store pickup options, multiple saved lists (e.g., "Monthly Staples"), brand preferences, and expense tracking.',

        process: [
            {
                title: 'Research & Discovery',
                description: 'Conducted user interviews and competitive analysis to understand shopping pain points and behaviors.',
                image: `${BASE_PATH}/FARM FACE/Behance/Research & Discovery.png`
            },
            {
                title: 'User Persona',
                description: 'Created detailed user personas representing different shopper types and their unique needs.',
                image: `${BASE_PATH}/FARM FACE/Behance/User Persona.png`
            },
            {
                title: 'User Flow',
                description: 'Mapped out the complete user journey from browsing products to checkout and delivery.',
                image: `${BASE_PATH}/FARM FACE/Behance/User Flow.png`
            },
            {
                title: 'Wireframes',
                description: 'Created low-fidelity wireframes to establish layout and interaction patterns.',
                image: `${BASE_PATH}/FARM FACE/Behance/Wireframes.png`
            },
            {
                title: 'UI Design Guidelines',
                description: 'Established a comprehensive design system with colors, typography, and components.',
                image: `${BASE_PATH}/FARM FACE/Behance/UI Design Guidelines.png`
            },
            {
                title: 'High-Fidelity Designs',
                description: 'Developed polished, pixel-perfect screens ready for development.',
                image: `${BASE_PATH}/FARM FACE/Behance/High-FIdelity Designs.png`
            }
        ],

        galleryImages: [
            `${BASE_PATH}/FARM FACE/Behance/Hero.png`,
            `${BASE_PATH}/FARM FACE/Behance/High-FIdelity Designs.png`,
            `${BASE_PATH}/FARM FACE/Behance/Product Ordering.png`,
            `${BASE_PATH}/FARM FACE/Behance/UI Design Guidelines.png`,
        ],

        outcome: 'A streamlined digital-physical shopping experience that bridges the gap between traditional supermarkets and online convenience, making grocery shopping efficient and enjoyable for all users.',

        behanceLink: 'https://www.behance.net/gallery/233061325/FARM-FACE-Online-Grocery-App',

        featured: true,
        order: 1
    },
    {
        id: 'pulse',
        slug: 'pulse',
        title: 'Pulse',
        subtitle: 'Emergency Blood Donation App',
        category: 'Mobile Apps',

        heroImage: `${BASE_PATH}/Pulse/Behance/Cover.png`,
        thumbnail: `${BASE_PATH}/Pulse/Behance/Cover.png`,
        color: '#E53935', // Red for blood donation theme

        overview: 'A redesigned system connecting users to verified donors and blood banks in under 60 seconds, providing fast and trusted blood help during emergencies.',
        duration: '1 Month',
        role: 'UX Researcher / UI Designer',
        tools: ['Figma', 'Notion'],

        problem: 'Existing platforms in India often rely on outdated donor databases and slow contact methods, causing critical delays and lack of trust in emergency situations.',

        solution: 'A redesigned system connecting users to verified donors and blood banks in under 60 seconds, featuring instant SOS trigger, dual-path bank/donor requests, verified donor badging, and secure messaging.',

        process: [
            {
                title: 'Project Overview',
                description: 'Understanding the blood donation ecosystem and defining project scope.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/Project Overview.png`
            },
            {
                title: 'Design Thinking',
                description: 'Applied design thinking methodology to approach the problem systematically.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/Design Thinking.png`
            },
            {
                title: 'Research & Discovery',
                description: 'Conducted research to understand user pain points in emergency blood requests.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/Research & Discovery.png`
            },
            {
                title: 'Information Architecture',
                description: 'Structured the app flow for intuitive navigation during stressful emergencies.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/Information Architecture.png`
            },
            {
                title: 'Low-Fidelity Wireframes',
                description: 'Created wireframes focusing on speed and clarity of emergency workflows.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/low fi.png`
            },
            {
                title: 'UI Design',
                description: 'Developed a calm yet urgent visual language with clear CTAs.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/UI Design.png`
            },
            {
                title: 'Final UI',
                description: 'Polished screens with complete user flows for all scenarios.',
                image: `${BASE_PATH}/Pulse/Behance/2x png/Final UI.png`
            }
        ],

        galleryImages: [
            `${BASE_PATH}/Pulse/Behance/Cover.png`,
            `${BASE_PATH}/Pulse/Behance/2x png/Final UI.png`,
            `${BASE_PATH}/Pulse/Behance/2x png/Final UI-1.png`,
            `${BASE_PATH}/Pulse/Behance/2x png/UI Design.png`,
        ],

        outcome: 'Significant reduction in matching time (aiming for <60 seconds) and increased reliability through verification systems, potentially saving lives in critical emergencies.',

        behanceLink: 'https://www.behance.net/gallery/238048895/Pulse-Emergency-Blood-Donation-App-%28UXUI-Case-Study%29',

        featured: true,
        order: 2
    },
    {
        id: 'instagram-saved-redesign',
        slug: 'instagram-saved-redesign',
        title: 'Instagram Saved Feature',
        subtitle: 'UX Redesign for Better Findability',
        category: 'UX Improvement',

        heroImage: `${BASE_PATH}/instagram-saved-redesign/Frame 33833.jpg`,
        thumbnail: `${BASE_PATH}/instagram-saved-redesign/Frame 33833.jpg`,
        color: '#E1306C', // Instagram pink

        overview: 'A focused feature redesign improving how Instagram users organize and retrieve their saved content.',
        duration: '2 Weeks',
        role: 'UX/UI Designer (Feature Focus)',
        tools: ['Figma'],

        problem: 'Users save vast amounts of content but struggle to retrieve it later due to lack of organization tools, as collections are only sorted by "recent" with no search capability.',

        solution: 'Introduced a focused search bar for instant retrieval and an alphabetical sorting option to improve organizational efficiency within the saved section.',

        process: [
            {
                title: 'Problem Analysis',
                description: 'Analyzed the current saved section UX and identified key friction points.',
                image: `${BASE_PATH}/instagram-saved-redesign/Frame 33833.jpg`
            },
            {
                title: 'Solution Design',
                description: 'Designed search and sorting features that integrate seamlessly with Instagram\'s existing design language.',
                image: `${BASE_PATH}/instagram-saved-redesign/Frame 33834.jpg`
            },
            {
                title: 'Final Design',
                description: 'Polished mockups showing the improved saved section experience.',
                image: `${BASE_PATH}/instagram-saved-redesign/Frame 33835.jpg`
            }
        ],

        galleryImages: [
            `${BASE_PATH}/instagram-saved-redesign/Frame 33833.jpg`,
            `${BASE_PATH}/instagram-saved-redesign/Frame 33834.jpg`,
            `${BASE_PATH}/instagram-saved-redesign/Frame 33835.jpg`,
        ],

        outcome: 'Improved content recall and user satisfaction for power users of the "Saved" feature, reducing time spent searching for previously saved posts.',

        behanceLink: 'https://www.behance.net/gallery/238263927/Instagram-Saved-Section-Feature-Redesign',

        featured: false,
        order: 3
    }
];

// Helper functions
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
    return caseStudies.find(cs => cs.id === id);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
    return caseStudies
        .filter(cs => cs.featured)
        .sort((a, b) => a.order - b.order);
};

export const getCaseStudiesByCategory = (category: CaseStudyCategory): CaseStudy[] => {
    return caseStudies.filter(cs => cs.category === category);
};
