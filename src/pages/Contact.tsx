import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-mesh font-sans text-white">
            <div className="fixed top-0 w-full z-50 glass border-b border-white/5 h-20 flex items-center px-6 md:px-12">
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-blue-vibrant transition-colors group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Logo size={28} />
                        <span className="font-display font-bold text-lg tracking-tight">ZeroStart</span>
                    </div>
                </div>
            </div>

            <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-left">
                            Ready to <span className="text-gradient-blue text-left">Build?</span>
                        </h1>
                        <p className="text-white/70 text-xl leading-relaxed max-w-lg">
                            We've replaced manual configuration with pure speed. Send us a message if you encounter any issues or have template suggestions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 pt-8">
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-vibrant/10">
                                    <Sparkles className="w-5 h-5 text-blue-vibrant" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Instant Support</h3>
                                    <p className="text-sm text-white/65 leading-relaxed">Our average response time for bug reports is under 24 hours.</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-vibrant/10">
                                    <Terminal className="w-5 h-5 text-blue-vibrant" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">CLI First</h3>
                                    <p className="text-sm text-white/65 leading-relaxed">ZeroStart is built for the terminal. No overhead, just code.</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-vibrant/10">
                                    <Code2 className="w-5 h-5 text-blue-vibrant" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Modern Stack</h3>
                                    <p className="text-sm text-white/65 leading-relaxed">Access the latest React, Vite, and C++ templates instantly.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-10 rounded-3xl border-white/10 h-fit sticky top-32"
                    >
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const name = formData.get('name');
                            const email = formData.get('email');
                            const message = formData.get('message');
                            const subject = encodeURIComponent(`ZeroStart Inquiry from ${name}`);
                            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                            window.location.href = `mailto:kushaalbadavath@gmail.com?subject=${subject}&body=${body}`;
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Name</label>
                                    <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-vibrant/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Email</label>
                                    <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-vibrant/50 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Message</label>
                                <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-vibrant/50 transition-colors min-h-[150px]" placeholder="How can we help?" />
                            </div>
                            <button type="submit" className="w-full bg-blue-vibrant text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
