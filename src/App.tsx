import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Lazy Load Pages for Performance

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const UiUxDesign = lazy(() => import('./pages/UiUxDesign'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll To Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple fallback loader (CSS-based for React 19 compatibility)
const PageLoader = () => (
  <div className="page-loader">
    <div className="spinner" aria-label="Loading..." />
  </div>
);

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <a href="#main" className="skip-link">Skip to Content</a>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/ui-ux" element={<UiUxDesign />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Canonical case study route */}
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            {/* Legacy routes - redirect to canonical */}
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;

