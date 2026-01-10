'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Show/hide based on scroll direction
            if (currentScroll > lastScroll && currentScroll > 100) {
                setHidden(true); // Scrolling down
            } else {
                setHidden(false); // Scrolling up
            }

            // Change appearance when scrolled
            setScrolled(currentScroll > 50);
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    return (
        <AnimatePresence>
            {!hidden && (
                <motion.nav
                    initial={{ y: 0 }}
                    animate={{ y: hidden ? -100 : 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                            ? 'bg-black/30 backdrop-blur-xl border-b border-white/10'
                            : 'bg-transparent'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-xl md:text-2xl font-bold text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                                Om Dhuri
                            </span>
                        </motion.a>

                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {['Work', 'About', 'Contact'].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full text-white text-sm font-medium transition-all backdrop-blur-sm"
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
