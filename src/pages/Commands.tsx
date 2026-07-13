import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowLeft, Copy, Check, Rocket, Cpu, Globe, Laptop, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

const CommandCard = ({
    command,
    description,
    example
}: {
    command: string;
    description: string;
    example?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-xl glass border-white/5 hover:border-blue-vibrant/20 transition-all group"
        >
            <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Terminal className="w-3.5 h-3.5 text-blue-vibrant" />
                        <code className="text-blue-vibrant font-bold text-base font-mono">zerostart {command}</code>
                    </div>
                    <p className="text-white/40 text-[13px] leading-relaxed">{description}</p>
                </div>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all flex-shrink-0"
                >
                    {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                        <Copy className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40" />
                    )}
                </button>
            </div>
            {example && (
                <div className="mt-3 p-3 rounded-lg bg-black/40 border border-white/5 font-mono">
                    <p className="text-[9px] text-white/20 mb-1 uppercase tracking-widest font-bold">Usage</p>
                    <code className="text-[12px] text-white/60 block overflow-x-auto whitespace-nowrap">zerostart {example}</code>
                </div>
            )}
        </motion.div>
    );
};

const Commands = () => {
    const [activeTab, setActiveTab] = useState('core');

    const tabs = [
        { id: 'core', label: 'Core', icon: Rocket },
        { id: 'deploy', label: 'Deployment', icon: Globe },
        { id: 'tools', label: 'Dev Tools', icon: Laptop },
        { id: 'dsa', label: 'DSA Practice', icon: Cpu },
        { id: 'web', label: 'Web Apps', icon: Zap },
        { id: 'cli', label: 'CLI Tools', icon: Terminal },
        { id: 'ml', label: 'ML Projects', icon: Brain },
        { id: 'ai', label: 'AI Architect', icon: Zap },
    ];

    const commandData: Record<string, any[]> = {
        core: [
            { command: 'init [name]', description: 'Launches the Interactive Workspace Wizard (Project Name, Framework, Package Manager, TypeScript, Git, Add-ons).', example: 'init my-awesome-project' },
            { command: '', description: 'Launch the Interactive Workspace Wizard directly.', example: '' },
            { command: 'ai [prompt]', description: 'The AI Architect: Build a project from a simple description.', example: 'ai "a nextjs blog with tailwind"' },
            { command: 'doctor', description: 'Environment health checker. Audits node, npm, git, docker, pnpm, bun, and VS Code.', example: 'doctor' },
            { command: 'inspect', description: 'Static project analyzer. Scans workspace for crucial configs and recommends optimizations.', example: 'inspect' },
            { command: '--help', description: 'View all commands.', example: '--help' },
        ],
        deploy: [
            { command: 'deploy', description: 'Interactive deployment (Vercel/Netlify).', example: 'deploy' },
            { command: 'deploy-vercel', description: 'Instant Vercel deployment.', example: 'deploy-vercel' },
            { command: 'deploy-netlify', description: 'Instant Netlify deployment.', example: 'deploy-netlify' },
        ],
        tools: [
            { command: 'add <module>', description: 'Installs and configures docker, prisma, shadcn, github-actions, prettier, eslint, or tailwind dynamically.', example: 'add tailwind' },
            { command: 'add eslint', description: 'Installs eslint, configures .eslintrc.json, and adds lint script.', example: 'add eslint' },
            { command: 'add prettier', description: 'Installs prettier, configures .prettierrc / .prettierignore, and adds format script.', example: 'add prettier' },
            { command: 'add tailwind', description: 'Installs tailwindcss, postcss, autoprefixer; generates configs; injects CSS.', example: 'add tailwind' },
            { command: 'add docker', description: 'Adds custom Dockerfile (Next.js, React Nginx, Node, Python, Java).', example: 'add docker' },
            { command: 'add github-actions', description: 'Creates a CI/CD build/test pipeline under .github/workflows/ci.yml.', example: 'add github-actions' },
            { command: 'add prisma', description: 'Configures Prisma ORM with SQLite and creates a sample database model.', example: 'add prisma' },
            { command: 'add shadcn', description: 'Non-interactively sets up components.json and lib/utils.', example: 'add shadcn' },
            { command: 'git', description: 'Setup local & remote GitHub repo.', example: 'git' },
            { command: 'env', description: 'Interactive .env manager.', example: 'env' },
            { command: 'test', description: 'Setup Jest, Vitest, or Cypress.', example: 'test' },
        ],
        dsa: [
            { command: 'dsa-py', description: 'Instant Python DSA environment.', example: 'dsa-py' },
            { command: 'dsa-java', description: 'Instant Java DSA environment.', example: 'dsa-java' },
            { command: 'dsa-cpp', description: 'Instant C++ DSA environment.', example: 'dsa-cpp' },
        ],
        web: [
            { command: 'web-react', description: 'Instant React + Vite environment.', example: 'web-react' },
            { command: 'web-html', description: 'Instant HTML/CSS environment.', example: 'web-html' },
            { command: 'web-py', description: 'Instant Python Web environment.', example: 'web-py' },
            { command: 'web-java', description: 'Instant Java Web environment.', example: 'web-java' },
            { command: 'web-cpp', description: 'Instant C++ Web environment.', example: 'web-cpp' },
        ],
        cli: [
            { command: 'cli-py', description: 'Instant Python CLI boilerplate.', example: 'cli-py' },
            { command: 'cli-java', description: 'Instant Java CLI boilerplate.', example: 'cli-java' },
            { command: 'cli-cpp', description: 'Instant C++ CLI boilerplate.', example: 'cli-cpp' },
        ],
        ml: [
            { command: 'ml-py', description: 'Instant Python ML environment.', example: 'ml-py' },
            { command: 'ml-java', description: 'Instant Java ML environment.', example: 'ml-java' },
            { command: 'ml-cpp', description: 'Instant C++ ML environment.', example: 'ml-cpp' },
        ],
        ai: [
            { command: 'ai [prompt]', description: 'Describe your project in plain English, and our AI Architect intelligently generates your folder structure, core logic, and a project roadmap.', example: 'ai "portfolio website with framer motion"' },
            { command: 'ai --configure', description: 'Configure AI provider and API keys.', example: 'ai --configure' },
        ]
    };

    return (
        <div className="min-h-screen bg-mesh font-sans">
            <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-16 flex items-center px-6">
                <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-blue-vibrant transition-all font-bold text-[11px] uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Link>
                    <div className="flex items-center gap-2">
                        <Logo size={32} />
                        <span className="font-display font-bold text-lg text-white">ZeroStart Engine</span>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">
                        Command <span className="text-gradient-blue">Portal</span>
                    </h1>
                    <p className="text-white/40 text-sm max-w-md mx-auto">
                        Quickly filter and find exactly what you need to build next.
                    </p>
                </div>

                {/* Tab Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-blue-vibrant text-black shadow-lg shadow-blue-vibrant/20 scale-105'
                                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Commands Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {commandData[activeTab].map((cmd, i) => (
                                <CommandCard key={cmd.command} {...cmd} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-24 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-blue-vibrant transition-all text-xs font-bold border border-white/10 px-6 py-2 rounded-full">
                        Return to Hub
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};


export default Commands;
