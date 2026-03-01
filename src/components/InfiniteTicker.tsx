import './InfiniteTicker.css';

const tags = [
    '#ui design',
    '#ux design',
    '#product design',
    '#branding',
    '#art direction',
    '#motion design',
    '#typography',
];

const InfiniteTicker = () => {
    // Duplicate tags enough times to ensure seamless scrolling
    const duplicatedTags = [...tags, ...tags, ...tags, ...tags];

    return (
        <section className="ticker-section">
            <div className="ticker-container">
                <div className="ticker-track">
                    {duplicatedTags.map((tag, index) => (
                        <div key={`${tag}-${index}`} className="ticker-item">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfiniteTicker;
