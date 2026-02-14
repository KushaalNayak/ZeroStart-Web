import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    ChevronRight,
    Terminal,
    Zap,
    GitBranch,
    Github,
    Rocket,
    ShieldCheck,
    Layers,
    Code2,
    Linkedin,
    Cpu,
    LayoutGrid,
    Check,
    Copy
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import Orb from '../components/Orb';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
        {children}
    </section>
);

const CodeBlock = ({ code, language = "bash" }: { code: string, language?: string }) => (
    <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-hidden">
            <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <pre className="text-white/80">
                {code.split('\n').map((line, i) => (
                    <div key={i} className="flex gap-4">
                        <span className="text-white/20 select-none w-4">{i + 1}</span>
                        <span>
                            {line.startsWith('$') ? (
                                <>
                                    <span className="text-accent">$</span> {line.slice(2)}
                                </>
                            ) : line}
                        </span>
                    </div>
                ))}
            </pre>
        </div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-8 rounded-2xl bg-card border border-card-border hover:border-accent/40 transition-colors"
    >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
    </motion.div>
);

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleGetStarted = () => {
        navigator.clipboard.writeText('npm install -g zerostart-cli');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate opacity based on scroll position
    // Starts fading at 50px, completely hidden by 400px
    const orbOpacity = Math.max(0, Math.min(1, 1 - (scrollY - 50) / 350));

    return (
        <div className="min-h-screen hero-gradient font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 h-16 flex items-center px-6 md:px-12">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-accent" />
                        <span className="text-xl font-bold tracking-tighter">ZeroStart</span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#install" className="hover:text-white transition-colors">Installation</a>
                        <a href="#usage" className="hover:text-white transition-colors">Usage</a>
                        <Link to="/commands" className="hover:text-white transition-colors">Commands</Link>
                    </div>
                    <button
                        onClick={handleGetStarted}
                        className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors flex items-center gap-2"
                    >
                        {copied ? (
                            <><Check className="w-4 h-4" /> Copied!</>
                        ) : (
                            'Get Started'
                        )}
                    </button>
                </div>
            </nav>

            {/* Hero Section with Centered Orb */}
            <Section className="min-h-screen flex flex-col items-center justify-center text-center relative">
                {/* Centered Background Orb */}
                <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 transition-opacity duration-300"
                    style={{ opacity: orbOpacity * 0.7 }}
                >
                    <Orb
                        hue={260}
                        hoverIntensity={2}
                        rotateOnHover={true}
                        forceHoverState={false}
                        backgroundColor="#000000"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-8 uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> Now in Beta
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 gradient-text leading-tight">
                        ZeroStart
                    </h1>
                    <p className="text-2xl md:text-3xl text-white font-medium mb-6">
                        Start. Build. Deploy. In Seconds.
                    </p>
                    <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed mx-auto">
                        The ultimate CLI for beginner web developers.
                        Zero configuration, intelligent project scaffolding, and one-command deployments.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={handleGetStarted}
                            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all group justify-center min-w-[200px]"
                        >
                            {copied ? (
                                <><Check className="w-5 h-5 text-white" /> Copied to Clipboard!</>
                            ) : (
                                <>Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                        <a
                            href="https://github.com/KushaalNayak/ZeroStart-Web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all justify-center"
                        >
                            <Github className="w-5 h-5" /> View on GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Floating Command Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-20 w-full max-w-3xl relative z-10"
                >
                    <CodeBlock code="$ zerostart init my-project\n? Select language: React\n? Setup Git & GitHub? Yes\n? Deploy automatically? Yes\n\n✔ Project structure generated\n✔ Git initialized & pushed\n✔ Deployment triggered" />
                </motion.div>
            </Section>

            {/* What This CLI Does */}
            <Section id="features">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Velocity</h2>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto">Everything you need to go from an idea to a live project in seconds.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Layers}
                        title="Instant Structure"
                        description="Create project directories, source files, and configurations instantly with pre-built best practices."
                    />
                    <FeatureCard
                        icon={GitBranch}
                        title="Auto Git & GitHub"
                        description="Guidance through initializing Git, creating GitHub repositories, and pushing your first commit automatically."
                    />
                    <FeatureCard
                        icon={Rocket}
                        title="One-Click Deploy"
                        description="Deploy your projects to Vercel or Netlify directly from the CLI without touching a web dashboard."
                    />
                </div>
            </Section>

            {/* Installation Section */}
            <Section id="install" className="bg-white/[0.02]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Simple Installation</h2>
                        <p className="text-white/50 text-xl mb-8 leading-relaxed">
                            Get ZeroStart up and running on your machine globally in just one command.
                            Compatible with Node.js 18 and newer.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                                <Terminal className="w-6 h-6 text-accent" />
                            </div>
                            <p className="text-sm text-white/40 italic flex items-center">
                                Make sure you have Node.js and npm installed.
                            </p>
                        </div>
                    </div>
                    <CodeBlock code="$ npm install -g zerostart-cli" />
                </div>
            </Section>

            {/* Usage Section */}
            <Section id="usage">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">User-Friendly Workflow</h2>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto">Simplify your development cycle with these intuitive commands.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <CodeBlock code="$ zerostart init my-project\n$ cd my-project\n$ zerostart deploy" />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                            <span className="text-accent font-bold block mb-2">init [name]</span>
                            <p className="text-white/40 text-sm">Initializes a new project with interactive prompts for language and features.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                            <span className="text-accent font-bold block mb-2">deploy</span>
                            <p className="text-white/40 text-sm">Authenticates and pushes your project to a hosting provider in seconds.</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            to="/commands"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium"
                        >
                            View All Commands <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Why This CLI? */}
            <Section id="why">
                <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-accent/20 to-transparent border border-accent/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] -z-10 rounded-full" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Why ZeroStart?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="text-accent font-bold text-lg mb-2">Save Time</div>
                            <p className="text-white/50 text-sm italic">Stop wasting hours on boilerplate setup.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-accent font-bold text-lg mb-2">No Headache</div>
                            <p className="text-white/50 text-sm italic">Zero configuration files to manage manually.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-accent font-bold text-lg mb-2">Beginner Focused</div>
                            <p className="text-white/50 text-sm italic">Guided prompts that help you through every step.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-accent font-bold text-lg mb-2">Clean Structure</div>
                            <p className="text-white/50 text-sm italic">Professional templates used by industry experts.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* More Features Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <Cpu className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Interactive Prompts</h3>
                        <p className="text-white/40 text-sm">Guided wizards that make choosing features easy even for absolute beginners.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <LayoutGrid className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Smart Scaffolding</h3>
                        <p className="text-white/40 text-sm">Templates optimized for performance, SEO, and developer experience.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <Github className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">GitHub Integration</h3>
                        <p className="text-white/40 text-sm">Automatic repository creation, token management, and SSH setup.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <Rocket className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Deploy Automation</h3>
                        <p className="text-white/40 text-sm">Built-in support for Vercel, Netlify, and GitHub Pages deployments.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <Code2 className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Syntax Templates</h3>
                        <p className="text-white/40 text-sm">Choose between JavaScript, TypeScript, Python, and more.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-white/5">
                        <ShieldCheck className="text-accent mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Secure Defaults</h3>
                        <p className="text-white/40 text-sm">Best-in-class security settings for Git and deployment workflows.</p>
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-accent" />
                        <span className="font-bold tracking-tighter">ZeroStart</span>
                    </div>
                    <p className="text-white/40 text-sm font-medium">Built with ❤️ by Kushaal Badavath</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/KushaalNayak/ZeroStart-Web" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/kushaalbadavath/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
