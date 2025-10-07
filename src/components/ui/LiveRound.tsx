import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export default function LiveRound() {
    const { isDark } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative p-8 mb-12 rounded-3xl border backdrop-blur-xl shadow-2xl overflow-hidden ${isDark ? 'bg-black/20 border-white/10' : 'bg-white/20 border-gray-300/20'}`}
        >
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-green-500/10 via-transparent to-green-600/10' : 'from-green-400/10 via-transparent to-green-500/10'}`}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-green-500/20' : 'bg-green-400/20'}`}
                >
                    <FaPlayCircle className={`text-3xl ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                </motion.div>

                <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Round 1 is <span className={`bg-gradient-to-r bg-clip-text text-transparent ${isDark ? 'from-green-400 to-green-300' : 'from-green-600 to-green-500'}`}>Live!</span>
                </h3>

                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Join the Zinnovatio Gen Z Innovations Hackathon 3.0 Season 3 and start building innovative solutions for real-world challenges.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://unstop.com/hackathons/zinnovatio-gen-z-innovations-hackathon-30-season-3-chandigarh-university-cu-ajitgarh-punjab-1557303?lb=sFdjeQV8&utm_medium=Share&utm_source=ProfessorAuggie&utm_campaign=Innovation_challenge', '_blank')}
                    className={`px-8 py-3 rounded-full font-bold text-lg border-2 transition-all duration-300 ${isDark ? 'bg-green-500/10 text-green-400 border-green-400/30 hover:bg-green-500/20 hover:border-green-400/50' : 'bg-green-500/10 text-green-600 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50'}`}
                >
                    Participate Now
                </motion.button>
            </div>
        </motion.div>
    );
}