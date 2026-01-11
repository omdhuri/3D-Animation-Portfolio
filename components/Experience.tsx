'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Senior Graphic Designer",
        company: "Creatife",
        period: "April 2024 - Present",
        description: "Leading UI/UX design initiatives for enterprise clients. Mentoring junior designers and establishing design systems."
    },
    {
        role: "Frontend Developer",
        company: "TechFlow",
        period: "Jan 2023 - March 2024",
        description: "Developed responsive web applications using React and Next.js. Optimized performance and improved accessibility scores."
    },
    {
        role: "Freelance Designer & Dev",
        company: "Self-Employed",
        period: "2021 - 2023",
        description: "Delivered custom web solutions and brand identities for startups. Managed full project lifecycles from concept to deployment."
    }
];

export default function Experience() {
    return (
        <section id="resume" className="relative z-20 py-24 bg-[#0a0a0a]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Resume
                        </h2>
                        <p className="text-gray-400 text-lg">My professional journey and milestones.</p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                        onClick={() => {
                            // Placeholder alert for now, real download later
                            alert("Resume download would start here.");
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </motion.button>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Mobile timeline line */}
                            <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 md:hidden" />
                            <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-purple-500 md:hidden" />

                            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] gap-4 md:gap-12 items-start group">
                                {/* Period - Left side on desktop */}
                                <div className="text-left md:text-right md:order-1">
                                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase bg-purple-500/10 px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Center Dot/Line on desktop */}
                                <div className="hidden md:flex justify-center items-center h-full relative md:order-2">
                                    <div className="w-px h-full bg-white/10 absolute top-0 bottom-0" />
                                    <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-purple-500 relative z-10 group-hover:scale-125 transition-transform duration-300" />
                                </div>

                                {/* Content - Right side on desktop */}
                                <div className="md:order-3 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                                    <h4 className="text-lg text-gray-300 mb-4">{exp.role}</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
