import { motion } from "framer-motion";

const _motion = motion;

const Skeleton = ({ className, width, height, borderRadius = "1rem" }) => {
    return (
        <motion.div
            className={`bg-white/5 relative overflow-hidden ${className}`}
            style={{
                width: width || "100%",
                height: height || "100%",
                borderRadius: borderRadius
            }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
};

export default Skeleton;
