import { motion } from "framer-motion";
import { useTheme } from "../ui/ThemeContext";

export default function SectionHeader({ title, highlightWord, description }: { title: string, highlightWord: string, description: string }) {
    const { isDark } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{title} </span>
                <span className={`bg-clip-text text-transparent drop-shadow-2xl ${isDark ? 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500' : 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'}`}>{highlightWord}</span>
            </h2>

            <p className={`text-xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
            </p>
        </motion.div>
    );
}