import { motion } from "framer-motion";
import { useTheme } from '../ui/ThemeContext';

export default function Particle() {
    const { isDark } = useTheme();
    return (
        <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => {
                const isDataNode = i % 3 === 0;
                const colors = isDark ? ['bg-white', 'bg-cyan-400', 'bg-emerald-400', 'bg-violet-400', 'bg-rose-400'] : ['bg-gray-800', 'bg-gray-600', 'bg-gray-500', 'bg-gray-400', 'bg-gray-700']; // Darker colors for light theme
                return (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${colors[i % colors.length]} ${isDark ? 'opacity-50' : 'opacity-30'}`} // Adjust opacity for light theme
                        style={{
                            width: `${isDataNode ? '3px' : '2px'}`,
                            height: `${isDataNode ? '3px' : '2px'}`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -80, 0],
                            x: [0, Math.random() * 60 - 30, 0],
                            opacity: [isDark ? 0.5 : 0.3, 1, isDark ? 0.5 : 0.3], // Adjusted opacity range
                            scale: [1, isDataNode ? 1.5 : 1.3, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3,
                        }}
                    />
                );
            })}
        </div>
    );
}