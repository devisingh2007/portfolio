import { motion } from "framer-motion";

const _motion = motion;

const SkillWheel = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="skill-wheel-container"
            >
                <svg
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                    className="skill-wheel-svg"
                >
                    {/* Outer circle */}
                    <circle
                        cx="400"
                        cy="400"
                        r="350"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="4"
                        opacity="0.4"
                    />

                    {/* Middle circle */}
                    <circle
                        cx="400"
                        cy="400"
                        r="280"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="3"
                        opacity="0.35"
                    />

                    {/* Inner circle */}
                    <circle
                        cx="400"
                        cy="400"
                        r="210"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="3"
                        opacity="0.3"
                    />

                    {/* Spokes - 12 radial lines */}
                    {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x1 = 400 + 210 * Math.cos(angle);
                        const y1 = 400 + 210 * Math.sin(angle);
                        const x2 = 400 + 350 * Math.cos(angle);
                        const y2 = 400 + 350 * Math.sin(angle);

                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="var(--accent-color)"
                                strokeWidth="2.5"
                                opacity="0.35"
                            />
                        );
                    })}

                    {/* Decorative dots on middle circle */}
                    {[...Array(24)].map((_, i) => {
                        const angle = (i * 15 * Math.PI) / 180;
                        const x = 400 + 280 * Math.cos(angle);
                        const y = 400 + 280 * Math.sin(angle);

                        return (
                            <circle
                                key={`dot-${i}`}
                                cx={x}
                                cy={y}
                                r="5"
                                fill="var(--accent-color)"
                                opacity="0.4"
                            />
                        );
                    })}

                    {/* Center decorative element */}
                    <circle
                        cx="400"
                        cy="400"
                        r="30"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="4"
                        opacity="0.4"
                    />

                    <circle
                        cx="400"
                        cy="400"
                        r="15"
                        fill="var(--accent-color)"
                        opacity="0.3"
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default SkillWheel;
