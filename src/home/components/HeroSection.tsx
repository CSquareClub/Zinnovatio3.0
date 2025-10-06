import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaQrcode } from 'react-icons/fa';
import { useTheme } from '../../components/ui/ThemeContext'; // Import useTheme
import Particle from '../../components/common/Particle';
import BackgroundPattern from '../../components/common/BackgroundPattern';
import AnimatedBorder from '../../components/common/AnimatedBorder';
import orgData from '../../data/HeroData';
import type { IOrgData } from '../../types/IHero';

export default function HeroSection() {

    const { isDark } = useTheme();
    const handleRegister = () => {
        window.open('https://unstop.com/hackathons/zinnovatio-gen-z-innovations-hackathon-30-season-3-chandigarh-university-cu-ajitgarh-punjab-1557303?lb=sFdjeQV8&utm_medium=Share&utm_source=ProfessorAuggie&utm_campaign=Innovation_challenge', '_blank');
    };

    const handleQRCode = () => {
        console.log('QR Code clicked');
    };

    return (
        <div
            className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-slate-200 to-slate-100 text-gray-900'}`}
        >
            {/* Enhanced Particle System */}
            <Particle />

            {/* Pulsing Tech Circles */}
            <BackgroundPattern />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Event Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 border transition-colors duration-500 ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800/20 border-gray-700/80' : 'bg-gradient-to-r from-gray-200 to-gray-300/50 border-gray-400/60'}`}
                    >
                        <FaRocket className={`mr-3 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                        <span className={`transition-colors duration-500 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            Zinnovatio 3.0 - Season 3
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                        <span className={`transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            Zinnovatio Gen Z{' '}
                        </span>
                        <span className={`bg-clip-text text-transparent transition-colors duration-500 ${isDark ? 'bg-gradient-to-r from-gray-300 to-white' : 'bg-gradient-to-r from-gray-700 to-gray-900'}`}>
                            Innovations{' '}
                        </span>
                        <span className={`transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Hackathon
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Join the most exciting hackathon of the season! Showcase your innovative ideas,
                        collaborate with brilliant minds, and compete for amazing prizes in this 30-hour
                        coding challenge.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: isDark ? "0 20px 40px rgba(255, 255, 255, 0.1)" : "0 20px 40px rgba(0, 0, 0, 0.1)",
                                background: isDark ? "linear-gradient(45deg, #374151, #4B5563)" : "linear-gradient(45deg, #E5E7EB, #D1D5DB)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRegister}
                            className={`px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-500 ${isDark ? 'bg-gray-800/50 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-100 hover:border-gray-400'}`}
                        >
                            <span className="mr-3">Register Now</span>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className={`inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                                <FaArrowRight />
                            </motion.div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, opacity: 0.8 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleQRCode}
                            className={`px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-500 ${isDark ? 'bg-transparent text-white border-gray-600 hover:bg-gray-800/30' : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-100/50'}`}
                        >
                            <span className="mr-3">Scan QR</span>
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                className={`inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                                <FaQrcode />
                            </motion.div>

                        </motion.button>
                        {/* Divider */}
                        <div className="hidden sm:block w-px h-12 bg-gray-600 mx-2"></div>

                        {/* CU Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05, opacity: 0.7 }}
                            className="flex gap-4 items-center justify-center opacity-80"
                        >
                            <img
                                src="/logo/cu-logo-white.png"
                                alt="Zinnovatio Logo"
                                className="size-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <img
                                src="/logo/naac-white.png"
                                alt="NAAC"
                                className="size-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />


                        </motion.div>
                    </motion.div>

                    {/* Organization Logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="text-center mb-8">
                            <h3 className={`text-lg mb-8 uppercase tracking-wider transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Powered By
                            </h3>
                            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
                                {orgData.map((org: IOrgData) => (
                                    <motion.div
                                        key={org.alt}
                                        whileHover={{ scale: 1.1, opacity: 1 }}
                                        className="flex items-center justify-center"
                                    >
                                        <img
                                            src={org.src}
                                            alt={org.alt}
                                            className={`h-16 w-auto transition-opacity duration-300 ${isDark ? 'opacity-60 hover:opacity-100' : 'opacity-50 hover:opacity-80'}`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Animated Bottom Border */}
            <AnimatedBorder />
        </div>
    );
}