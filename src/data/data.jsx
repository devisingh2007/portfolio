import { FaCode, FaServer, FaTools, FaLaptopCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaDocker, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiExpress, SiMongodb, SiPostman, SiNetlify, SiTypescript, SiMysql, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLayer } from "react-icons/bi";

// Project Images
import dellImg from "../assets/projects/dell-preview.jpg";
import godrejImg from "../assets/projects/godrej-preview.jpg";
import oyoImg from "../assets/projects/oyo-preview.jpg";
import incredImg from "../assets/projects/incred-preview.jpg";
import bulletproofImg from "../assets/projects/bulletproof-preview.jpg";
import bataImg from "../assets/projects/bata-preview.jpg";
import hack2winCert from "../assets/certificates/hack-2-win hackathon certificate.png";
import artparkCert from "../assets/certificates/ArtPark_CodeForge_Hackathon_certificate.jpg";

export const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Journey", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Hackathons", to: "hackathons" },
    { name: "Contact", to: "contact" },
];

export const heroData = {
    name: "Devisingh Rajput",
    title: "Frontend Developer & Full Stack Enthusiast",
    subtitle: "Building modern, responsive, and pixel-perfect web experiences.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
};

export const aboutData = {
    title: "About Me",
    description: "I am a Computer Engineering student passionate about building scalable web applications. With a strong foundation in Frontend Development and an eye for UI/UX, I bridge the gap between design and clean code.",
    attributes: [
        { label: "Education", value: "Computer Engineering Student" },
        { label: "Experience", value: "Fresher / Open Source Contributor" },
        { label: "Availability", value: "Open for Internships & Jobs" },
    ],
};

export const skillsData = [
    {
        category: "Frontend",
        icon: <FaLaptopCode />,
        skills: [
            {
                name: "HTML5",
                icon: <FaHtml5 color="#E34F26" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt color="#1572B6" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
                name: "JavaScript",
                icon: <FaJs color="#F7DF1E" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "React.js",
                icon: <FaReact color="#61DAFB" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name: "Next.js",
                icon: <FaReact color="#000000" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            },
            {
                name: "Redux",
                icon: <FaReact color="#764ABC" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss color="#06B6D4" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                name: "Framer Motion",
                icon: <SiFramer color="#0055FF" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
            }
        ],
    },
    {
        category: "Backend",
        icon: <FaServer />,
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs color="#339933" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Express",
                icon: <SiExpress color="#000000" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            },
            {
                name: "C++",
                icon: <FaCode color="#00599C" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            },
            {
                name: "MongoDB",
                icon: <SiMongodb color="#47A248" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "REST APIs",
                icon: <FaServer color="#C5A059" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
            }
        ],
    },
    {
        category: "Tools",
        icon: <FaTools />,
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt color="#F05032" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
            {
                name: "GitHub",
                icon: <FaGithub color="#181717" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            },
            {
                name: "VS Code",
                icon: <VscVscode color="#007ACC" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            },
            {
                name: "Vite",
                icon: <VscVscode color="#646CFF" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
            },
            {
                name: "Netlify",
                icon: <SiNetlify color="#00C7B7" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
            },
            {
                name: "Vercel",
                icon: <SiNetlify color="#000000" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
            },
            {
                name: "Postman",
                icon: <SiPostman color="#FF6C37" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
            },
            {
                name: "Figma",
                icon: <SiPostman color="#F24E1E" />,
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            }
        ],
    },
];

export const projectsData = [
    {
        id: 1,
        title: "Dell Store Clone",
        description: "A responsive clone of the Dell Store website showcasing product listings, modern UI, and clean layout structure.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/dellstore-clone-by-Devisingh.git",
        demo: "https://dellstore-clone-by-devisingh.netlify.app/",
        youtube: "https://youtu.be/UUezHJprSYA",
        image: dellImg
    },
    {
        id: 2,
        title: "Godrej Enterprises Clone",
        description: "A pixel-perfect clone of Godrej Enterprises’ official website, focusing on corporate design and responsiveness.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/godrejenterprises.com-clone-By-Devisingh.git",
        demo: "https://godrejenterprises-clone-by-devisingh.netlify.app/",
        youtube: "https://youtu.be/HoZ0sB51CPw",
        image: godrejImg
    },
    {
        id: 3,
        title: "OYO Rooms Clone",
        description: "A clone of the OYO Rooms website featuring hotel listings UI, navigation flow, and modern styling.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/Oyo-rooms.com-clone-by-Devisingh",
        demo: "https://oyo-clone-by-devisingh.netlify.app/",
        youtube: "https://youtu.be/SZEof37-s30",
        image: oyoImg
    },
    {
        id: 4,
        title: "Incred Finance Clone",
        description: "A finance website clone replicating Incred’s branding, layout structure, and professional UI design.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/Incred-finance-clone-by-Devisingh.git",
        demo: "https://incred-finance-clone-by-devisingh.netlify.app/",
        youtube: "https://youtu.be/1ANRaxBhDYA?si=Ihcj9UBX0NVkO_wR",
        image: incredImg
    },
    {
        id: 5,
        title: "Bulletproof Clone",
        description: "A modern website clone inspired by Bulletproof’s design, focusing on strong visuals and typography.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/Bulletproof-clone-by-Devisingh.git",
        demo: "https://bulletproof-clone-by-devisingh.netlify.app/",
        youtube: "https://youtu.be/Okd-xGFTSDk?si=XtMKZoYF1mRJHJJE",
        image: bulletproofImg
    },
    {
        id: 6,
        title: "Bata Clone",
        description: "A clone of the Bata website showcasing product-focused UI, clean navigation, and responsive design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/devisingh2007/Bata-clone-by-Devising.git",
        demo: "https://bata-clone-by-devising.netlify.app/",
        youtube: "https://youtu.be/tl_oHqYvuX8?si=RDuxVyJEy3vug9SB",
        image: bataImg
    },
];

