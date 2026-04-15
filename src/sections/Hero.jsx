import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { heroData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";

const Hero = () => {
    return (
        <SectionWrapper id="home" className="flex items-center justify-center text-center">
            <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-medium mb-4"
                    style={{ color: "var(--accent-color)" }}
                >
                    Hi, I am
                </motion.p>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight flex justify-center gap-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {heroData.name.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-2xl md:text-4xl text-[var(--text-secondary)] mb-8 font-light"
                >
                    {heroData.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed opacity-80"
                >
                    {heroData.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-6"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="px-8 py-3 rounded-full text-[var(--bg-primary)] font-medium text-lg transition-transform hover:scale-105 cursor-pointer shadow-lg"
                        style={{ backgroundColor: "var(--text-primary)" }}
                    >
                        {heroData.ctaPrimary}
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="px-8 py-3 rounded-full border-2 font-medium text-lg transition-all hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:text-[var(--bg-primary)] cursor-pointer"
                        style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
                    >
                        {heroData.ctaSecondary}
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
