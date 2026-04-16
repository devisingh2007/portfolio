import { figmaData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaFigma, FaExternalLinkAlt } from "react-icons/fa";

const Figma = () => {
    return (
        <SectionWrapper id="figma" className="bg-black/20">
            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-4"
                >
                    Figma Designs
                </motion.h2>
                <div className="w-20 h-1 mx-auto rounded-full bg-[#F24E1E]"></div>
                <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Showcasing UI/UX designs and interactive prototypes created using Figma.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {figmaData.map((design, index) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[var(--bg-panel)] rounded-3xl overflow-hidden border border-white/5 hover:border-[#F24E1E]/30 transition-all duration-500 shadow-2xl"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                        </div>

                        <div className="p-8 relative">
                            <div className="absolute -top-12 left-8 w-16 h-16 bg-[#F24E1E] rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                <FaFigma className="text-white text-3xl" />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#F24E1E] transition-colors">{design.title}</h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                                    {design.description}
                                </p>

                                <motion.a
                                    href={design.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#F24E1E] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10 group/btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>View Design</span>
                                    <FaExternalLinkAlt className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Figma;
