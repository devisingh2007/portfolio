import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { hackathonsData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";

const Hackathons = () => {
    return (
        <SectionWrapper id="hackathons" className="relative overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent-color)] opacity-5 blur-[100px] -z-10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-5 blur-[100px] -z-10 rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Hackathons & Challenges
                </h2>
                <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)]"></div>
                <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
                    A showcase of competitive programming, intensive builds, and collaborative innovation in tech challenges.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 z-10 relative">
                {hackathonsData.map((hackathon, idx) => (
                    <motion.div
                        key={hackathon.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-[var(--bg-panel)] backdrop-blur-md border border-[var(--text-secondary)]/20 rounded-3xl flex flex-col group hover:border-[var(--accent-color)]/50 transition-all shadow-xl hover:shadow-2xl overflow-hidden relative"
                    >
                        {/* Certificate Header Section */}
                        <div className="relative h-48 w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--text-secondary)]/10">
                            {hackathon.certificate ? (
                                typeof hackathon.certificate === 'string' && hackathon.certificate.endsWith('.pdf') ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-[var(--accent-color)]">
                                        <div className="p-4 rounded-2xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 mb-2">
                                            <FaTrophy size={40} className="opacity-80" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase opacity-60 italic">Certificate (PDF)</span>
                                    </div>
                                ) : (
                                    <img 
                                        src={hackathon.certificate} 
                                        alt={`${hackathon.title} Certificate`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                )
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-secondary)]/20">
                                    <FaCodeBranch size={48} />
                                </div>
                            )}
                            
                            {/* Overlay tag for result */}
                            {hackathon.result && (
                                <div className="absolute top-4 left-4 flex items-center gap-2 text-[var(--accent-color)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--bg-primary)]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--accent-color)]/30 z-20">
                                    <FaTrophy className="animate-pulse" /> {hackathon.result}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-7 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-color)] transition-colors leading-tight">
                                {hackathon.title}
                            </h3>

                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.15em] text-[var(--text-secondary)] mb-4">
                                <span className="flex items-center gap-1.5 border-r border-[var(--text-secondary)]/30 pr-4">
                                    <FaCalendarAlt className="text-[var(--accent-color)]" /> {hackathon.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <FaCodeBranch className="text-[var(--accent-color)]" /> {hackathon.role}
                                </span>
                            </div>

                            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                {hackathon.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {hackathon.tech.map((tech, i) => (
                                    <span key={i} className="text-[10px] font-bold text-[var(--accent-color)] bg-[var(--accent-color)]/5 px-3 py-1.5 rounded-lg border border-[var(--accent-color)]/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a 
                                href={hackathon.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-[var(--accent-color)]/30 bg-transparent text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-primary)] hover:border-[var(--accent-color)] text-xs font-black uppercase tracking-widest transition-all duration-300"
                            >
                                View Certificate <FaExternalLinkAlt size={10} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Hackathons;
