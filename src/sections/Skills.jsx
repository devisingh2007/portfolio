import { skillsData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import SkillPyramid from "../components/SkillPyramid";
import SkillSphere from "../components/SkillSphere"; // Keep as fallback if needed
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Get filtered skills based on active category
    const getFilteredSkills = () => {
        if (activeCategory === "All") {
            return skillsData.flatMap(category => category.skills);
        }
        const category = skillsData.find(cat => cat.category === activeCategory);
        return category ? category.skills : [];
    };

    const filteredSkills = getFilteredSkills();

    return (
        <SectionWrapper id="skills" className="relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[var(--text-primary)]">
                        Technical Expertise
                    </h2>
                    <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent mb-12"></div>
                </motion.div>

                {/* Modern Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === "All"
                                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] scale-105 shadow-lg shadow-[var(--glow-color)]"
                                : "bg-transparent text-[var(--text-secondary)] border-[var(--text-secondary)]/20 hover:border-[var(--text-secondary)]/50 hover:text-[var(--text-primary)]"
                            }`}
                    >
                        All Universe
                    </button>
                    {skillsData.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category.category)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === category.category
                                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] scale-105 shadow-lg shadow-[var(--glow-color)]"
                                    : "bg-transparent text-[var(--text-secondary)] border-[var(--text-secondary)]/20 hover:border-[var(--text-secondary)]/50 hover:text-[var(--text-primary)]"
                                }`}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3D Pyramid Container */}
            <div className="relative min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 1.1, rotateY: 30 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full flex items-center justify-center"
                    >
                        {activeCategory === "All" ? (
                            <SkillPyramid skills={filteredSkills} />
                        ) : (
                            <SkillSphere skills={filteredSkills} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
