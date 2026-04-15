import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section
            id={id}
            className={`relative w-full min-h-screen py-20 px-6 md:px-20 ${className}`}
            style={{ scrollMarginTop: "80px" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[1240px] mx-auto h-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
