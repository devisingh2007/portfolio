import { educationData, experienceData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaStar, FaFilePdf, FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const _motion = motion;

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="">
            <div className="text-center mb-10 sm:mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-4"
                >
                    Journey
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-20 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: "var(--accent-color)" }}
                ></motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] px-4"
                >
                    My academic and professional pathway.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 relative">

                {/* Center Line for Desktop */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gray-200 -translate-x-1/2 origin-top"
                ></motion.div>

                {/* Education Column */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 justify-center lg:justify-start"
                    >
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-amber-600 text-white shadow-lg"
                        >
                            <FaGraduationCap size={20} />
                        </motion.div>
                        Education
                    </motion.h3>
                    <div className="space-y-12 relative">
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[var(--accent-color)] to-transparent lg:hidden"></div>

                        {educationData.map((item, index) => {
                            const icons = [FaTrophy, FaMedal, FaAward];
                            const Icon = icons[index % icons.length];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative pl-12"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                        className="absolute left-[9px] top-6 w-4 h-4 rounded-full border-2 bg-[var(--bg-primary)] z-10 shadow-md shadow-[var(--accent-color)]/20"
                                        style={{ borderColor: "var(--accent-color)" }}
                                    ></motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-[var(--bg-panel)] border border-white/5 hover:border-[var(--accent-color)]/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 group relative overflow-hidden backdrop-blur-md"
                                    >
                                        {/* Decorative corner icon */}
                                        <div className="absolute top-4 right-4 text-white/5 group-hover:text-[var(--accent-color)]/20 transition-colors">
                                            <Icon size={40} />
                                        </div>

                                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-3 tracking-widest uppercase" style={{ background: "var(--accent-gradient)", color: "white" }}>
                                            {item.duration}
                                        </span>

                                        <h4 className="text-base sm:text-xl font-bold mt-1 group-hover:text-[var(--accent-color)] transition-colors pr-10">{item.level}</h4>
                                        <p className="text-xs sm:text-sm font-semibold text-[var(--accent-color)] opacity-80 mb-1">{item.institution}</p>
                                        {item.university && <p className="text-xs text-[var(--text-secondary)] mb-3 italic opacity-60">({item.university})</p>}

                                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.details && item.details.map((detail, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.15 + idx * 0.05 }}
                                                    className="text-[10px] uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-lg text-[var(--text-secondary)] font-bold border border-white/5 shadow-inner"
                                                >
                                                    {detail}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience Column */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 justify-center lg:justify-start"
                    >
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-2.5 sm:p-3 rounded-full shadow-lg text-white"
                            style={{ background: "var(--accent-gradient)" }}
                        >
                            <FaBriefcase size={18} />
                        </motion.div>
                        Experience & Internships
                    </motion.h3>
                    <div className="space-y-12 relative">
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent lg:hidden"></div>

                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="relative pl-12"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                    className="absolute left-[9px] top-6 w-4 h-4 rounded-full border-2 bg-[var(--bg-primary)] z-10 shadow-md shadow-blue-500/20"
                                    style={{ borderColor: "#3B82F6" }}
                                ></motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-[var(--bg-panel)] border border-white/5 hover:border-blue-500/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 flex flex-col h-full group backdrop-blur-md"
                                >
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                                            {item.duration}
                                        </span>
                                        <span className="text-[10px] font-bold text-blue-400 capitalize bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 tracking-wider font-heading">{item.mode}</span>
                                    </div>

                                    <h4 className="text-base sm:text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">{item.role}</h4>
                                    <p className="text-xs sm:text-sm font-semibold text-blue-500/80 mb-3">{item.company}</p>

                                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5 flex-grow leading-relaxed">{item.description}</p>

                                    <div className="mb-5">
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-60 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> Skills Gained
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.15 + idx * 0.05 }}
                                                    whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "white" }}
                                                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-blue-500/20 text-blue-400 bg-blue-500/5 transition-all shadow-inner"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Certificate Section with Thumbnail */}
                                    {item.certificate && (
                                        <div className="mt-auto pt-4 sm:pt-6 border-t border-white/5">
                                            <div className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-50 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div> Achievement
                                            </div>
                                            <div className="flex flex-wrap gap-3 items-center">
                                                {/* Certificate Thumbnail */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => window.open(item.certificate, "_blank")}
                                                    className="relative w-16 h-16 sm:w-24 sm:h-20 bg-white/5 rounded-xl shadow-2xl border border-white/10 cursor-pointer overflow-hidden group/cert flex items-center justify-center p-1 flex-shrink-0"
                                                >
                                                    <div className="absolute inset-2 border border-dashed border-amber-500/30 rounded-lg"></div>
                                                    <FaAward className="text-amber-500/40 text-2xl z-10" />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/90 to-amber-700/90 opacity-0 group-hover/cert:opacity-100 transition-all flex items-center justify-center">
                                                        <FaFilePdf className="text-white text-xl" />
                                                    </div>
                                                </motion.div>

                                                {/* View Button */}
                                                <motion.a
                                                    href={item.certificate}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.3)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl transition-all"
                                                >
                                                    <FaFilePdf size={13} /> View Document
                                                </motion.a>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
