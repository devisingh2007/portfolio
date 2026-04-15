import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const _motion = motion;

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Progress Logic
    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            const step = Math.random() * 10 + 2;
            current = Math.min(current + step, 100);
            setProgress(current);

            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsComplete(true);
                    setTimeout(onComplete, 1200); // Allow time for shutter animation
                }, 800);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    // Shutter Stripes Configuration
    const stripes = Array.from({ length: 5 });

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
            {/* Film Grain Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Ambient Background Light (Soft Bloom) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0a0a0a_100%)]" />

            {/* Shutter Stripes (Opening Curtain) */}
            <AnimatePresence>
                {isComplete && (
                    <div className="absolute inset-0 z-40 flex flex-col pointer-events-none">
                        {stripes.map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 0 }}
                                animate={{ x: i % 2 === 0 ? "100%" : "-100%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.65, 0, 0.35, 1],
                                    delay: i * 0.1
                                }}
                                className="flex-1 bg-[#0a0a0a] border-b border-white/5"
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Main Content (Title & Progress) */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl px-8">
                {/* Brand / Name */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-[10px] uppercase tracking-[1em] text-white/40 mb-8 font-sans font-light">
                        Portfolio Portfolio Portfolio
                    </span>

                    <h1 className="text-6xl md:text-8xl font-normal text-white italic tracking-tight leading-none">
                        Devisingh Rajput
                    </h1>

                    <div className="mt-12 h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* Counter Footer */}
                <div className="absolute bottom-[-160px] flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6 overflow-hidden">
                        <motion.div
                            key={Math.floor(progress)}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-2xl font-light text-white/80 tabular-nums italic"
                        >
                            {Math.floor(progress)}%
                        </motion.div>
                    </div>

                    <motion.span
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-[9px] uppercase tracking-[0.6em] text-white/30 font-sans"
                    >
                        Initializing Cinematic Experience
                    </motion.span>
                </div>
            </div>

            {/* Decorative Side Numbers (Siena Style) */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-5 text-[10px] uppercase tracking-widest pointer-events-none">
                <span>01/04</span>
                <span>System</span>
                <span>Active</span>
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-5 text-[10px] uppercase tracking-widest pointer-events-none text-right">
                <span>© 2025</span>
                <span>Devisingh</span>
                <span>Rajput</span>
            </div>

            {/* Subtle Light Scanline */}
            <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent z-20 pointer-events-none"
            />
        </motion.div>
    );
};

export default Preloader;
