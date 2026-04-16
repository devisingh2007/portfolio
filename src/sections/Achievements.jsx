import { achievementsData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <SectionWrapper id="achievements">
            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-4"
                >
                    Awards & Achievements
                </motion.h2>
                <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-amber-600"></div>
                <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                    A summary of my professional recognitions, hackathon wins, and academic milestones.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {achievementsData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-[var(--bg-panel)] p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 relative group text-center"
                    >
                        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
                            {item.date}
                        </span>
                        <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                            {item.title}
                        </h3>
                        <p className="text-xs font-bold text-[var(--accent-color)] mb-4 italic">
                            {item.organization}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {item.description}
                        </p>

                        {/* Decorative background glow */}
                        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
