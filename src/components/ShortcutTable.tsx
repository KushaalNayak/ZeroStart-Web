import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ShortcutTable = () => {
    const categories = [
        { name: "DSA Practice", commands: "dsa-py, dsa-java, dsa-cpp" },
        { name: "Web Apps", commands: "web-react, web-html, web-py, web-java, web-cpp" },
        { name: "CLI Tools", commands: "cli-py, cli-java, cli-cpp" },
        { name: "ML Projects", commands: "ml-py, ml-java, ml-cpp" },
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight text-center">Instant Shortcuts</h2>
                    <p className="text-white/65 text-center mt-3 text-base">
                        Skip the wizard and jump straight into action.
                    </p>
                </div>

                <div className="space-y-3">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="glass p-6 rounded-xl border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <ChevronRight className="w-4 h-4 text-blue-vibrant" />
                                <p className="text-white/80 font-bold text-base tracking-tight">{cat.name}</p>
                            </div>

                            <code className="bg-black/60 px-4 py-2 rounded-lg border border-white/5 text-blue-vibrant font-mono text-sm max-w-full overflow-x-auto whitespace-nowrap">
                                <span className="text-white/40 mr-2">$</span> zerostart {cat.commands}
                            </code>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShortcutTable;
