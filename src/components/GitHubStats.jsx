import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaExclamationTriangle, FaTrophy, FaFire } from "react-icons/fa";
import Skeleton from "./Skeleton";

const _motion = motion;

class GitHubCalendarErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("GitHubCalendar Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-[155px] text-[var(--text-secondary)] gap-2">
                    <FaExclamationTriangle className="text-yellow-500 text-3xl" />
                    <p>GitHub Calendar unavailable (Component Error).</p>
                </div>
            );
        }

        return this.props.children;
    }
}

const GitHubStats = () => {
    const username = "devisingh2007";
    const [stats, setStats] = useState(null);
    const [topLanguages, setTopLanguages] = useState([]);
    const [featuredRepos, setFeaturedRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isDark, setIsDark] = useState(!document.documentElement.classList.contains("light-theme"));

    // Custom theme for GitHub Calendar (Neon Cyberpunk Palette & standard light)
    const calendarTheme = {
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(!document.documentElement.classList.contains("light-theme"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchGitHubData = async () => {
            try {
                if (isMounted) setLoading(true);

                // Fetch User Data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error("User API failed");
                const userData = await userResponse.json();

                // Fetch Repos Data (Top 100 recent)
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
                if (!reposResponse.ok) throw new Error("Repos API failed");
                const reposData = await reposResponse.json();

                // Process Data
                const starsCount = Array.isArray(reposData)
                    ? reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
                    : 0;

                // Calculate Top Languages
                const languageMap = {};
                reposData.forEach(repo => {
                    if (repo.language) {
                        languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
                    }
                });

                const totalReposWithLanguage = Object.values(languageMap).reduce((a, b) => a + b, 0);
                const languages = Object.entries(languageMap)
                    .map(([lang, count]) => ({
                        name: lang,
                        count,
                        percentage: ((count / totalReposWithLanguage) * 100).toFixed(1)
                    }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 5); // Start with top 5

                // Featured Repos (Sorted by stars)
                const topRepos = reposData
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 3); // Top 3

                if (isMounted) {
                    setStats({
                        repos: userData?.public_repos || 0,
                        followers: userData?.followers || 0,
                        stars: starsCount,
                        public_gists: userData?.public_gists || 0,
                    });
                    setTopLanguages(languages);
                    setFeaturedRepos(topRepos);
                    setError(false);
                }
            } catch (err) {
                console.error("GitHub API Error:", err);
                if (isMounted) setError(true);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchGitHubData();
        return () => { isMounted = false; };
    }, [username]);

    const statCards = [
        { label: "Repositories", value: stats?.repos, icon: <FaCodeBranch className="text-[#58a6ff]" /> }, // Blue
        { label: "Total Stars", value: stats?.stars, icon: <FaStar className="text-[#e3b341]" /> }, // Gold
        { label: "Followers", value: stats?.followers, icon: <FaUsers className="text-[#8957e5]" /> }, // Purple
        { label: "Contributions", value: "Active", icon: <FaFire className="text-[#d2a8ff]" /> }, // Pinkish
    ];

    if (error) {
        return (
            <div className="w-full text-center py-10 text-[var(--text-secondary)]">GitHub Data Unavailable</div>
        );
    }

    return (
        <section className="py-20 w-full flex flex-col items-center relative z-10 px-4 overflow-hidden">

            {/* Decorative Background Elements - Optimized */}
            <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full pointer-events-none mix-blend-screen filter blur-3xl opacity-30" />
            <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-500/10 rounded-full pointer-events-none mix-blend-screen filter blur-3xl opacity-30" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#58a6ff] via-[#8957e5] to-[#58a6ff]">
                    GitHub Activity <br className="md:hidden" /> & Open Source
                </h3>
                <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
                    Visualizing my coding journey, open-source contributions, and technical consistency.
                </p>
            </motion.div>

            {/* Main Dashboard Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 px-4">

                {/* 1. Stats Row (Full Width on Mobile, Top Row on Desktop) */}
                <div className="col-span-1 md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {statCards.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-[var(--bg-panel)]/80 backdrop-blur-md border border-[var(--text-secondary)]/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[var(--accent-color)]/50 transition-all shadow-lg"
                        >
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                                {loading ? <div className="h-8 w-12 bg-white/10 animate-pulse rounded" /> : stat.value}
                            </h4>
                            <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Calendar (Spans 8 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-8 bg-[var(--bg-panel)]/80 backdrop-blur-md border border-[var(--text-secondary)]/20 p-6 rounded-2xl shadow-xl flex flex-col justify-center overflow-hidden"
                >
                    <h5 className="text-[var(--text-primary)] font-bold mb-6 flex items-center gap-2">
                        <FaGithub /> Contribution Graph
                    </h5>

                    {/* Calendar Wrapper */}
                    <div className="w-full overflow-x-auto custom-scrollbar">
                        <div className="min-w-[700px]">
                            {loading ? (
                                <Skeleton height="150px" width="100%" />
                            ) : (
                                <GitHubCalendarErrorBoundary>
                                    <GitHubCalendar
                                        username={username}
                                        colorScheme={isDark ? "dark" : "light"}
                                        theme={calendarTheme}
                                        fontSize={12}
                                        blockSize={12}
                                        blockMargin={4}
                                    />
                                </GitHubCalendarErrorBoundary>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* 3. Top Languages (Spans 4 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-4 bg-[var(--bg-panel)]/80 backdrop-blur-md border border-[var(--text-secondary)]/20 p-6 rounded-2xl shadow-xl"
                >
                    <h5 className="text-[var(--text-primary)] font-bold mb-6 flex items-center gap-2">
                        <FaCodeBranch /> Top Languages
                    </h5>
                    <div className="space-y-4">
                        {loading ? (
                            Array(4).fill(0).map((_, i) => <Skeleton key={i} height="8px" width="100%" className="mb-4" />)
                        ) : (
                            topLanguages.map((lang, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
                                        <span className="font-semibold text-[var(--text-primary)]">{lang.name}</span>
                                        <span>{lang.percentage}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full rounded-full bg-gradient-to-r from-[#238636] to-[#2ea043]"
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>

                {/* 4. Featured Repositories (Full Width Grid) */}
                <div className="col-span-1 md:col-span-12 mt-4">
                    <h5 className="text-[var(--text-primary)] font-bold mb-6 pl-2 flex items-center gap-2">
                        <FaTrophy className="text-[#e3b341]" /> Top Starred Repositories
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loading ? (
                            Array(3).fill(0).map((_, i) => <Skeleton key={i} height="120px" />)
                        ) : (
                            featuredRepos.map((repo, idx) => (
                                <motion.a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="block p-5 rounded-xl bg-[var(--bg-panel)] border border-[var(--text-secondary)]/20 hover:border-[var(--accent-color)]/50 group transition-all"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <FaCodeBranch className="text-[var(--text-secondary)] group-hover:text-[#58a6ff] transition-colors" />
                                            <span className="font-bold text-[#58a6ff] truncate max-w-[150px]">{repo.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                                            <FaStar className="text-[#e3b341]" />
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 h-8 mb-4">
                                        {repo.description || "No description provided."}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#238636" }}></span>
                                        {repo.language || "Code"}
                                    </div>
                                </motion.a>
                            ))
                        )}
                    </div>
                </div>

                {/* 5. Trophies Image (Direct Embed) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-12 mt-6 flex justify-center overflow-x-auto"
                >
                    <img
                        src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${isDark ? "darkhub" : "flat"}&no-frame=true&no-bg=true&margin-w=15&margin-h=15`}
                        alt="GitHub Trophies"
                        className="h-28 md:h-32 opacity-90 hover:opacity-100 transition-opacity"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default GitHubStats;
