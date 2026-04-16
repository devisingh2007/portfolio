import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "../data/data";

const Footer = () => {
    const socials = [
        { icon: FaGithub, href: socialLinks.github, name: "GitHub" },
        { icon: FaLinkedin, href: socialLinks.linkedin, name: "LinkedIn" },
        { icon: FaXTwitter, href: socialLinks.twitter, name: "X" },
        { icon: FaInstagram, href: socialLinks.instagram, name: "Instagram" },
        { icon: SiLeetcode, href: socialLinks.leetcode, name: "LeetCode" },
        { icon: FaYoutube, href: socialLinks.youtube, name: "YouTube" },
        { icon: FaEnvelope, href: `mailto:${socialLinks.email}`, name: "Email" }
    ];

    return (
        <footer className="w-full py-10 border-t border-white/10 bg-[var(--bg-primary)]">
            <div className="w-full max-w-[var(--max-width)] mx-auto px-4 md:px-10 flex flex-col items-center gap-4">
                <p className="caption text-[var(--text-secondary)]">Built with React, Vite and Broadway-inspired design system</p>
                <div className="flex justify-center gap-6 flex-wrap">
                {socials.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                        title={item.name}
                    >
                        <item.icon />
                    </a>
                ))}
            </div>
                <p className="text-sm text-[var(--text-secondary)]">© {new Date().getFullYear()} Devisingh Rajput. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
