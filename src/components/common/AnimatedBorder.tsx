import { motion } from "framer-motion";
import { useTheme } from "../ui/ThemeContext";

export default function AnimatedBorder() {
    const { isDark } = useTheme();
    return (
        <motion.div
            className={`absolute bottom-0 left-0 w-full h-0.5 ${isDark ? 'bg-gradient-to-r from-transparent via-gray-400 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-400 to-transparent'}`}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    )
}
