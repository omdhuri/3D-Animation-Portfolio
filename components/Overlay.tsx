'use client';

import { useEffect, useState } from 'react';

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

    // Opacity calculations
    const opacity1 = scrollProgress < 0.2 ? 1 : scrollProgress < 0.3 ? (0.3 - scrollProgress) * 10 : 0;
    const opacity2 = scrollProgress > 0.3 && scrollProgress < 0.5 ? 1 : 0;
    const opacity3 = scrollProgress > 0.55 && scrollProgress < 0.8 ? 1 : 0;

    return (
        <>
            {/* Hero Section (0-20%) */}
            {opacity1 > 0 && (
                <div
                    className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
                    style={{
                        opacity: opacity1,
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    <div className="text-center px-4">
                        <h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight"
                            style={{
                                textShadow: '0 10px 50px rgba(0,0,0,1), 0 0 100px rgba(138,43,226,0.3)'
                            }}
                        >
                            OM DHURI
                        </h1>
                        <p
                            className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light"
                            style={{
                                textShadow: '0 8px 30px rgba(0,0,0,1)'
                            }}
                        >
                            Creative Developer
                        </p>
                    </div>
                </div>
            )}

            {/* Second Text (30-50%) */}
            {opacity2 > 0 && (
                <div
                    className="fixed left-8 md:left-16 lg:left-20 top-1/2 -translate-y-1/2 pointer-events-none z-20 max-w-2xl"
                    style={{
                        opacity: opacity2,
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        style={{
                            textShadow: '0 10px 50px rgba(0,0,0,1), 0 0 80px rgba(168,85,247,0.3)'
                        }}
                    >
                        I build digital<br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                            experiences
                        </span>
                    </h2>
                </div>
            )}

            {/* Third Text (55-80%) */}
            {opacity3 > 0 && (
                <div
                    className="fixed right-8 md:right-16 lg:right-20 top-1/2 -translate-y-1/2 pointer-events-none z-20 max-w-2xl"
                    style={{
                        opacity: opacity3,
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-right"
                        style={{
                            textShadow: '0 10px 50px rgba(0,0,0,1), 0 0 80px rgba(34,211,238,0.3)'
                        }}
                    >
                        Bridging design<br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                            and engineering
                        </span>
                    </h2>
                </div>
            )}

            {/* Scroll Indicator */}
            {scrollProgress < 0.05 && (
                <div
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                    style={{
                        opacity: Math.max(0, 1 - scrollProgress * 20),
                        transition: 'opacity 0.2s ease'
                    }}
                >
                    <div className="flex flex-col items-center text-white/70 animate-bounce">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            )}
        </>
    );
}
