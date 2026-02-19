import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalMockup from '../components/TerminalMockup';
import FeatureGrid from '../components/FeatureGrid';
import ShortcutTable from '../components/ShortcutTable';
import TechSpec from '../components/TechSpec';
import Orb from '../components/Orb';
import InteractiveText from '../components/InteractiveText';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const Home = () => {
    const [copied, setCopied] = useState(false);
    const installCmd = "npm install -g zerostart-cli";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(installCmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-mesh selection:bg-blue-vibrant/30 selection:text-white">
            {/* Nav Bar */}
            <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 font-sans">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-3 pointer-events-auto shadow-xl">
                    <div className="flex items-center gap-2">
                        <Logo size={36} />
                        <span className="font-display font-bold text-xl tracking-tight text-white">ZeroStart</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-white/60 uppercase tracking-widest">
                        <a href="#features" className="hover:text-blue-vibrant transition-all">Features</a>
                        <Link to="/commands" className="hover:text-blue-vibrant transition-all">Commands</Link>
                        <Link to="/about" className="hover:text-blue-vibrant transition-all">About</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/commands"
                            className="bg-blue-vibrant text-black px-5 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-widest shadow-lg hover:shadow-blue-vibrant/20 active:scale-95"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-32 px-6" id="install">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-vibrant/5 border border-blue-vibrant/10 text-blue-vibrant text-[10px] font-bold uppercase tracking-widest"
                        >
                            <Sparkles className="w-3 h-3" />
                            Production v2.0
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white"
                            >
                                <InteractiveText>Code</InteractiveText> in <br />
                                <span className="text-gradient-blue">Seconds</span>, <br />
                                Not <InteractiveText>Minutes</InteractiveText>.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-white/70 text-lg max-w-md leading-relaxed"
                            >
                                The world's fastest developer engine to spin up and connect without breaking your flow.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="pt-4"
                        >
                            <div
                                onClick={copyToClipboard}
                                className="glass p-1 rounded-2xl flex items-center gap-4 cursor-pointer group hover:bg-white/5 transition-all border-white/5 max-w-sm w-full"
                            >
                                <div className="bg-black/40 px-4 py-3 rounded-xl flex items-center gap-3 font-mono text-sm text-blue-vibrant border border-white/5 flex-1 overflow-hidden">
                                    <TerminalIcon className="w-4 h-4 opacity-40 shrink-0" />
                                    <span className="truncate">{installCmd}</span>
                                </div>
                                <div className="pr-4 shrink-0">
                                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-all" />}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                            <Orb hue={220} hoverIntensity={0.4} backgroundColor="#000000" />
                        </div>
                        <div className="relative z-10">
                            <TerminalMockup />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <FeatureGrid />
            <ShortcutTable />
            <TechSpec />

            <Footer />
        </div>
    );
};


export default Home;
