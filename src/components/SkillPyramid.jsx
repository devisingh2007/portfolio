import { motion } from "framer-motion";

const SkillPyramid = ({ skills }) => {
    // Logic to group skills into pyramid rows (1, 2, 3, 4, 5, 6, 7)
    const getPyramidRows = (skillList) => {
        const rows = [];
        let currentIndex = 0;
        let rowCount = 1;

        while (currentIndex < skillList.length) {
            rows.push(skillList.slice(currentIndex, currentIndex + rowCount));
            currentIndex += rowCount;
            rowCount++;
        }
        return rows;
    };

    const rows = getPyramidRows(skills);

    return (
        <div className="pyramid-container pyramid-3d">
            <div className="pyramid-wrapper">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="pyramid-row">
                        {row.map((skill, skillIndex) => (
                            <motion.div
                                key={`${rowIndex}-${skillIndex}`}
                                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: (rowIndex * 0.1) + (skillIndex * 0.05),
                                    duration: 0.6
                                }}
                                whileHover={{ 
                                    translateZ: 50, 
                                    scale: 1.1,
                                    rotateY: 5,
                                    boxShadow: "0 20px 40px rgba(197, 160, 89, 0.4)"
                                }}
                                className="skill-card-3d group relative w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer"
                            >
                                <div className="skill-logo-container w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-3">
                                    <img 
                                        src={skill.logo} 
                                        alt={skill.name} 
                                        className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-300"
                                    />
                                </div>
                                <span className="text-[8px] sm:text-[10px] font-black text-center uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--accent-color)] transition-colors">
                                    {skill.name}
                                </span>
                                
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[var(--accent-color)] opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillPyramid;
