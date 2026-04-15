import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full py-10 border-t border-white/10 bg-[var(--bg-primary)]">
            <div className="w-full max-w-[var(--max-width)] mx-auto px-4 md:px-10 flex flex-col items-center gap-4">
                <p className="caption text-[var(--text-secondary)]">Built with React, Vite and Broadway-inspired design system</p>
                <div className="flex justify-center gap-6">
                {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
                <p className="text-sm text-[var(--text-secondary)]">© {new Date().getFullYear()} Devisingh Rajput. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
