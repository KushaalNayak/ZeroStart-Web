import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const Terms = () => {
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
                        Terms of <span className="text-gradient-blue">Service</span>
                    </h1>
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">v1.0 Agreement</p>
                </motion.div>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-lg font-bold font-display text-white mb-3 tracking-tight">1. License</h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            ZeroStart is open-source under the MIT License. You are free to use, modify, and distribute the tool for commercial and personal projects.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold font-display text-white mb-3 tracking-tight">2. Disclaimer</h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            The software is provided "as is". The developers are not responsible for any data loss or security issues resulting from its use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold font-display text-white mb-3 tracking-tight">3. Integrity</h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Users are responsible for the contents of the repositories they create. While we provide optimized templates, we advise auditing all dependencies before production.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Terms;
