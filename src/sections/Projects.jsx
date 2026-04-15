import { projectsData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

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
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[var(--bg-panel)] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/5 hover:border-[var(--accent-color)]/30 backdrop-blur-md"
        >
            {/* Image Area */}
            <div className="h-48 relative overflow-hidden group-hover:bg-[var(--bg-primary)] transition-colors flex items-center justify-center transform-style-3d">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                {/* Optional overlay text on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <FaExternalLinkAlt className="text-white text-2xl" />
                        <span className="text-white font-bold text-sm tracking-widest uppercase">Explore Project</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-7 bg-[var(--bg-panel)] relative z-10">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-color)] group-hover:to-[var(--accent-hover)] transition-all">
                    {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-color)] font-bold border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons Bar */}
                <div className="flex flex-col gap-3 mt-6">
                    {/* Website Button */}
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-[var(--accent-color)]/20 transition-all duration-300 group/btn"
                        style={{ background: "var(--accent-gradient)" }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaExternalLinkAlt size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Visit Website</span>
                    </motion.a>

                    {/* GitHub Button */}
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0D1117] text-white font-bold text-sm border border-gray-800 shadow-md hover:border-[var(--accent-color)]/50 transition-all duration-300 group/btn"
                        whileHover={{
                            scale: 1.02,
                            y: -2,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform" />
                        <span>View Source Code</span>
                    </motion.a>

                    {/* YouTube Button */}
                    {project.youtube ? (
                        <motion.a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#FF0000] text-white font-bold text-sm shadow-md hover:shadow-red-500/20 transition-all duration-300 group/btn"
                            whileHover={{
                                scale: 1.02,
                                y: -2,
                                background: "linear-gradient(90deg, #FF4D4D 0%, #C40000 100%)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaYoutube size={18} />
                            </motion.div>
                            <span>Watch Demo Video</span>
                        </motion.a>
                    ) : (
                        <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 text-[var(--text-secondary)] font-bold text-sm border border-white/10 cursor-not-allowed opacity-50">
                            <FaYoutube size={18} />
                            <span>Demo Coming Soon</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: "var(--accent-color)" }}></div>
                <p className="mt-4 text-[var(--text-secondary)]">
                    A collection of premium website clones and open-source projects.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
