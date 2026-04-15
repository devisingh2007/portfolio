import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/data";
import { FaBars, FaTimes, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNav = () => setNav(!nav);

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <nav
            className={`fixed w-full flex justify-between items-center px-6 md:px-12 transition-all duration-500 z-50 ${scrolled ? "h-[70px] backdrop-blur-2xl border-b border-white/5" : "h-[90px] bg-transparent"
                }`}
            style={{
                backgroundColor: scrolled ? "var(--bg-glass)" : "transparent",
            }}
        >
            {/* Left Section: Logo & ThemeToggle */}
            <div className="flex items-center gap-6 z-[60]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="cursor-pointer group relative"
                >
                    <Link to="home" smooth={true} duration={500} className="text-2xl font-black tracking-tighter flex items-center gap-1 font-heading">
                        <span className="text-[var(--accent-color)] group-hover:text-[var(--accent-hover)] transition-colors">&lt;</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-[var(--accent-color)] transition-all">Dev</span>
                        <span className="text-[var(--accent-color)] group-hover:text-[var(--accent-hover)] transition-colors">/&gt;</span>
                    </Link>
                    <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-gradient)] group-hover:w-full transition-all duration-300"
                    />
                </motion.div>
                <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
                <ThemeToggle />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-10 items-center font-bold uppercase tracking-[0.2em] text-[10px]">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active-nav-link"
                            className="cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all relative py-2 group whitespace-nowrap"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--accent-gradient)] transition-all group-hover:w-2 group-[.active-nav-link]:w-full rounded-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right Section: Socials & Resume */}
            <div className="hidden md:flex items-center gap-6 z-[60]">
                <div className="flex gap-4 items-center pr-2">
                    <motion.a
                        whileHover={{ y: -3, color: "var(--accent-color)" }}
                        href="https://github.com/devisingh2007"
                        target="_blank"
                        className="text-[var(--text-secondary)] transition-colors"
                    >
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3, color: "var(--accent-color)" }}
                        href="https://linkedin.com/in/devisingh-rajput"
                        target="_blank"
                        className="text-[var(--text-secondary)] transition-colors"
                    >
                        <FaLinkedinIn size={20} />
                    </motion.a>
                </div>

                <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group overflow-hidden px-8 py-2.5 rounded-full text-white font-black text-[11px] uppercase tracking-widest shadow-xl transition-all"
                    style={{ background: "var(--accent-gradient)" }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Resume <FaDownload size={10} />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.a>
            </div>

            {/* Hamburger Icon */}
            <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={toggleNav}
                className="lg:hidden z-[60] cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-[var(--accent-color)]/10 text-[var(--accent-color)] transition-all"
            >
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>

            {/* Full-Screen Mobile Menu */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] lg:hidden flex flex-col bg-[var(--bg-primary)]/95 backdrop-blur-3xl"
                    >
                        <motion.ul
                            variants={navVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 flex flex-col justify-center items-center gap-10"
                        >
                            {navLinks.map((link, index) => (
                                <motion.li key={index} variants={linkVariants}>
                                    <Link
                                        onClick={toggleNav}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all flex items-center gap-4 group"
                                    >
                                        <span className="text-xl sm:text-2xl text-[var(--accent-color)] opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Mobile Footer Area */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="p-12 border-t border-white/5 flex flex-col items-center gap-8 bg-black/20"
                        >
                            <div className="flex gap-10">
                                <a href="https://github.com/devisingh2007" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    <FaGithub size={28} />
                                </a>
                                <a href="https://linkedin.com/in/devisingh-rajput" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    <FaLinkedinIn size={28} />
                                </a>
                            </div>
                            <p className="text-[var(--text-secondary)] text-sm tracking-widest uppercase opacity-50">&copy; 2026 Devisingh Rajput</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
