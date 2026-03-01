import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CONTACT_EMAIL, WHATSAPP_URL, LINKEDIN_URL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../constants';
import profileImage from '../assets/images/ashik-profile.jpg';
import './Contact.css';

interface ContactMethod {
    id: string;
    icon: string;
    title: string;
    value: string;
    displayValue: string;
    action: 'mailto' | 'link' | 'copy' | 'tel';
    primary?: boolean;
}

const contactMethods: ContactMethod[] = [
    {
        id: 'email',
        icon: '📧',
        title: 'Email',
        value: `mailto:${CONTACT_EMAIL}`,
        displayValue: CONTACT_EMAIL,
        action: 'mailto',
        primary: true
    },
    {
        id: 'whatsapp',
        icon: '💬',
        title: 'WhatsApp',
        value: WHATSAPP_URL,
        displayValue: 'Chat on WhatsApp',
        action: 'link'
    },
    {
        id: 'linkedin',
        icon: '💼',
        title: 'LinkedIn',
        value: LINKEDIN_URL,
        displayValue: 'Connect on LinkedIn',
        action: 'link'
    },
    {
        id: 'phone',
        icon: '📱',
        title: 'Phone',
        value: `tel:${CONTACT_PHONE}`,
        displayValue: CONTACT_PHONE_DISPLAY,
        action: 'tel'
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleMethodClick = (method: ContactMethod) => {
        if (method.action === 'copy') {
            handleCopy(method.displayValue, method.id);
        } else if (method.action === 'mailto' || method.action === 'link' || method.action === 'tel') {
            window.open(method.value, method.action === 'link' ? '_blank' : '_self');
        }
    };

    return (
        <div className="page contact-page">
            <Helmet>
                <title>Contact Me | Ashik T M - Let's Create Together</title>
                <meta name="description" content="Get in touch for product design, UI/UX, or graphic design opportunities. Available for freelance projects and full-time roles." />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <main id="main" className="contact-main">
                <section className="contact-hero">
                    <div className="contact-container hero-layout">
                        {/* LEFT: Hero Content */}
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="availability-badge"
                                whileHover={{ scale: 1.05, rotate: 0 }}
                            >
                                <span className="status-dot"></span>
                                <span>Available for Projects</span>
                            </motion.div>

                            <h1 className="contact-title">
                                Let's Build Something
                                <br />
                                <span className="highlight-text"> Extraordinary.</span>
                            </h1>

                            <p className="contact-description">
                                I'm currently open to full-time roles and high-impact freelance projects.
                                UI/UX, Graphics, or Systems—let's make it real.
                            </p>
                        </motion.div>

                        {/* RIGHT: Hero Visual */}
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="illustration-wrapper">
                                <img src={profileImage} alt="Ashik T M" className="hero-illustration profile-image" width={400} height={400} />

                                {/* Clean profile wrapper without extra floating shapes */}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section (Trust, Methods, Form) */}
                <section className="contact-content-section">
                    <div className="contact-container">

                        {/* Trust Indicators */}
                        <motion.div
                            className="trust-indicators"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="trust-item">
                                <span className="trust-value">24h</span>
                                <span className="trust-label">Response Time</span>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <span className="trust-value">50+</span>
                                <span className="trust-label">Projects Delivered</span>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <span className="trust-value">5★</span>
                                <span className="trust-label">Client Rating</span>
                            </div>
                        </motion.div>

                        {/* Contact Methods Grid */}
                        <motion.div
                            className="contact-methods"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.id}
                                    className={`method-card ${method.primary ? 'primary' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => {
                                        handleMethodClick(method);
                                    }}
                                >
                                    <div className="method-icon">{method.icon}</div>
                                    <h3 className="method-title">{method.title}</h3>
                                    <p className="method-value">{method.displayValue}</p>

                                    {method.id === 'email' && (
                                        <button
                                            className="copy-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopy(method.displayValue, method.id);
                                            }}
                                        >
                                            {copiedId === method.id ? '✓ Copied!' : 'Copy'}
                                        </button>
                                    )}

                                    <div className="method-arrow">→</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-section"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h2 className="form-title">Or send me a message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        rows={6}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`submit-button ${formStatus}`}
                                    disabled={formStatus === 'sending'}
                                >
                                    {formStatus === 'idle' && 'Send Message'}
                                    {formStatus === 'sending' && 'Sending...'}
                                    {formStatus === 'success' && '✓ Sent!'}
                                    {formStatus === 'error' && 'Try Again'}
                                </button>

                                <AnimatePresence>
                                    {formStatus === 'success' && (
                                        <motion.div
                                            className="success-message"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            Thanks! I'll get back to you within 24 hours.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
