'use client';

import { motion } from 'framer-motion';

const achievements = [
    {
        title: "Best UI/UX Design",
        event: "Global Hackathon 2024",
        description: "Awarded 1st place for designing an accessible and inclusive educational platform."
    },
    {
        title: "AWS Certified Solution Architect",
        event: "Certification",
        description: "Validated expertise in designing distributed systems on AWS."
    },
    {
        title: "Community Contributor",
        event: "Open Source",
        description: "Recognized top contributor for a major React animation library."
    }
];

export default function Achievements() {
    return (
        <section className="relative z-20 py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Achievements
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Recognition and milestones in my career.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl">🏆</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <span className="text-sm text-purple-400 font-mono tracking-wider uppercase mb-4 block">
                                {item.event}
                            </span>
                            <p className="text-gray-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
