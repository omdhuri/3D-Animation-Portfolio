'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative z-20 py-24 md:py-32 bg-black overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm md:text-base text-purple-400 font-mono tracking-wider uppercase mb-4">
                            About Me
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Crafting digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                masterpeices.
                            </span>
                        </h3>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I'm Om Dhuri, a Creative Developer and Designer based in India.
                                I sit at the intersection of design and engineering, combining
                                technical expertise with artistic vision to create immersive
                                digital experiences.
                            </p>
                            <p>
                                With a deep passion for 3D graphics, interactive UI, and
                                seamless motion, I transform complex ideas into intuitive
                                and beautiful interfaces. My approach is user-centric,
                                ensuring that every pixel serves a purpose.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">3+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">Years Exp.</span>
                            </div>
                            <div className="w-px h-12 bg-gray-800" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">20+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects</span>
                            </div>
                            <div className="w-px h-12 bg-gray-800" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">100%</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">Dedication</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
                            {/* Placeholder for user image or abstract 3D element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80" />

                            {/* Abstract Decorative Elements mimicking a profile or creative avatar */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <span className="block text-6xl mb-4">👨‍💻</span>
                                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                                        Creative Developer
                                    </p>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:bottom-10 md:-left-10 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                                    <p className="text-white font-medium">Open to Work</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
