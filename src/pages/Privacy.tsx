import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-mesh font-sans text-white">
            <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-16 flex items-center px-6">
                <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-blue-vibrant transition-all font-bold text-[11px] uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Link>
                    <div className="flex items-center gap-2">
                        <Logo size={28} />
                        <span className="font-display font-bold text-lg text-white">ZeroStart</span>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-2">
                        Privacy <span className="text-gradient-blue">Policy</span>
                    </h1>
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Updated Feb 2026</p>
                </motion.div>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-lg font-bold font-display text-white mb-3 tracking-tight">1. Data Philosophy</h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            ZeroStart is local-first. We do not collect your source code or environment variables. Your GitHub tokens are stored locally on your machine and only used to interact directly with the GitHub API.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold font-display text-white mb-3 tracking-tight">2. Telemetry</h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We use anonymous usage statistics (command success rates) to improve the engine. No personal identifying information is ever transmitted.
                        </p>
                    </section>

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-base font-bold font-display text-blue-vibrant mb-2">Our Promise</h2>
                        <p className="text-white/40 text-sm mb-0">
                            We never touch, store, or analyze your project code. Your IP is yours alone.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Privacy;
