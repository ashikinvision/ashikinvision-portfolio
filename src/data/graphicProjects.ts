export type GraphicCategory =
    | 'Identity'
    | 'Marketing'
    | 'Social'
    | 'Packaging'
    | 'Editorial'
    | 'Corporate'
    | 'WebVisual'
    | 'Illustration'
    | 'Motion'
    | 'Environmental'
    | 'Merchandise';

export interface GraphicProjectAssets {
    psd?: string; // URL to PSD file
    ai?: string;  // URL to AI file
    eps?: string; // URL to EPS file
    font?: string; // URL to Font file
    image?: string; // URL to High-Res Image (often same as project image, but downloadable)
}

export interface GraphicProject {
    id: string;
    title: string;
    category: GraphicCategory;
    image: string; // Preview/Thumbnail URL
    description: string;
    date: string; // ISO Date YYYY-MM-DD for sorting
    assets: GraphicProjectAssets;
}

export const graphicProjects: GraphicProject[] = [
    {
        id: 'halal-logo',
        title: 'Indonesian Halal Logo',
        category: 'Identity',
        image: '/projects/Indonesian Halal logo/indonesian_halal_logo_2022.jpg',
        description: 'A modern reinterpretation of the Halal Indonesia certification mark, blending traditional calligraphy with contemporary geometric forms.',
        date: '2022-03-15',
        assets: {
            image: '/projects/Indonesian Halal logo/indonesian_halal_logo_2022.jpg',
            eps: '/projects/Indonesian Halal logo/indonesian_halal_logo_2022.eps'
        }
    },
    {
        id: 'king-carrot',
        title: 'King Carrot',
        category: 'Identity',
        image: '/projects/King Carrot/king_carrot.png',
        description: 'Brand identity design for King Carrot, featuring a playful and regal character illustration.',
        date: '2023-01-10',
        assets: {
            image: '/projects/King Carrot/king_carrot.png',
            ai: '/projects/King Carrot/king_carrot.ai'
        }
    },
    {
        id: 'nguyen',
        title: 'Nguyen',
        category: 'Identity',
        image: '/projects/Nguyen/Nguyen.jpeg',
        description: 'Visual identity and logo design for Nguyen.',
        date: '2023-04-22',
        assets: {
            image: '/projects/Nguyen/Nguyen-logo.png'
        }
    },
    {
        id: 'berlin-art-gallery',
        title: 'Berlin Art Gallery',
        category: 'Identity',
        image: '/projects/Berlin Art Gallery/10622864.jpg',
        description: 'Sophisticated brand identity for a contemporary art gallery in Berlin.',
        date: '2025-06-15',
        assets: {
            image: '/projects/Berlin Art Gallery/10622864.jpg',
            ai: '/projects/Berlin Art Gallery/10622861.ai',
            eps: '/projects/Berlin Art Gallery/10622863.eps'
        }
    },
    {
        id: 'bicycle-shop',
        title: 'Bicycle Shop',
        category: 'Identity',
        image: '/projects/Bicycle Shop/40626.jpg',
        description: 'Retro-inspired logo design for an urban bicycle shop and repair service.',
        date: '2025-07-20',
        assets: {
            image: '/projects/Bicycle Shop/40626.jpg',
            eps: '/projects/Bicycle Shop/40626.eps'
        }
    },
    {
        id: 'bird-wings',
        title: 'Bird Wings',
        category: 'Identity',
        image: '/projects/Bird Wings/946.jpg',
        description: 'Abstract bird wing iconography suitable for aviation or travel brands.',
        date: '2025-08-05',
        assets: {
            image: '/projects/Bird Wings/946.jpg',
            eps: '/projects/Bird Wings/946.eps'
        }
    },
    {
        id: 'bull-studio',
        title: 'Bull Studio',
        category: 'Identity',
        image: '/projects/Bull Studio/9065859.jpg',
        description: 'Strong and energetic mascot design for a creative studio or sports team.',
        date: '2025-09-12',
        assets: {
            image: '/projects/Bull Studio/9065859.jpg',
            ai: '/projects/Bull Studio/9065857.ai',
            eps: '/projects/Bull Studio/9065858.eps'
        }
    },
    {
        id: 'flamenco',
        title: 'Flamenco',
        category: 'Identity',
        image: '/projects/Flamenco/v1048-055.jpg',
        description: 'Ethereal and artistic visual identity inspired by dance and fluid motion.',
        date: '2025-10-01',
        assets: {
            image: '/projects/Flamenco/v1048-055.jpg',
            eps: '/projects/Flamenco/v1048-055.eps'
        }
    },
    {
        id: 'sushi-restaurant',
        title: 'Sushi Restaurant',
        category: 'Identity',
        image: '/projects/Sushi Restaurant/10791805.jpg',
        description: 'Minimalist and appetizing branding for a high-end sushi restaurant.',
        date: '2025-11-18',
        assets: {
            image: '/projects/Sushi Restaurant/10791805.jpg',
            ai: '/projects/Sushi Restaurant/10791793.ai',
            eps: '/projects/Sushi Restaurant/10791801.eps'
        }
    },
    {
        id: 'good-mask',
        title: 'Good Mask',
        category: 'Identity',
        image: '/projects/Good Mask/4438232.jpg',
        description: 'Modern and protective brand identity for a high-quality mask manufacturer.',
        date: '2025-12-05',
        assets: {
            image: '/projects/Good Mask/4438232.jpg',
            ai: '/projects/Good Mask/4447673.ai',
            eps: '/projects/Good Mask/4447670.eps'
        }
    },
    // Marketing & Advertising Projects
    {
        id: 'world-cancer-day',
        title: 'World Cancer Day',
        category: 'Marketing',
        image: '/projects/Marketing/World Cancer Day/Poster World Cancer Day Templates.png',
        description: 'Awareness campaign poster design for World Cancer Day, featuring compelling visuals to promote cancer prevention and support.',
        date: '2024-02-04',
        assets: {
            image: '/projects/Marketing/World Cancer Day/Poster World Cancer Day Templates.png',
            psd: '/projects/Marketing/World Cancer Day/Poster World Cancer Day Templates.psd'
        }
    },
    {
        id: 'world-day-of-peace',
        title: 'World Day of Peace',
        category: 'Marketing',
        image: '/projects/Marketing/World Day of Peace/World Day of Peace.png',
        description: 'Visual campaign design celebrating World Day of Peace with harmonious imagery and uplifting messaging.',
        date: '2024-01-01',
        assets: {
            image: '/projects/Marketing/World Day of Peace/World Day of Peace.png',
            psd: '/projects/Marketing/World Day of Peace/Poster World Day of Peace.psd'
        }
    },
    {
        id: 'world-ozone-day',
        title: 'World Ozone Day',
        category: 'Marketing',
        image: '/projects/Marketing/World Ozone Day/World Ozone Day.png',
        description: 'Environmental awareness poster for World Ozone Day, highlighting the importance of ozone layer protection.',
        date: '2024-09-16',
        assets: {
            image: '/projects/Marketing/World Ozone Day/World Ozone Day.png',
            psd: '/projects/Marketing/World Ozone Day/World Ozone Day.psd'
        }
    },
    {
        id: 'world-wildlife-day',
        title: 'World Wildlife Day',
        category: 'Marketing',
        image: '/projects/Marketing/World Wildlife Day/World Wildlife Day poster templates.png',
        description: 'Conservation-focused poster design for World Wildlife Day, showcasing the beauty and importance of wildlife preservation.',
        date: '2024-03-03',
        assets: {
            image: '/projects/Marketing/World Wildlife Day/World Wildlife Day poster templates.png',
            psd: '/projects/Marketing/World Wildlife Day/World Wildlife Day poster templates.psd'
        }
    },
    {
        id: 'adventure-hiking',
        title: 'Adventure Hiking',
        category: 'Marketing',
        image: '/projects/Marketing/Adventure Hiking/4822940.png',
        description: 'Outdoor adventure marketing campaign featuring bold typography and nature-inspired design elements.',
        date: '2024-06-15',
        assets: {
            image: '/projects/Marketing/Adventure Hiking/4822940.png',
            ai: '/projects/Marketing/Adventure Hiking/4822940.ai',
            font: '/projects/Marketing/Adventure Hiking/Fonts.txt'
        }
    },
    {
        id: 'design-studio',
        title: 'Design Studio',
        category: 'Marketing',
        image: '/projects/Marketing/Design Studio/5122811.png',
        description: 'Professional branding and marketing materials for a modern creative design studio.',
        date: '2024-07-22',
        assets: {
            image: '/projects/Marketing/Design Studio/5122811.png',
            ai: '/projects/Marketing/Design Studio/5122811.ai',
            font: '/projects/Marketing/Design Studio/Fonts.txt'
        }
    },
    {
        id: 'jobbiz',
        title: 'Jobbiz',
        category: 'Marketing',
        image: '/projects/Marketing/Jobbiz/5535171.png',
        description: 'Modern recruitment and job platform branding with clean, professional aesthetics.',
        date: '2024-08-10',
        assets: {
            image: '/projects/Marketing/Jobbiz/5535171.png',
            ai: '/projects/Marketing/Jobbiz/5535171.ai',
            font: '/projects/Marketing/Jobbiz/Fonts.txt'
        }
    },
    {
        id: 'north-peak-workshop',
        title: 'North Peak Business Workshop',
        category: 'Marketing',
        image: '/projects/Marketing/North Peak Buisiness Workshop/7167581.png',
        description: 'Corporate workshop promotional materials featuring mountain-inspired branding and professional design.',
        date: '2024-09-05',
        assets: {
            image: '/projects/Marketing/North Peak Buisiness Workshop/7167581.png',
            ai: '/projects/Marketing/North Peak Buisiness Workshop/7167581.ai',
            font: '/projects/Marketing/North Peak Buisiness Workshop/Fonts.txt'
        }
    },
    // Digital & Social Media Projects
    {
        id: 'furniture-sale-1',
        title: 'Furniture Sale - Design 1',
        category: 'Social',
        image: '/projects/Social/Furniture Sale/Artboard 1@4x.png',
        description: 'Modern furniture sale social media post with elegant typography and product showcase.',
        date: '2024-12-20',
        assets: {
            image: '/projects/Social/Furniture Sale/Artboard 1@4x.png',
            ai: '/projects/Social/Furniture Sale/5313894.ai',
            font: '/projects/Social/Furniture Sale/Fonts.txt'
        }
    },
    {
        id: 'furniture-sale-2',
        title: 'Furniture Sale - Design 2',
        category: 'Social',
        image: '/projects/Social/Furniture Sale/Artboard 2@4x.png',
        description: 'Eye-catching furniture promotion with vibrant colors and compelling call-to-action.',
        date: '2024-12-20',
        assets: {
            image: '/projects/Social/Furniture Sale/Artboard 2@4x.png',
            ai: '/projects/Social/Furniture Sale/5313894.ai',
            font: '/projects/Social/Furniture Sale/Fonts.txt'
        }
    },
    {
        id: 'furniture-sale-3',
        title: 'Furniture Sale - Design 3',
        category: 'Social',
        image: '/projects/Social/Furniture Sale/Artboard 3@4x.png',
        description: 'Minimalist furniture sale design with clean layout and product focus.',
        date: '2024-12-20',
        assets: {
            image: '/projects/Social/Furniture Sale/Artboard 3@4x.png',
            ai: '/projects/Social/Furniture Sale/5313894.ai',
            font: '/projects/Social/Furniture Sale/Fonts.txt'
        }
    },
    {
        id: 'furniture-sale-4',
        title: 'Furniture Sale - Design 4',
        category: 'Social',
        image: '/projects/Social/Furniture Sale/Artboard 4@4x.png',
        description: 'Bold and dynamic furniture promotion for social media marketing campaign.',
        date: '2024-12-20',
        assets: {
            image: '/projects/Social/Furniture Sale/Artboard 4@4x.png',
            ai: '/projects/Social/Furniture Sale/5313894.ai',
            font: '/projects/Social/Furniture Sale/Fonts.txt'
        }
    },
    {
        id: 'connect-sphere-1',
        title: 'Connect Sphere - Design 1',
        category: 'Social',
        image: '/projects/Social/Connect Sphere/Mesa de trabajo 1@4x.png',
        description: 'Social networking platform promotional design with modern gradient aesthetics and connectivity theme.',
        date: '2024-12-22',
        assets: {
            image: '/projects/Social/Connect Sphere/Mesa de trabajo 1@4x.png',
            ai: '/projects/Social/Connect Sphere/7286792.ai',
            font: '/projects/Social/Connect Sphere/Fonts.txt'
        }
    },
    {
        id: 'connect-sphere-2',
        title: 'Connect Sphere - Design 2',
        category: 'Social',
        image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia@4x.png',
        description: 'Connect Sphere social media campaign featuring vibrant colors and engaging call-to-action.',
        date: '2024-12-22',
        assets: {
            image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia@4x.png',
            ai: '/projects/Social/Connect Sphere/7286792.ai',
            font: '/projects/Social/Connect Sphere/Fonts.txt'
        }
    },
    {
        id: 'connect-sphere-3',
        title: 'Connect Sphere - Design 3',
        category: 'Social',
        image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 2@4x.png',
        description: 'Dynamic social platform promotion with bold typography and community-focused messaging.',
        date: '2024-12-22',
        assets: {
            image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 2@4x.png',
            ai: '/projects/Social/Connect Sphere/7286792.ai',
            font: '/projects/Social/Connect Sphere/Fonts.txt'
        }
    },
    {
        id: 'connect-sphere-4',
        title: 'Connect Sphere - Design 4',
        category: 'Social',
        image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 3@4x.png',
        description: 'Eye-catching Connect Sphere design emphasizing user engagement and network growth.',
        date: '2024-12-22',
        assets: {
            image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 3@4x.png',
            ai: '/projects/Social/Connect Sphere/7286792.ai',
            font: '/projects/Social/Connect Sphere/Fonts.txt'
        }
    },
    {
        id: 'connect-sphere-5',
        title: 'Connect Sphere - Design 5',
        category: 'Social',
        image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 4@4x.png',
        description: 'Modern social networking post with clean design and compelling visual hierarchy.',
        date: '2024-12-22',
        assets: {
            image: '/projects/Social/Connect Sphere/Mesa de trabajo 1 copia 4@4x.png',
            ai: '/projects/Social/Connect Sphere/7286792.ai',
            font: '/projects/Social/Connect Sphere/Fonts.txt'
        }
    },
    {
        id: 'creative-hire-1',
        title: 'Creative Hire - Design 1',
        category: 'Social',
        image: '/projects/Social/Creative Hire/Mesa de trabajo 1@4x.png',
        description: 'Professional recruitment campaign design targeting creative talent with modern aesthetics.',
        date: '2024-12-23',
        assets: {
            image: '/projects/Social/Creative Hire/Mesa de trabajo 1@4x.png',
            ai: '/projects/Social/Creative Hire/7568259.ai',
            font: '/projects/Social/Creative Hire/Fonts.txt'
        }
    },
    {
        id: 'creative-hire-2',
        title: 'Creative Hire - Design 2',
        category: 'Social',
        image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia@4x.png',
        description: 'Engaging job posting design for creative positions with compelling call-to-action.',
        date: '2024-12-23',
        assets: {
            image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia@4x.png',
            ai: '/projects/Social/Creative Hire/7568259.ai',
            font: '/projects/Social/Creative Hire/Fonts.txt'
        }
    },
    {
        id: 'creative-hire-3',
        title: 'Creative Hire - Design 3',
        category: 'Social',
        image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 2@4x.png',
        description: 'Dynamic hiring campaign visual emphasizing company culture and creative opportunities.',
        date: '2024-12-23',
        assets: {
            image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 2@4x.png',
            ai: '/projects/Social/Creative Hire/7568259.ai',
            font: '/projects/Social/Creative Hire/Fonts.txt'
        }
    },
    {
        id: 'creative-hire-4',
        title: 'Creative Hire - Design 4',
        category: 'Social',
        image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 3@4x.png',
        description: 'Bold recruitment post design attracting creative professionals with vibrant visuals.',
        date: '2024-12-23',
        assets: {
            image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 3@4x.png',
            ai: '/projects/Social/Creative Hire/7568259.ai',
            font: '/projects/Social/Creative Hire/Fonts.txt'
        }
    },
    {
        id: 'creative-hire-5',
        title: 'Creative Hire - Design 5',
        category: 'Social',
        image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 4@4x.png',
        description: 'Modern talent acquisition design showcasing career growth opportunities.',
        date: '2024-12-23',
        assets: {
            image: '/projects/Social/Creative Hire/Mesa de trabajo 1 copia 4@4x.png',
            ai: '/projects/Social/Creative Hire/7568259.ai',
            font: '/projects/Social/Creative Hire/Fonts.txt'
        }
    },
    {
        id: 'nova-sphere-1',
        title: 'Nova Sphere - Design 1',
        category: 'Social',
        image: '/projects/Social/Nova Sphere/Mesa de trabajo 1@4x.png',
        description: 'Futuristic branding concept for Nova Sphere exploring spherical geometry and light.',
        date: '2024-12-24',
        assets: {
            image: '/projects/Social/Nova Sphere/Mesa de trabajo 1@4x.png',
            ai: '/projects/Social/Nova Sphere/6366854.ai',
            font: '/projects/Social/Nova Sphere/Fonts.txt'
        }
    },
    {
        id: 'nova-sphere-2',
        title: 'Nova Sphere - Design 2',
        category: 'Social',
        image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia@4x.png',
        description: 'Innovative Nova Sphere campaign visual with dynamic composition and vibrant colors.',
        date: '2024-12-24',
        assets: {
            image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia@4x.png',
            ai: '/projects/Social/Nova Sphere/6366854.ai',
            font: '/projects/Social/Nova Sphere/Fonts.txt'
        }
    },
    {
        id: 'nova-sphere-3',
        title: 'Nova Sphere - Design 3',
        category: 'Social',
        image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 2@4x.png',
        description: 'Bold and modern social media graphic highlighting the core identity of Nova Sphere.',
        date: '2024-12-24',
        assets: {
            image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 2@4x.png',
            ai: '/projects/Social/Nova Sphere/6366854.ai',
            font: '/projects/Social/Nova Sphere/Fonts.txt'
        }
    },
    {
        id: 'nova-sphere-4',
        title: 'Nova Sphere - Design 4',
        category: 'Social',
        image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 3@4x.png',
        description: 'Sleek design emphasizing user engagement and the futuristic vision of Nova Sphere.',
        date: '2024-12-24',
        assets: {
            image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 3@4x.png',
            ai: '/projects/Social/Nova Sphere/6366854.ai',
            font: '/projects/Social/Nova Sphere/Fonts.txt'
        }
    },
    {
        id: 'nova-sphere-5',
        title: 'Nova Sphere - Design 5',
        category: 'Social',
        image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 4@4x.png',
        description: 'Minimalist and impactful promotional design tailored for maximum social media reach.',
        date: '2024-12-24',
        assets: {
            image: '/projects/Social/Nova Sphere/Mesa de trabajo 1 copia 4@4x.png',
            ai: '/projects/Social/Nova Sphere/6366854.ai',
            font: '/projects/Social/Nova Sphere/Fonts.txt'
        }
    },
    // Illustration & Vector Projects
    {
        id: 'hand-drawn-landscape',
        title: 'Hand Drawn Landscape Collection',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2@4x.png',
        description: 'A series of minimalist hand-drawn landscapes capturing natural serenity through simple line work.',
        date: '2024-11-05',
        assets: {
            image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2@4x.png',
            ai: '/projects/Illustration/Hand Drawn Landscape/5591239.ai'
        }
    },
    {
        id: 'hand-drawn-landscape-2',
        title: 'Mountain Retreat Line Art',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2_1@4x.png',
        description: 'Serene mountain landscape illustration with delicate hand-drawn details.',
        date: '2024-11-05',
        assets: {
            image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2_1@4x.png',
            ai: '/projects/Illustration/Hand Drawn Landscape/5591239.ai'
        }
    },
    {
        id: 'hand-drawn-landscape-3',
        title: 'Valley Horizons',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2_2@4x.png',
        description: 'Minimalist valley composition exploring depth through simple line weights.',
        date: '2024-11-05',
        assets: {
            image: '/projects/Illustration/Hand Drawn Landscape/Artboard 2_2@4x.png',
            ai: '/projects/Illustration/Hand Drawn Landscape/5591239.ai'
        }
    },
    {
        id: 'wall-art-abstract',
        title: 'Abstract Wall Art Series',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 1/6765752.png',
        description: 'Expressive abstract wall art composition suitable for modern interior decor.',
        date: '2024-10-15',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 1/6765752.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 1/6765752.ai'
        }
    },
    {
        id: 'wall-art-botanical',
        title: 'Botanical Illustration',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 2/6692158.png',
        description: 'Detailed botanical line art exploring organic forms and textures.',
        date: '2024-09-22',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 2/6692158.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 2/6692158.ai'
        }
    },
    {
        id: 'wall-art-geometric',
        title: 'Geometric Harmony',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 3/6615654.png',
        description: 'Precise geometric vector patterns creating visual balance and rhythm.',
        date: '2024-08-30',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 3/6615654.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 3/6615654.ai'
        }
    },
    {
        id: 'wall-art-minimal-1',
        title: 'Minimalist Line Art - Figure 1',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2@4x.png',
        description: 'Clean and continuous line art figure for contemporary aesthetics.',
        date: '2024-08-10',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2@4x.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 4/5807429.ai'
        }
    },
    {
        id: 'wall-art-minimal-2',
        title: 'Minimalist Line Art - Figure 2',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2_1@4x.png',
        description: 'Fluid line drawing emphasising movement and simplicity.',
        date: '2024-08-10',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2_1@4x.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 4/5807429.ai'
        }
    },
    {
        id: 'wall-art-minimal-3',
        title: 'Minimalist Line Art - Figure 3',
        category: 'Illustration',
        image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2_2@4x.png',
        description: 'Abstract continuous line composition with organic flow.',
        date: '2024-08-10',
        assets: {
            image: '/projects/Illustration/Hand Drawn Wall Art 4/Artboard 2_2@4x.png',
            ai: '/projects/Illustration/Hand Drawn Wall Art 4/5807429.ai'
        }
    }
];




