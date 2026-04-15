import { aboutData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import GitHubStats from "../components/GitHubStats";
import profileImg from "../assets/profile.jpg";

const About = () => {
    return (
        <SectionWrapper id="about" className="">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-6 border-l-4 pl-4"
                        style={{ borderColor: "var(--accent-color)" }}
                    >
                        {aboutData.title}
                    </motion.h2>
                    <p className="text-lg leading-relaxed mb-8 text-[var(--text-secondary)] text-justify">
                        {aboutData.description}
                    </p>

                    <div className="space-y-4">
                        {aboutData.attributes.map((attr, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4"
                            >
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
                                <span className="font-bold min-w-[100px]">{attr.label}:</span>
                                <span className="text-[var(--text-secondary)]">{attr.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Creative Visual (Placeholder for Image or Graphic) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div
                        className="w-full aspect-square rounded-3xl shadow-2xl overflow-hidden relative z-10 bg-[var(--bg-panel)] flex items-center justify-center border border-white/5 backdrop-blur-sm"
                    >
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    {/* Decorative box */}
                    <div
                        className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl -z-0 blur-[2px]"
                        style={{ background: "var(--accent-gradient)", opacity: 0.15 }}
                    ></div>
                    <div
                        className="absolute -top-4 -left-4 w-24 h-24 rounded-full -z-0 blur-3xl"
                        style={{ background: "var(--accent-color)", opacity: 0.1 }}
                    ></div>
                </motion.div>
            </div>

            <GitHubStats />
        </SectionWrapper>
    );
};

export default About;
