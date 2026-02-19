import { motion } from 'framer-motion';
import { Github, ArrowLeft, Package, Zap, GitBranch, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const GITHUB_URL = 'https://github.com/KushaalNayak/ZeroStart-cli';
const NPM_URL = 'https://www.npmjs.com/package/zerostart-cli';

const timeline = [
    { date: 'Jan 2025', label: 'Initial release', desc: 'Basic project scaffolding for C++, Java, Python.' },
    { date: 'Mar 2025', label: 'Web templates added', desc: 'React, TypeScript, and HTML/CSS templates shipped.' },
    { date: 'Jun 2025', label: 'GitHub auto-setup', desc: 'Automated repo creation and remote linking.' },
    { date: 'Oct 2025', label: 'Vercel deploy', desc: 'One-command Vercel deployment flow added.' },
    { date: 'Feb 2026', label: 'v2.0 — Wizard rewrite', desc: 'Interactive CLI wizard with Back button and smarter flows.' },
];

const stack = [
    { icon: <Package className="w-4 h-4" />, label: 'Node.js CLI', desc: 'Built with Node.js and published on npm.' },
    { icon: <GitBranch className="w-4 h-4" />, label: 'GitHub API', desc: 'Repos created and linked automatically via GitHub API.' },
    { icon: <Globe className="w-4 h-4" />, label: 'Vercel CLI', desc: 'Optional one-click deploy via Vercel CLI integration.' },
    { icon: <Zap className="w-4 h-4" />, label: 'Online GDB', desc: 'DSA projects launch directly in browser compiler.' },
];

const About = () => {
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

            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
                        About <span className="text-gradient-blue">ZeroStart</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                        A CLI tool built out of frustration with slow, repetitive project setup. Skip the config, start building.
                    </p>
                    <div className="flex gap-3 pt-2">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                        >
                            <Github className="w-4 h-4" />
                            View Source
                        </a>
                        <a
                            href={NPM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                        >
                            <Package className="w-4 h-4" />
                            npm package
                        </a>
                    </div>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 border border-white/5 space-y-4"
                >
                    <h2 className="text-xl font-bold font-display text-white">The Story</h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Every new project used to start the same way — copying config files, initializing Git, setting up ESLint, creating a new GitHub repo, pushing the first commit. Easily 15–20 minutes before writing a single line of actual code.
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                        ZeroStart was built to kill that friction. One command, pick a template, and you're in your editor with a live project — GitHub repo created, dependencies installed, and optionally deployed.
                    </p>
                </motion.div>

                {/* How it works */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold font-display text-white">How It Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stack.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass rounded-xl p-5 border border-white/5 hover:border-blue-vibrant/20 transition-all"
                            >
                                <div className="flex items-center gap-2 text-blue-vibrant mb-2">
                                    {s.icon}
                                    <span className="font-bold text-sm text-white">{s.label}</span>
                                </div>
                                <p className="text-white/45 text-sm">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold font-display text-white">Timeline</h2>
                    <div className="relative border-l border-white/10 pl-6 space-y-8">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative"
                            >
                                <div className="absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full bg-blue-vibrant/40 border border-blue-vibrant" />
                                <span className="text-[10px] font-bold text-blue-vibrant uppercase tracking-widest">{item.date}</span>
                                <h3 className="text-white font-bold text-sm mt-0.5">{item.label}</h3>
                                <p className="text-white/45 text-sm mt-0.5">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Built by */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 border border-white/5 flex items-center justify-between gap-6 flex-wrap"
                >
                    <div>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Built by</p>
                        <h3 className="text-white font-bold text-lg font-display">Kushaal Badavath</h3>
                        <p className="text-white/45 text-sm mt-1">Developer @ Zero-One Devs</p>
                    </div>
                    <a
                        href="https://github.com/KushaalNayak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all"
                    >
                        <Github className="w-4 h-4" />
                        @KushaalNayak
                    </a>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
