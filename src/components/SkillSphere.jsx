import { motion } from "framer-motion";

const SkillSphere = ({ skills }) => {
    return (
        <div className="flex flex-wrap gap-6 justify-center items-center py-10 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="skill-card-3d group relative w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer"
                >
                    <div className="skill-logo-container w-12 h-12 mb-3">
                        <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-center text-[var(--text-secondary)] group-hover:text-[var(--accent-color)] transition-colors">
                        {skill.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default SkillSphere;
