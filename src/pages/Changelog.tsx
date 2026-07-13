import { motion } from 'framer-motion';
import { ArrowLeft, GitCommit, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const releases = [
    {
        version: 'v0.1.0',
        date: 'July 2026',
        badge: 'Latest',
        updates: [
            { title: 'Interactive Workspace Wizard', desc: 'Introduced "zerostart" / "zerostart init [name]" to launch a step-by-step interactive wizard configuring name, framework, TS, package manager, git, and add-ons.' },
            { title: 'Modular Feature Adder', desc: 'Added "zerostart add <module>" to dynamically install and auto-configure eslint, prettier, tailwind, docker, github-actions, prisma, and shadcn non-interactively.' },
            { title: 'Environment Diagnostics ("doctor")', desc: 'Run "zerostart doctor" to audit Node.js, package managers, Git, Docker, and VS Code configurations, with quick fix links.' },
            { title: 'Static Project Analyzer ("inspect")', desc: 'Run "zerostart inspect" to scan your workspace directory for configuration files and suggest potential developer tool optimizations.' }
        ]
    },
    {
        version: 'v0.0.50',
        date: 'June 2026',
        updates: [
            { title: 'Security Upgrade - Local Git Configurations', desc: 'Completely overhauled the GitHub CLI initialization flow. Personal Access Tokens (PATs) are now passed directly during the git push command rather than being embedded in the remote URL. This guarantees that your token is never accidentally left behind in plain text inside the .git/config file.' },
            { title: 'Enhanced API Reliability', desc: 'Added strict length validators for GitHub repository topics. Project tags and languages are now smartly truncated to the 35-character limit, preventing the GitHub API from silently rejecting the initialization process for longer tech-stack names.' },
            { title: 'Better Debugging & Error Logs', desc: 'Upgraded internal error reporting to accurately identify and log GitHub API failures. Instead of silently skipping steps, developers will now receive clear, actionable feedback if an authentication or network error occurs during remote setup.' },
            { title: 'General CLI Polish', desc: 'Resolved all outstanding strict TypeScript linting warnings and optimized internal imports for a slightly leaner build.' }
        ]
    },
    {
        version: 'v0.0.40',
        date: 'May 2026',
        updates: [
            { title: 'AI Architect Integration', desc: 'Added the "zerostart ai" command, allowing you to describe your project in plain English to automatically scaffold complex architectures.' },
            { title: 'Vercel Deployment Integration', desc: 'Added one-command Vercel deployment flow. The CLI now connects your Vercel account and deploys directly from your terminal.' }
        ]
    },
    {
        version: 'v0.0.30',
        date: 'March 2026',
        updates: [
            { title: 'Automated GitHub Setup', desc: 'The CLI now automatically creates GitHub repositories and links them to your local project, pushing your initial commit without any manual setup.' },
            { title: 'VS Code Extension', desc: 'Released the official ZeroStart VS Code Extension for a fully integrated GUI experience.' }
        ]
    },
    {
        version: 'v0.0.20',
        date: 'January 2026',
        updates: [
            { title: 'Web Framework Templates', desc: 'Shipped official templates for React, Vite, TypeScript, and standard HTML/CSS setups.' },
            { title: 'Interactive Wizard Redesign', desc: 'Rewrote the interactive CLI wizard with improved navigation flows and better prompt clarity.' }
        ]
    },
    {
        version: 'v0.0.10',
        date: 'December 2025',
        updates: [
            { title: 'Initial Release', desc: 'First public release featuring basic project scaffolding for C++, Java, and Python projects.' },
            { title: 'Local Terminal vs Online GDB', desc: 'Added support for selecting execution environment (Local CMD vs Browser Compiler) for DSA templates.' }
        ]
    }
];

const Changelog = () => {
    return (
        <div className="min-h-screen bg-mesh font-sans text-white">

            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-16 flex items-center px-6">
                <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-blue-vibrant transition-colors font-bold text-[11px] uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Link>
                    <div className="flex items-center gap-2">
                        <Logo size={28} />
                        <span className="font-display font-bold text-lg text-white">ZeroStart</span>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
                        <span className="text-gradient-blue">Changelog</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                        Keep track of the latest updates, improvements, and bug fixes to the ZeroStart CLI.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-vibrant/50 before:to-transparent">
                    {releases.map((release, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-blue-vibrant bg-[#0F111A] text-blue-vibrant absolute left-0 md:left-1/2 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <GitCommit className="w-4 h-4" />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 glass p-6 rounded-2xl border border-white/5 hover:border-blue-vibrant/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-2xl font-display font-bold text-white">{release.version}</h2>
                                    {release.badge && (
                                        <span className="px-2 py-0.5 rounded-full bg-blue-vibrant/10 border border-blue-vibrant/20 text-blue-vibrant text-[10px] font-bold uppercase tracking-widest">
                                            {release.badge}
                                        </span>
                                    )}
                                </div>
                                <time className="block mb-6 text-[11px] font-bold text-blue-vibrant/60 uppercase tracking-widest">{release.date}</time>
                                
                                <div className="space-y-5">
                                    {release.updates.map((update, uIdx) => (
                                        <div key={uIdx} className="space-y-1.5">
                                            <h3 className="flex items-start gap-2 text-sm font-bold text-white">
                                                <CheckCircle2 className="w-4 h-4 text-blue-vibrant/70 shrink-0 mt-0.5" />
                                                {update.title}
                                            </h3>
                                            <p className="text-sm text-white/50 pl-6 leading-relaxed">
                                                {update.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Changelog;
