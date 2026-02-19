import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
    children: React.ReactNode;
    className?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ children, className = "" }) => {
    return (
        <motion.span
            whileHover={{ scale: 1.02 }}
            className={`hover:text-blue-vibrant transition-colors duration-300 cursor-default inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

export default InteractiveText;
