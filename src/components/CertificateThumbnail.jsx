import { motion } from "framer-motion";
import { FaFilePdf, FaAward } from "react-icons/fa";

const _motion = motion;

const CertificateThumbnail = ({ title, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="relative w-full aspect-[4/3] bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-md border border-gray-200 cursor-pointer overflow-hidden group flex flex-col items-center justify-center p-4 text-center"
        >
            {/* Decorative Border */}
            <div className="absolute inset-2 border-2 border-dashed border-gray-300 rounded-md"></div>

            {/* Icon */}
            <div className="text-[var(--accent-color)] mb-2 z-10">
                <FaAward size={32} />
            </div>

            {/* Title */}
            <h6 className="text-xs font-serif font-bold text-gray-700 z-10 max-w-[80%] line-clamp-2">
                {title}
            </h6>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[var(--accent-color)] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-white text-sm font-bold flex items-center gap-2">
                    <FaFilePdf /> View PDF
                </span>
            </div>
        </motion.div>
    );
};

export default CertificateThumbnail;
