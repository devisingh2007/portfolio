import { projectsData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaFileAlt, FaFigma } from "react-icons/fa";
import { useState } from "react";
import { SiPostman } from "react-icons/si";

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mousePctX = e.clientX - rect.left;
        const mousePctY = e.clientY - rect.top;
        const xPct = mousePctX / width - 0.5;
        const yPct = mousePctY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-[var(--bg-panel)] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/5 hover:border-[var(--accent-color)]/30 backdrop-blur-md h-full flex flex-col"
        >
            {/* Image Area */}
            <div className="h-48 relative overflow-hidden group-hover:bg-[var(--bg-primary)] transition-colors flex items-center justify-center transform-style-3d">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-widest border border-white/10">
                    {project.category}
                </span>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <FaExternalLinkAlt className="text-white text-2xl" />
                        <span className="text-white font-bold text-sm tracking-widest uppercase">Explore Project</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-7 bg-[var(--bg-panel)] flex-1 flex flex-col relative z-10">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--accent-color)] group-hover:to-[var(--accent-hover)] transition-all">
                    {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[9px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-bold border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons Bar */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    {/* Website Button */}
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-[11px] uppercase tracking-wider shadow-lg transition-all"
                        style={{ background: "var(--accent-gradient)" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaExternalLinkAlt size={12} />
                        <span>Live Demo</span>
                    </motion.a>

                    {/* GitHub Button */}
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white font-bold text-[11px] uppercase tracking-wider border border-white/10 shadow-md transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub size={14} />
                        <span>Source</span>
                    </motion.a>

                    {/* YouTube Button */}
                    {project.youtube && project.youtube !== "#" && (
                        <motion.a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-md transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaYoutube size={14} />
                            <span>Watch Demo Video</span>
                        </motion.a>
                    )}

                    {/* Postman/Figma Links */}
                    <div className="col-span-2 flex gap-3">
                        {project.postman && (
                            <motion.a
                                href={project.postman}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600/20 text-orange-500 border border-orange-500/30 font-bold text-[10px] uppercase tracking-wider transition-all"
                                whileHover={{ scale: 1.05, bg: "rgba(234, 88, 12, 0.3)" }}
                            >
                                <SiPostman size={14} />
                                <span>API Documentation</span>
                            </motion.a>
                        )}
                        {project.figma && project.figma !== "#" && (
                            <motion.a
                                href={project.figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-400/30 font-bold text-[10px] uppercase tracking-wider transition-all"
                                whileHover={{ scale: 1.05, bg: "rgba(147, 51, 234, 0.3)" }}
                            >
                                <FaFigma size={14} />
                                <span>Figma Design</span>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const categories = ["all", "clones", "fullstack", "frontend", "games"];
    const [activeTab, setActiveTab] = useState("all");

    const filteredProjects = activeTab === "all" 
        ? projectsData 
        : projectsData.filter(p => p.category === activeTab);

    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-bold mb-4">Project Showcase</h2>
                <div className="w-20 h-1 mx-auto rounded-full bg-[var(--accent-color)]"></div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8 lowercase tracking-widest text-[11px] font-black">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                                activeTab === cat 
                                ? "bg-[var(--accent-color)] border-[var(--accent-color)] text-white shadow-lg" 
                                : "border-white/5 bg-white/5 text-[var(--text-secondary)] hover:border-white/20"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>
            
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10 uppercase tracking-widest text-xs opacity-50">
                    No projects found in this category yet.
                </div>
            )}
        </SectionWrapper>
    );
};

export default Projects;