export const experienceData = [
    {
        role: "Technology Job Simulation Intern",
        company: "Deloitte (Forage)",
        duration: "Dec 2025",
        mode: "Remote",
        description: "Completed a simulation involving coding fundamentals and software development workflows.",
        skills: ["Coding fundamentals", "Software development workflow"],
        certificate: "/certificates/Deloitte-internship.pdf"
    },
    {
        role: "Data Analytics Job Simulation Intern",
        company: "Deloitte (Forage)",
        duration: "Dec 2025",
        mode: "Remote",
        description: "Analyzed data sets and applied forensic technology concepts to solve business problems.",
        skills: ["Data analysis", "Forensic technology"],
        certificate: "/certificates/internship_certificate.pdf"
    },
    {
        role: "Cyber Security Job Simulation Intern",
        company: "Deloitte (Forage)",
        duration: "Nov 2025",
        mode: "Remote",
        description: "Investigated cyber threats and practiced threat analysis in a simulated corporate environment.",
        skills: ["Cyber security fundamentals", "Threat analysis"],
        certificate: "/certificates/internship3_certificate.pdf"
    }
];

export const educationData = [
    {
        level: "Bachelor of Engineering (Computer Engineering)",
        institution: "Swaminarayan College of Engineering & Technology, Kalol",
        university: "GTU",
        duration: "2025 - Present",
        status: "Semester 1 Student",
        description: "Core focus on programming, computer fundamentals, and engineering concepts.",
        details: ["Full-Time Mode", "Admission Year: 2025"],
        highlight: "Core focus on programming, computer fundamentals, and engineering concepts"
    },
    {
        level: "Higher Secondary Education (Class 12 – Science)",
        institution: "GSEB Board",
        duration: "March 2025",
        status: "Passed",
        description: "Focused on analytical thinking and problem-solving in Mathematics, Physics, Chemistry, and Computer.",
        details: [
            "Total Marks: 509 / 650",
            "Percentile Rank: 78.41",
            "Grade: B1"
        ],
        highlight: "Focused on analytical thinking and problem-solving"
    },
    {
        level: "Secondary Education (Class 10)",
        institution: "GSEB Board",
        duration: "March 2023",
        status: "Passed",
        description: "Strong foundation in Mathematics, Science, and Computer Education.",
        details: [
            "Total Marks: 487 / 600",
            "Percentile Rank: 93.86",
            "Grade: A2"
        ],
        highlight: "Strong foundation in Mathematics, Science, and Computer Education"
    }
];

export const contactData = {
    email: "devisinghrajput.cg@gmail.com",
    phone: "+91 73836 29107",
    address: "Ahmedabad, Gujarat – 382418, India",
};

export const hackathonsData = [
    {
        id: 1,
        title: "ArtPark CodeForge Hackathon",
        date: "2024",
        role: "Frontend & AI Integration",
        description: "Participated in the CodeForge Hackathon organized by ArtPark (IISc). Developed an innovative solution focusing on robotics/AI integration with a seamless user interface. Selected for the final round.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        link: "/src/assets/certificates/ArtPark_CodeForge_Hackathon_certificate.jpg",
        certificate: artparkCert,
        result: "Finalist (Last Round)"
    },
    {
        id: 2,
        title: "HackRust 1.0 Hackathon",
        date: "2024",
        role: "Systems & Web Developer",
        description: "Competed in the first edition of HackRust, focusing on building high-performance applications using Rust and modern web technologies. Achieved finalist status among numerous teams.",
        tech: ["Rust", "WebAssembly", "React"],
        link: "/src/assets/certificates/HackRust_1.0_Hackathon_certificate.pdf",
        certificate: "/certificates/HackRust_1.0_Hackathon_certificate.pdf",
        result: "Finalist (Last Round)"
    },
    {
        id: 3,
        title: "Hack-2-Win Hackathon",
        date: "2024",
        role: "Frontend Developer",
        description: "A competitive hackathon focused on rapid prototyping and secure application development. Built a robust frontend within limited time, reaching the final evaluation stage.",
        tech: ["HTML", "CSS", "JavaScript", "Security Basics"],
        link: "/src/assets/certificates/hack-2-win hackathon certificate.png",
        certificate: hack2winCert,
        result: "Finalist (Last Round)"
    }
];
