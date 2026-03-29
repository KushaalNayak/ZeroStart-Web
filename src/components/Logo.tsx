import { motion } from 'framer-motion';

interface LogoProps {
    size?: number;
    className?: string;
}

const Logo = ({ size = 32, className = "" }: LogoProps) => {
    return (
        <div
            className={`relative flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-500 ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Ultra-subtle, neat ambient background pulse matching website theme */}
            <motion.div
                className="absolute inset-0 bg-blue-500/10 blur-[15px] rounded-full pointer-events-none"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* The Logo Image */}
            <img 
                src="/logo.png" 
                alt="ZeroStart Logo" 
                className="relative z-10 w-[150%] h-[150%] object-contain mix-blend-screen scale-[1.2]"
                style={{ 
                    /* Shifts cyan to the website's deep blue and pushes the core to pure white */
                    filter: "hue-rotate(35deg) brightness(1.4) saturate(1.2)",
                    /* Perfectly erases the hard square corners of the image background, leaving only the centered logo */
                    WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 65%)",
                    maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 65%)"
                }}
            />

            {/* Classic, Neat Shimmer Effect overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <motion.div
                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full rotate-12"
                    animate={{ translateX: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
                />
            </div>
        </div>
    );
};

export default Logo;
