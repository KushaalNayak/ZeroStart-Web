import { motion } from 'framer-motion';
import { Terminal, ArrowLeft, Copy, Check, Rocket, Code2, Database, Cpu, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/40 transition-colors"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <Terminal className="w-5 h-5 text-accent" />
                        <code className="text-accent font-bold text-lg">{command}</code>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
                <button
                    onClick={handleCopy}
                    className="ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
                    title="Copy command"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4 text-white/40" />
                    )}
                </button>
            </div>
            {example && (
                <div className="mt-4 p-4 rounded-lg bg-black/40 border border-white/5">
                    <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">Example</p>
                    <code className="text-sm text-white/80 font-mono">{example}</code>
                </div>
            )}
        </motion.div>
    );
};

const SectionHeader = ({ icon: Icon, title, count }: { icon: any, title: string, count: number }) => (
    <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className="text-white/40 text-sm">{count} commands</p>
        </div>
    </div>
);

const Commands = () => {
    const mainCommands = [
        {
            command: 'zerostart init [project-name]',
            description: 'Initialize a new project with interactive prompts for language, framework, and features. Creates project structure, installs dependencies, and sets up configuration files.',
            example: 'zerostart init my-awesome-app'
        },
        {
            command: 'zerostart deploy',
            description: 'Deploy your project to a hosting provider (Vercel, Netlify, or GitHub Pages). Handles authentication, build configuration, and deployment automatically.',
            example: 'zerostart deploy'
        },
        {
            command: 'zerostart git',
            description: 'Initialize Git repository, create .gitignore, make initial commit, and optionally create a GitHub repository with automatic push.',
            example: 'zerostart git'
        },
        {
            command: 'zerostart add [feature]',
            description: 'Add features to your existing project like authentication, database, API routes, or UI components. Automatically installs dependencies and creates boilerplate code.',
            example: 'zerostart add auth'
        },
        {
            command: 'zerostart env',
            description: 'Manage environment variables interactively. Add, edit, or remove variables from .env files with validation and secure storage.',
            example: 'zerostart env'
        },
        {
            command: 'zerostart test',
            description: 'Set up testing framework (Jest, Vitest, or Cypress) with sample tests and configuration. Includes test runners and coverage tools.',
            example: 'zerostart test'
        },
        {
            command: 'zerostart build',
            description: 'Build your project for production with optimizations. Handles bundling, minification, and asset optimization automatically.',
            example: 'zerostart build'
        },
        {
            command: 'zerostart dev',
            description: 'Start development server with hot reload, error overlay, and debugging tools. Automatically detects your framework and uses the appropriate dev server.',
            example: 'zerostart dev'
        },
        {
            command: 'zerostart clean',
            description: 'Clean build artifacts, node_modules, and cache files. Optionally reinstall dependencies for a fresh start.',
            example: 'zerostart clean'
        },
        {
            command: 'zerostart update',
            description: 'Update ZeroStart CLI to the latest version and check for dependency updates in your project.',
            example: 'zerostart update'
        },
        {
            command: 'zerostart docs',
            description: 'Open comprehensive documentation in your browser with guides, API references, and examples.',
            example: 'zerostart docs'
        },
        {
            command: 'zerostart --help',
            description: 'Display help information for all available commands with usage examples and options.',
            example: 'zerostart --help'
        },
        {
            command: 'zerostart --version',
            description: 'Display the current version of ZeroStart CLI installed on your system.',
            example: 'zerostart --version'
        }
    ];

    const deploymentCommands = [
        {
            command: 'zerostart deploy-vercel',
            description: 'Deploy directly to Vercel with automatic configuration, environment variable setup, and domain management.',
            example: 'zerostart deploy-vercel'
        },
        {
            command: 'zerostart deploy-netlify',
            description: 'Deploy directly to Netlify with automatic build settings, form handling, and serverless function setup.',
            example: 'zerostart deploy-netlify'
        }
    ];

    const shortcutCommands = {
        dsa: [
            { command: 'zerostart dsa-py', description: 'Create a Python DSA project with common algorithms and data structures templates.', example: 'zerostart dsa-py' },
            { command: 'zerostart dsa-java', description: 'Create a Java DSA project with OOP-based algorithm implementations.', example: 'zerostart dsa-java' },
            { command: 'zerostart dsa-cpp', description: 'Create a C++ DSA project with STL-based data structures and algorithms.', example: 'zerostart dsa-cpp' },
            { command: 'zerostart dsa-node', description: 'Create a Node.js DSA project with JavaScript/TypeScript algorithm implementations.', example: 'zerostart dsa-node' }
        ],
        web: [
            { command: 'zerostart web-react', description: 'Create a React web application with modern tooling, routing, and state management.', example: 'zerostart web-react' },
            { command: 'zerostart web-html', description: 'Create a static HTML/CSS/JS website with responsive design and best practices.', example: 'zerostart web-html' },
            { command: 'zerostart web-node', description: 'Create a Node.js/Express web application with REST API and middleware setup.', example: 'zerostart web-node' },
            { command: 'zerostart web-py', description: 'Create a Python Flask/Django web application with database integration.', example: 'zerostart web-py' },
            { command: 'zerostart web-java', description: 'Create a Java Spring Boot web application with MVC architecture.', example: 'zerostart web-java' },
            { command: 'zerostart web-cpp', description: 'Create a C++ web server using modern frameworks like Crow or Drogon.', example: 'zerostart web-cpp' }
        ],
        cli: [
            { command: 'zerostart cli-py', description: 'Create a Python CLI application with argument parsing and interactive prompts.', example: 'zerostart cli-py' },
            { command: 'zerostart cli-node', description: 'Create a Node.js CLI tool with Commander.js and Inquirer for interactivity.', example: 'zerostart cli-node' },
            { command: 'zerostart cli-java', description: 'Create a Java CLI application with Apache Commons CLI for argument handling.', example: 'zerostart cli-java' },
            { command: 'zerostart cli-cpp', description: 'Create a C++ CLI application with modern argument parsing libraries.', example: 'zerostart cli-cpp' }
        ],
        ml: [
            { command: 'zerostart ml-py', description: 'Create a Python ML project with Jupyter notebooks, scikit-learn, and TensorFlow setup.', example: 'zerostart ml-py' },
            { command: 'zerostart ml-node', description: 'Create a Node.js ML project with TensorFlow.js and data processing tools.', example: 'zerostart ml-node' },
            { command: 'zerostart ml-java', description: 'Create a Java ML project with Deeplearning4j and Weka integration.', example: 'zerostart ml-java' },
            { command: 'zerostart ml-cpp', description: 'Create a C++ ML project with modern libraries like MLpack and Dlib.', example: 'zerostart ml-cpp' }
        ]
    };

    return (
        <div className="min-h-screen hero-gradient font-sans">
            {/* Header */}
            <div className="fixed top-0 w-full z-50 glass border-b border-white/5 h-16 flex items-center px-6 md:px-12">
                <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-8 uppercase tracking-widest">
                        <Terminal className="w-3 h-3" /> CLI Reference
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 gradient-text">
                        All Commands
                    </h1>
                    <p className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                        Complete reference for all 31 ZeroStart CLI commands. Click the copy icon to copy any command to your clipboard.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/40">Main Commands:</span> <span className="text-accent font-bold">13</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/40">Deployment:</span> <span className="text-accent font-bold">2</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/40">Shortcuts:</span> <span className="text-accent font-bold">18</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/40">Total:</span> <span className="text-accent font-bold">31</span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Commands Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-20"
                >
                    <SectionHeader icon={Terminal} title="Main Commands" count={13} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {mainCommands.map((cmd, index) => (
                            <CommandCard key={index} {...cmd} />
                        ))}
                    </div>
                </motion.div>

                {/* Deployment Commands Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-20"
                >
                    <SectionHeader icon={Rocket} title="Deployment Commands" count={2} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {deploymentCommands.map((cmd, index) => (
                            <CommandCard key={index} {...cmd} />
                        ))}
                    </div>
                </motion.div>

                {/* Shortcut Commands Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-20"
                >
                    <SectionHeader icon={Code2} title="Shortcut Commands" count={18} />

                    {/* DSA Shortcuts */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5 text-accent" />
                            DSA (Data Structures & Algorithms)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {shortcutCommands.dsa.map((cmd, index) => (
                                <CommandCard key={index} {...cmd} />
                            ))}
                        </div>
                    </div>

                    {/* Web Shortcuts */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-accent" />
                            Web Development
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {shortcutCommands.web.map((cmd, index) => (
                                <CommandCard key={index} {...cmd} />
                            ))}
                        </div>
                    </div>

                    {/* CLI Shortcuts */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-accent" />
                            CLI Tools
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {shortcutCommands.cli.map((cmd, index) => (
                                <CommandCard key={index} {...cmd} />
                            ))}
                        </div>
                    </div>

                    {/* ML Shortcuts */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-accent" />
                            Machine Learning
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {shortcutCommands.ml.map((cmd, index) => (
                                <CommandCard key={index} {...cmd} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Quick Start Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="p-12 rounded-3xl bg-gradient-to-b from-accent/20 to-transparent border border-accent/20 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                        Install ZeroStart globally and start building your next project in seconds with any of these 31 commands.
                    </p>
                    <div
                        onClick={() => {
                            navigator.clipboard.writeText('npm install -g zerostart-cli');
                        }}
                        className="inline-flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-accent/40 transition-colors group"
                        title="Click to copy"
                    >
                        <code className="text-accent font-mono text-lg">npm install -g zerostart-cli</code>
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/10 transition-colors">
                            <Copy className="w-5 h-5 text-white/40 group-hover:text-accent" />
                        </div>
                    </div>
                </motion.div>
            </div>

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
};

export default Commands;
