import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.add("light-theme");
        } else {
            // Default is dark, no class needed as it's the :root
            setIsDark(true);
            document.documentElement.classList.remove("light-theme");
        }
    }, []);

    const toggleTheme = () => {
        const nextIsDark = !isDark;
        setIsDark(nextIsDark);

        // Create ripple element
        const ripple = document.createElement("div");
        ripple.className = "theme-ripple";
        document.body.appendChild(ripple);

        const animation = ripple.animate([
            { width: '0px', height: '0px', opacity: 0.5 },
            { width: '250vw', height: '250vw', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-in-out'
        });

        animation.onfinish = () => {
            ripple.remove();
        };

        if (nextIsDark) {
            document.documentElement.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            animate={{ rotate: isDark ? 180 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            aria-label="Toggle theme"
        >
            <div className="flex items-center justify-center">
                {isDark ? (
                    <FaMoon size={20} className="text-yellow-300" style={{ transform: "rotate(180deg)" }} />
                ) : (
                    <FaSun size={20} className="text-yellow-500" />
                )}
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
