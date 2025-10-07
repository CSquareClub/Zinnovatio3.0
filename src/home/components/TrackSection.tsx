import { motion } from 'framer-motion';
import { trackThemeData } from '../../data/TrackData';
import type { ITrackThemeData } from '../../types/ITrack';
import Particle from '../../components/common/Particle';
import BackgroundPattern from '../../components/common/BackgroundPattern';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedBorder from '../../components/common/AnimatedBorder';
import { useTheme } from '../../components/ui/ThemeContext';
import LiveRound from '../../components/ui/LiveRound';

export default function TrackSection() {
    const { isDark } = useTheme();

    return (
        <div
            className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-gradient-to-l from-neutral-200 to-neutral-50 text-gray-900'}`}
            id='event-details'
        >
            <Particle />
            <BackgroundPattern />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Registration Countdown Timer */}
                {/* <CountDown /> */}
                <LiveRound />

                {/* Premium Section Header */}
                <SectionHeader title="Choose Your" highlightWord="Project Theme" description="Select from these carefully curated problem statements to build your innovative solution. Each theme presents unique challenges that align with real-world problems." />

                {/* Challenge Tracks Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
                    {trackThemeData.map((problem: ITrackThemeData, index) => {
                        return (
                            <motion.div
                                key={problem.id}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5, type: "spring" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className={`relative backdrop-blur-xs cursor-pointer rounded-3xl border transition-all duration-500 overflow-hidden shadow-2xl h-full ${isDark ? 'bg-black/5 border-white/10 hover:border-white/20' : 'bg-white/5 border-gray-300/10 hover:border-gray-400/20'}`}>
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%'],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        }}
                                    />

                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${isDark ? 'from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100' : 'from-gray-100/10 via-transparent to-gray-200/5 opacity-0 group-hover:opacity-100'}`}
                                    />

                                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                                        <div className="flex-1">
                                            <h3 className={`text-xl sm:text-2xl font-bold leading-tight mb-4 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {problem.title}
                                            </h3>

                                            <p className={`text-sm sm:text-base leading-relaxed line-clamp-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {problem.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between gap-2">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-12 h-8 sm:w-14 sm:h-10 backdrop-blur-md rounded-xl flex items-center justify-center border shadow-lg ${isDark ? 'bg-white/10 border-white/20' : 'bg-gray-900/10 border-gray-300/20'}`}
                                            >
                                                {problem.icon}
                                            </motion.div>
                                            <span className={`inline-flex items-center px-2 py-1 backdrop-blur-md text-xs font-medium rounded-xl border line-clamp-2 ${isDark ? 'bg-white/10 text-white/90 border-white/20' : 'bg-gray-900/10 text-gray-900/90 border-gray-300/20'}`}>
                                                {problem.sdg}
                                            </span>
                                        </div>

                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ${isDark ? '' : 'from-gray-100/5 to-gray-200/10'}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="text-center"
                >
                    <motion.p
                        className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Choose your project theme and start building innovative solutions that address real-world challenges. Your creativity and technical skills can make a lasting impact!
                    </motion.p>
                </motion.div>
            </div>

            {/* Animated Bottom Border */}
            <AnimatedBorder />
        </div>
    );
}