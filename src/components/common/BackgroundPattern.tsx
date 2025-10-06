import { motion } from 'framer-motion';
import { useTheme } from '../ui/ThemeContext';

export default function BackgroundPattern() {
    const { isDark } = useTheme();
    return (
        <>
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 border-2 rounded-full opacity-15"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                    borderColor: isDark ? "rgba(34, 211, 238, 0.3)" : "rgba(75, 85, 99, 0.3)", // Gray for light theme
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 rounded-full opacity-12"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.12, 0.25, 0.12],
                    borderColor: isDark ? "rgba(16, 185, 129, 0.3)" : "rgba(107, 114, 128, 0.3)", // Gray for light theme
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Data Stream Lines */}
            <motion.div
                className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-30"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scaleY: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent opacity-25"
                animate={{
                    opacity: [0.25, 0.5, 0.25],
                    scaleY: [1, 1.3, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                }}
            />
        </>
    );
}