'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Nebula Dashboard",
        category: "Data Visualization",
        description: "Real-time 3D data visualization platform built with Three.js and WebGL. Features interactive satellite tracking and telemetry analysis.",
        tags: ["React", "Three.js", "WebGL", "D3.js"],
        gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
        title: "Zenith Commerce",
        category: "E-commerce Platform",
        description: "Headless e-commerce experience with instant page loads, seamless animations, and optimized checkout flow.",
        tags: ["Next.js", "Shopify", "Framer Motion", "Stripe"],
        gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
        title: "Aether Lens",
        category: "AI Platform",
        description: "AI-powered image analysis and enhancement tool. Dark-mode interface with real-time processing feedback.",
        tags: ["TypeScript", "Python", "OpenAI", "TensorFlow"],
        gradient: "from-emerald-500 via-green-500 to-lime-500"
    },
    {
        title: "Chronos",
        category: "Productivity App",
        description: "Time management application focused on deep work and flow state. Minimal design, maximum focus.",
        tags: ["React Native", "Firebase", "Redux", "Notion API"],
        gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-gradient-to-b from-[#121212] to-[#0a0a0a] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Selected Work
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects that push the boundaries of web technology and design.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Animated gradient border */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-30 group-hover:opacity-100 blur-lg transition-all duration-500 rounded-3xl`} />

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden"
                            >
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full blur-3xl`} />
                                </div>

                                <div className="relative z-10">
                                    {/* Category badge */}
                                    <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-white/80 uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.gradient} transition-all duration-300`}>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs md:text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View project link */}
                                    <div className="flex items-center text-white/70 group-hover:text-white transition-colors gap-2 mt-6">
                                        <span className="text-sm font-medium">View Project</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5`} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 text-lg mb-4">Want to see more?</p>
                    <button className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm">
                        <span className="flex items-center gap-2">
                            Explore All Projects
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
