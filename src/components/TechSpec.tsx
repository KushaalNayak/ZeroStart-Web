import { motion } from 'framer-motion';
import { Terminal, GitBranch, Cpu, ShieldCheck } from 'lucide-react';

const TechSpec = () => {
    const specs = [
        { icon: <Terminal className="w-5 h-5" />, label: "Runtime", value: "Node.js 18+" },
        { icon: <GitBranch className="w-5 h-5" />, label: "VCS", value: "Git Global" },
        { icon: <ShieldCheck className="w-5 h-5" />, label: "Auth", value: "GitHub PAT" },
        { icon: <Cpu className="w-5 h-5" />, label: "OS", value: "Multi-Platform" },
    ];

    return (
        <section className="py-32 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">System Requirements</h2>
                    <p className="text-white/65 text-base mt-2">
                        ZeroStart is lightweight and runs on any modern dev environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            className="glass p-8 rounded-2xl border-white/5 flex flex-col group hover:border-blue-vibrant/20 transition-all"
                        >
                            <div className="text-blue-vibrant mb-6">
                                {spec.icon}
                            </div>

                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{spec.label}</p>
                                <p className="text-xl font-bold text-white font-display tracking-tight">{spec.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSpec;
