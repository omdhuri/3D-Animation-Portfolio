'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const lastScrollRef = useRef(0);

    // Optimized scroll handler using ref
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Show/hide based on scroll direction
            if (currentScroll > lastScrollRef.current && currentScroll > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            // Change appearance when scrolled
            setScrolled(currentScroll > 50);
            lastScrollRef.current = currentScroll;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActiveSection(href);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <AnimatePresence>
                {!hidden && (
                    <motion.nav
                        initial={{ y: 0 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                            ? 'bg-black/20 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-purple-500/5'
                            : 'bg-transparent'
                            }`}
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
                            {/* Logo - Premium Monogram Style */}
                            <motion.a
                                href="#"
                                className="relative group focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Om Dhuri - Home"
                            >
                                {/* Glow effect - Subtle */}
                                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-12 blur-xl transition-opacity duration-500" />

                                <div className="relative flex items-center gap-3">
                                    {/* Monogram */}
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        {/* Background glow - Subtle */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-purple-400/15 to-blue-500/15 rounded-lg blur-md" />

                                        {/* Border */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-lg p-[1px]">
                                            <div className="w-full h-full bg-black rounded-lg" />
                                        </div>

                                        {/* Letters */}
                                        <span className="relative text-xl font-bold bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 text-transparent bg-clip-text" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                                            OD
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <div className="hidden sm:flex flex-col">
                                        <span className="text-base font-semibold text-white tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            Om Dhuri
                                        </span>
                                        <span className="text-[10px] text-gray-400 tracking-widest uppercase">Creative Developer</span>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Desktop Nav Links */}
                            <div className="hidden md:flex items-center gap-1">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4 group ${activeSection === item.href
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Active indicator glow - Subtle */}
                                        {activeSection === item.href && (
                                            <motion.div
                                                layoutId="navbar-active"
                                                className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-purple-400/8 to-blue-500/8 rounded-lg border border-white/5"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        {/* Hover glow - Subtle */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/0 to-blue-500/0 group-hover:from-purple-500/4 group-hover:via-purple-400/4 group-hover:to-blue-500/4 rounded-lg transition-all duration-300" />

                                        <span className="relative">{item.label}</span>

                                        {/* Bottom line */}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Desktop CTA Button - Premium Style */}
                            <motion.a
                                href="mailto:omdhuri48@gmail.com"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="hidden md:block relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2 group overflow-hidden"
                                aria-label="Contact via email"
                            >
                                {/* Animated gradient background - Refined */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-70 blur-xl transition-opacity" />

                                {/* Border */}
                                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />

                                <span className="relative text-white flex items-center gap-2">
                                    Let's Talk
                                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </motion.a>

                            {/* Mobile Hamburger Button */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="md:hidden p-2 text-white/70 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2 rounded-lg transition-colors"
                                aria-label="Open mobile menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Menu Component */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}
