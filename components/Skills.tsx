'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "Three.js / WebGL", level: 85, category: "3D Graphics" },
    { name: "TypeScript", level: 90, category: "Languages" },
    { name: "Tailwind CSS", level: 98, category: "Styling" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Figma", level: 85, category: "Design" },
    { name: "Python", level: 75, category: "Languages" },
    { name: "PostgreSQL", level: 70, category: "Database" },
];

export default function Skills() {
    return (
        <section id="skills" className="relative z-20 py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <span className="text-xs text-purple-400 font-mono tracking-wider uppercase mb-2 block">
                                        {skill.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                        {skill.name}
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>Proficiency</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
