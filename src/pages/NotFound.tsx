import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="page not-found-page">
            <Helmet>
                <title>404 — Page Not Found | Ashik T M</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Header />
            <main id="main" className="not-found-main">
                <motion.div
                    className="not-found-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="error-code">404</span>
                    <h1>Page not found</h1>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <div className="not-found-actions">
                        <Link to="/" className="btn-primary">
                            Back to Home <span aria-hidden="true">→</span>
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
