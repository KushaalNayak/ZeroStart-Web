import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal as TerminalIcon, Github, ExternalLink, Star, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalMockup from '../components/TerminalMockup';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const GITHUB_URL = 'https://github.com/KushaalNayak/ZeroStart-cli';
const NPM_URL = 'https://www.npmjs.com/package/zerostart-cli';

const Home = () => {
    const [copied, setCopied] = useState(false);
    const [copiedRun, setCopiedRun] = useState(false);
    const [npmDownloads, setNpmDownloads] = useState<string | null>(null);
    const installCmd = 'npm install -g zerostart-cli';
    const runCmd = 'zerostart';

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        
        Promise.all([
            fetch(`https://api.npmjs.org/downloads/point/2025-01-27:${today}/zerostart-cli`).then(r => r.json()).catch(() => ({downloads: 800})),
            fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
                method: 'POST',
                headers: { 'Accept': 'application/json;api-version=3.0-preview.1', 'Content-Type': 'application/json' },
                body: JSON.stringify({ filters: [{ criteria: [{ filterType: 7, value: 'zerostart.zerostart-vscode' }] }], flags: 2 })
            }).then(r => r.json()).catch(() => null)
        ]).then(([npmData, vsData]) => {
            let n = npmData.downloads || 800;
            let v = 50;
            if (vsData?.results?.[0]?.extensions?.[0]) {
                const ext = vsData.results[0].extensions[0];
                const stat = ext.statistics?.find((s: any) => s.statisticName === 'install');
                if (stat) v = stat.value;
            }
            const total = n + v;
            if (total >= 1000) {
                setNpmDownloads((total / 1000).toFixed(1) + 'K');
            } else {
                setNpmDownloads(String(total));
            }
        });
    }, []);

    const copy = (text: string, setter: (v: boolean) => void) => {
        navigator.clipboard.writeText(text);
        setter(true);
        setTimeout(() => setter(false), 2000);
    };

    const commands = [
        { cmd: 'zerostart ai [prompt]', desc: 'The AI Architect: Build a project from a simple description.' },
        { cmd: 'zerostart', desc: 'Launch the interactive project wizard' },
        { cmd: 'zerostart dsa-cpp', desc: 'Create a C++ DSA practice project' },
        { cmd: 'zerostart web-react', desc: 'Scaffold a React web app' },
        { cmd: 'zerostart help', desc: 'Show all available commands' },
    ];

    const reasons = [
        { icon: '🤖', title: 'AI Architect CLI', desc: 'Scaffold more than just files. Describe your project in plain English, and our AI Architect intelligently generates your folder structure, core logic, and a project roadmap.', featured: true },
        { icon: '✨', title: 'Smart Practice Interface', desc: 'Your workspace, your rules. When you start a DSA project, ZeroStart gives you a choice: An Online Compiler (Browser) for quick testing or a Local Terminal (CMD) for high-performance coding. Or both.', featured: true },
        { icon: '⚡', title: 'Zero config', desc: 'No boilerplate hunting. One command and you\'re coding.' },
        { icon: '🗂️', title: '6 templates built-in', desc: 'React, TypeScript, HTML/CSS, C++, Java, Python — all ready.' },
        { icon: '🔗', title: 'GitHub auto-setup', desc: 'Repo created, code pushed, remote linked — automatically.' },
        { icon: '🚀', title: 'Deploy in seconds', desc: 'Vercel deployment built right into the CLI flow.' },
    ];

    return (
        <div className="min-h-screen bg-mesh selection:bg-blue-vibrant/30 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center bg-black/70 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                        <Logo size={32} />
                        <span className="font-display font-bold text-lg tracking-tight text-white">ZeroStart</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                        <a href="#quickstart" className="hover:text-blue-vibrant transition-colors">Quick Start</a>
                        <a href="#commands" className="hover:text-blue-vibrant transition-colors">Commands</a>
                        <Link to="/changelog" className="hover:text-blue-vibrant transition-colors">Updates</Link>
                        <Link to="/about" className="hover:text-blue-vibrant transition-colors">About</Link>
                    </div>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-widest"
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                </div>
            </nav>

            {/* ── 1. HERO ── */}
            <section className="pt-44 pb-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-vibrant/5 border border-blue-vibrant/20 text-blue-vibrant text-[12px] font-bold tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    >
                        {npmDownloads ? `⭐ Trusted by ${npmDownloads} users on NPM & VS Code` : 'Loading...'}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white"
                    >
                        The <span className="text-gradient-blue focus-in">smartest & fastest</span> way to<br />
                        <span>start a project — Powered by AI.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        ZeroStart CLI scaffolds, connects GitHub, and optionally deploys — and now features <span className="text-blue-400 font-bold">AI Architect</span> for intelligent project planning.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
                    >
                        <a
                            href="#quickstart"
                            className="bg-blue-vibrant text-black px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg"
                        >
                            Get Started
                        </a>
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
                        >
                            <Github className="w-4 h-4" />
                            View on GitHub
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── 2. QUICK START ── */}
            <section id="quickstart" className="py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-display text-white">Quick Start</h2>
                        <p className="text-white/45 text-sm mt-2">Get up and running in seconds.</p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-vibrant/10 border border-blue-vibrant/30 text-blue-vibrant text-[12px] font-bold shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-vibrant animate-pulse" />
                            NEW: Use 'zerostart ai' to build your vision.
                        </motion.div>
                    </div>

                    <div className="space-y-3">
                        <div
                            onClick={() => copy(installCmd, setCopied)}
                            className="group flex items-center justify-between gap-4 bg-black/60 border border-white/8 hover:border-blue-vibrant/30 rounded-xl px-5 py-4 cursor-pointer transition-all"
                        >
                            <div className="flex items-center gap-3 font-mono text-sm overflow-hidden">
                                <span className="text-white/30 shrink-0">$</span>
                                <span className="text-blue-vibrant truncate">{installCmd}</span>
                            </div>
                            <div className="shrink-0 text-white/20 group-hover:text-white/50 transition-colors">
                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </div>
                        </div>

                        <div
                            onClick={() => copy(runCmd, setCopiedRun)}
                            className="group flex items-center justify-between gap-4 bg-black/60 border border-white/8 hover:border-blue-vibrant/30 rounded-xl px-5 py-4 cursor-pointer transition-all"
                        >
                            <div className="flex items-center gap-3 font-mono text-sm overflow-hidden">
                                <span className="text-white/30 shrink-0">$</span>
                                <span className="text-blue-vibrant">{runCmd}</span>
                            </div>
                            <div className="shrink-0 text-white/20 group-hover:text-white/50 transition-colors">
                                {copiedRun ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </div>
                        </div>

                        <p className="text-center text-white/25 text-xs pt-1">Click any line to copy</p>
                    </div>
                </div>
            </section>

            {/* ── 3. TERMINAL DEMO ── */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-display text-white">See It In Action</h2>
                        <p className="text-white/45 text-sm mt-2">One command, full project setup.</p>
                    </div>
                    <TerminalMockup />
                </div>
            </section>

            {/* ── 4. COMMANDS TABLE ── */}
            <section id="commands" className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-display text-white">Commands</h2>
                        <p className="text-white/45 text-sm mt-2">Everything you need, nothing you don't.</p>
                    </div>

                    <div className="glass rounded-xl overflow-hidden border border-white/5">
                        <div className="grid grid-cols-2 px-5 py-3 border-b border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/30">
                            <span>Command</span>
                            <span>Description</span>
                        </div>
                        {commands.map((item, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-2 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors items-center"
                            >
                                <code className="font-mono text-sm text-blue-vibrant">{item.cmd}</code>
                                <span className="text-white/60 text-sm">{item.desc}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-6">
                        <Link
                            to="/commands"
                            className="inline-flex items-center gap-2 text-blue-vibrant text-sm font-bold hover:opacity-80 transition-opacity"
                        >
                            View all commands <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 5. WHY ZEROSTART ── */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-display text-white">Why ZeroStart?</h2>
                        <p className="text-white/45 text-sm mt-2">Traditional setup is slow and repetitive. ZeroStart fixes that.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {reasons.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`glass rounded-xl p-6 border transition-all ${r.featured ? 'border-blue-vibrant/30 bg-blue-vibrant/5 shadow-[0_0_25px_rgba(59,130,246,0.1)]' : 'border-white/5 hover:border-blue-vibrant/20'}`}
                            >
                                <div className="text-2xl mb-4">{r.icon}</div>
                                <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                                <p className="text-white/45 text-sm leading-relaxed">{r.desc}</p>
                                {r.featured && (
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <span className="text-[10px] font-bold text-blue-vibrant uppercase tracking-widest bg-blue-vibrant/10 px-2 py-1 rounded">Featured AI Tech</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5.5. VS CODE EXTENSION ── */}
            <section className="py-24 px-6 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-vibrant/5 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 space-y-8 relative z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-vibrant/10 border border-blue-vibrant/20 text-blue-vibrant text-[11px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <Star className="w-3 h-3" /> New Release
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
                            ZeroStart is now on <br className="hidden md:block" />
                            <span className="text-gradient-blue whitespace-nowrap">VS Code</span>
                        </h2>
                        
                        <p className="text-white/50 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            Bring the full power of the ZeroStart CLI directly into your editor. Generate projects, manage templates, and run commands without ever leaving your IDE workflow.
                        </p>
                        
                        <div className="pt-2">
                            <a
                                href="https://marketplace.visualstudio.com/items?itemName=zerostart.zerostart-vscode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-blue-vibrant text-black px-8 py-4 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                            >
                                <div className="flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Install Extension
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full relative z-10 md:[perspective:1000px]">
                        <div className="relative group transition-transform duration-700 transform-gpu md:[transform:rotateY(-8deg)_rotateX(4deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)]">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-vibrant/0 via-blue-vibrant/20 to-blue-vibrant/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="glass rounded-3xl border border-white/10 p-2 relative bg-black/40 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-3xl hover:border-blue-vibrant/30 transition-colors">
                                <img 
                                    src="/logo.png" 
                                    alt="ZeroStart VS Code Extension" 
                                    className="w-full h-auto rounded-2xl border border-white/5 relative z-10 max-h-[400px] object-contain bg-[#0F111A] sm:p-8 p-4 shadow-inner" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. DEV LINKS ── */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-2xl font-bold font-display text-white">Get Involved</h2>
                    <p className="text-white/45 text-sm">Open source. Built for developers.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
                        >
                            <Github className="w-4 h-4" />
                            Star on GitHub
                        </a>
                        <a
                            href={NPM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
                        >
                            <TerminalIcon className="w-4 h-4" />
                            View on npm
                        </a>
                        <a
                            href="https://marketplace.visualstudio.com/items?itemName=zerostart.zerostart-vscode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-blue-vibrant/10 hover:bg-blue-vibrant/20 border border-blue-vibrant/30 text-blue-vibrant px-6 py-3 rounded-full text-sm font-bold transition-all"
                        >
                            <Download className="w-4 h-4" />
                            Install for VS Code
                        </a>
                    </div>

                    {npmDownloads && (
                        <p className="text-white/25 text-xs flex items-center justify-center gap-1.5 pt-4">
                            ⭐ Trusted by {npmDownloads} users on NPM & VS Code
                        </p>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
