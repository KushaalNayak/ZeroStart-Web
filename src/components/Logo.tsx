import { motion } from 'framer-motion';

interface LogoProps {
    size?: number;
    className?: string;
}

const Logo = ({ size = 32, className = "" }: LogoProps) => {
    return (
        <div
            className={`relative flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-300 ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Outer Glow Effect */}
            <motion.div
                className="absolute inset-0 bg-blue-vibrant/30 blur-[10px] rounded-xl"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Logo Container */}
            <div className="relative w-full h-full glass-vibrant rounded-xl border border-blue-vibrant/30 flex items-center justify-center overflow-hidden bg-black/40">
                <svg viewBox="0 0 100 100" className="w-[70%] h-[70%]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="zs-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>

                    {/* Stylized 'Z' path */}
                    <motion.path
                        d="M25 35 H75 L25 65 H75"
                        stroke="url(#zs-gradient)"
                        strokeWidth="14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    />

                    {/* Integrated 'S' accents on the Z line to create a combined ZS look */}
                    <motion.path
                        d="M25 35 V45 M75 65 V55"
                        stroke="#ffffff"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="opacity-40"
                    />
                </svg>

                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full"
                    animate={{ translateX: ["100%", "-100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
            </div>
        </div>
    );
};

export default Logo;
