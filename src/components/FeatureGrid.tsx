import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Zap, RotateCcw, ShieldCheck, Trash2, Cpu, Rocket, Layout } from 'lucide-react';

const FeatureGrid = () => {
    const [mode, setMode] = useState<'cp' | 'web'>('cp');

    const cpFeatures = [
        {
            title: "Multi-Language",
            desc: "Native support for C++, Java, and Python environments.",
            icon: <Code2 className="w-5 h-5 text-blue-vibrant" />,
            tag: "CPP/PY/JV"
        },
        {
            title: "Instant Hook",
            desc: "Instantly spins up a DSA practice workspace with smart templates.",
            icon: <Cpu className="w-5 h-5 text-blue-vibrant" />,
            tag: "Speed"
        },
        {
            title: "Auto-Test",
            desc: "Launches Online GDB instantly for logic verification.",
            icon: <Rocket className="w-5 h-5 text-blue-vibrant" />,
            tag: "Smart"
        }
    ];

    const webFeatures = [
        {
            title: "Frameworks",
            desc: "Native boilerplates for React, Vite, and Tailwind.",
            icon: <Layout className="w-5 h-5 text-blue-vibrant" />,
            tag: "Modern"
        },
        {
            title: "Pre-Configured",
            desc: "Tailwind and ESLint come ready-to-go, no setup required.",
            icon: <Zap className="w-5 h-5 text-blue-vibrant" />,
            tag: "Zero-Set"
        },
        {
            title: "Cloud-Sync",
            desc: "One-click deployment prompts for Vercel integration.",
            icon: <Globe className="w-5 h-5 text-blue-vibrant" />,
            tag: "Cloud"
        }
    ];

    const magicFeatures = [
        {
            title: "Back Navigation",
            desc: "Easily return to previous steps in the wizard.",
            icon: <RotateCcw className="w-5 h-5 text-blue-vibrant" />
        },
        {
            title: "Secure Auth",
            desc: "Integrated GitHub PAT flow with guided setup.",
            icon: <ShieldCheck className="w-5 h-5 text-blue-vibrant" />
        },
        {
            title: "Optimized Core",
            desc: "Only the essential modern templates included.",
            icon: <Trash2 className="w-5 h-5 text-blue-vibrant" />
        }
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="features">
            <div className="max-w-6xl mx-auto text-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight">Adaptive Workflow</h2>
                    <p className="text-white/65 text-lg max-w-xl mx-auto font-medium">
                        ZeroStart switches focus based on what you're building today.
                    </p>

                    <div className="flex justify-center mt-10">
                        <div className="bg-white/5 p-1 rounded-full border border-white/5 flex items-center relative">
                            <button
                                onClick={() => setMode('cp')}
                                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all z-10 ${mode === 'cp' ? 'text-black' : 'text-white/40 hover:text-white'}`}
                            >
                                <Cpu className="w-3.5 h-3.5" />
                                CP / Student
                                {mode === 'cp' && (
                                    <motion.div
                                        layoutId="activeTabSimple"
                                        className="absolute inset-0 bg-blue-vibrant rounded-full -z-10 shadow-lg"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                            <button
                                onClick={() => setMode('web')}
                                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all z-10 ${mode === 'web' ? 'text-black' : 'text-white/40 hover:text-white'}`}
                            >
                                <Globe className="w-3.5 h-3.5" />
                                Web Dev
                                {mode === 'web' && (
                                    <motion.div
                                        layoutId="activeTabSimple"
                                        className="absolute inset-0 bg-blue-vibrant rounded-full -z-10 shadow-lg"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {(mode === 'cp' ? cpFeatures : webFeatures).map((feature, idx) => (
                                <div
                                    key={`${mode}-${idx}`}
                                    className="glass p-8 rounded-2xl border-white/5 group hover:border-blue-vibrant/20 transition-all"
                                >
                                    <div className="bg-blue-vibrant/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-vibrant">
                                        {feature.icon}
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-xl font-bold font-display tracking-tight">{feature.title}</h3>
                                        <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-blue-vibrant/5 text-blue-vibrant/60 border border-blue-vibrant/10 font-bold">
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <p className="text-white/65 leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-display tracking-tight">Standard Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {magicFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center transition-all"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-blue-vibrant/5 text-blue-vibrant">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 font-display tracking-tight">{feature.title}</h3>
                                <p className="text-white/65 text-sm leading-relaxed max-w-[220px]">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
