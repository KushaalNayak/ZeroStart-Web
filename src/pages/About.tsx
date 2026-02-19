import { motion } from 'framer-motion';
import { Shield, Target, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const About = () => {
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                        The <span className="text-gradient-blue">Engine</span>
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Eliminating the configuration phase to keep developers in the flow.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <section className="glass p-8 rounded-2xl border-white/5">
                        <Target className="w-5 h-5 text-blue-vibrant mb-4" />
                        <h2 className="text-xl font-bold mb-3 font-display tracking-tight">Our Vision</h2>
                        <p className="text-white/70 leading-relaxed text-sm">
                            ZeroStart was born out of frustration. We tired of spending the first hour of every project setting up boilerplates, configuring ESLint, and wrestling with Git. We built a tool that handles the "boring stuff" so you can focus on building what matters.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-2xl border-white/5">
                            <Users className="w-5 h-5 text-blue-vibrant mb-4" />
                            <h3 className="text-lg font-bold mb-2 font-display tracking-tight">Community Driven</h3>
                            <p className="text-white/65 text-xs leading-relaxed">
                                Built by developers for developers. We're an open-source engine fueled by global feedback.
                            </p>
                        </div>
                        <div className="glass p-6 rounded-2xl border-white/5">
                            <Shield className="w-5 h-5 text-blue-vibrant mb-4" />
                            <h3 className="text-lg font-bold mb-2 font-display tracking-tight">Performance</h3>
                            <p className="text-white/65 text-xs leading-relaxed">
                                Every template is hand-picked and optimized for raw speed and minimal overhead.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
