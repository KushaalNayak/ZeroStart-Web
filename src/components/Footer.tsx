import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="py-24 px-6 border-t border-white/5 bg-black/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Logo size={32} />
                        <span className="font-display font-bold text-lg text-white">ZeroStart</span>
                    </div>
                    <p className="text-white/55 text-sm max-w-xs">
                        High-speed automation for modern developers.
                    </p>
                </div>

                <div className="flex gap-16">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">Links</h4>
                        <ul className="text-white/55 text-sm space-y-2">
                            <li><Link to="/about" className="hover:text-blue-vibrant transition-colors">About Us</Link></li>
                            <li><Link to="/commands" className="hover:text-blue-vibrant transition-colors">Documentation</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-vibrant transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">Legal</h4>
                        <ul className="text-white/55 text-sm space-y-2">
                            <li><Link to="/privacy" className="hover:text-blue-vibrant transition-colors">Privacy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-vibrant transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                <div>© 2026 Zero-One Developers</div>
                <div className="flex items-center gap-2 text-white/20">
                    <span>Built by</span>
                    <a
                        href="https://github.com/KushaalNayak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-blue-vibrant transition-colors"
                    >
                        Kushaal Badavath
                    </a>
                    <span>/</span>
                    <a
                        href="https://www.linkedin.com/in/kushaalbadavath/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-blue-vibrant transition-colors"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
