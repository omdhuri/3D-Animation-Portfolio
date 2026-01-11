'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Overlay() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const animationHeight = window.innerHeight * 3; // 300vh
            const progress = Math.min(1, window.scrollY / animationHeight);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Opacity calculations with smoother transitions
    const opacity1 = scrollProgress < 0.2 ? 1 : scrollProgress < 0.35 ? (0.35 - scrollProgress) * (1 / 0.15) : 0;
    const opacity2 = scrollProgress > 0.3 && scrollProgress < 0.5 ? 1 : 0;
    const opacity3 = scrollProgress > 0.55 && scrollProgress < 0.8 ? 1 : 0;

    return (
        <>
            {/* Hero Section (0-20%) - REFINED PROFESSIONAL */}
            {opacity1 > 0 && (
                <div
                    className="fixed inset-0 flex items-end justify-center pointer-events-none z-20 px-4 pb-24 md:pb-16"
                    style={{
                        opacity: opacity1,
                        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <div className="w-full max-w-6xl flex flex-col items-center justify-center">
                        {/* Main heading - Refined, softer white */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-semibold tracking-tighter leading-none text-center w-full"
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                color: 'rgba(245, 245, 245, 0.95)',
                                textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
                                fontWeight: 600
                            }}
                        >
                            OM DHURI
                        </motion.h1>

                        {/* Subtitle - Softer, refined with proper spacing */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-wide mt-6 md:mt-4 mb-8 md:mb-6 text-center flex items-center justify-center gap-2"
                            style={{
                                fontFamily: 'Space Grotesk, sans-serif',
                                color: 'rgba(229, 229, 229, 0.88)',
                                textShadow: '0 2px 16px rgba(0,0,0,0.5)'
                            }}
                        >
                            <span>Creative Developer</span>
                            <span className="text-gray-400/70 text-base sm:text-lg md:text-xl">×</span>
                            <span>Digital Artist</span>
                        </motion.div>
                    </div>
                </div>
            )}
            {/* Second Text (30-50%) - Clean & Simple */}
            {opacity2 > 0 && (
                <div
                    className="fixed left-4 sm:left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 pointer-events-none z-20 max-w-2xl"
                    style={{
                        opacity: opacity2,
                        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <h2
                        className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white"
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            textShadow: '0 8px 40px rgba(0,0,0,0.9)'
                        }}
                    >
                        I build digital<br />experiences
                    </h2>
                </div>
            )}

            {/* Third Text (55-80%) - Clean & Simple */}
            {opacity3 > 0 && (
                <div
                    className="fixed right-4 sm:right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none z-20 max-w-2xl"
                    style={{
                        opacity: opacity3,
                        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <h2
                        className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-right text-white"
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            textShadow: '0 8px 40px rgba(0,0,0,0.9)'
                        }}
                    >
                        Bridging design<br />and engineering
                    </h2>
                </div>
            )}

            {/* Third Text (55-80%) - Clean & Simple */}

            {/* Scroll Indicator - Premium Enhanced */}
            {scrollProgress < 0.05 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
                    style={{
                        opacity: Math.max(0, 1 - scrollProgress * 20),
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    {/* Radial Glow - Subtle Purple/Blue with Pulse */}
                    <motion.div
                        className="absolute inset-0 -inset-x-20 -inset-y-16"
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            background: 'radial-gradient(ellipse 200px 120px at center, rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
                            filter: 'blur(30px)',
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Content */}
                    <div className="flex flex-col items-center text-white/50 relative z-10">
                        <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1.5 sm:mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Scroll to explore
                        </span>
                        <div className="relative">
                            {/* Icon glow - enhanced */}
                            <div className="absolute inset-0 bg-purple-500/15 blur-2xl rounded-full" />
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
