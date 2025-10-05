import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaQrcode } from 'react-icons/fa';
import Particle from '../../components/common/Particle';
import BackgroundPattern from '../../components/common/BackgroundPattern';
import AnimatedBorder from '../../components/common/AnimatedBorder';
import orgData from '../../data/HeroData';
import type { IOrgData } from '../../types/IHero';

export default function HeroSection() {
    const handleRegister = () => {
        window.open('https://unstop.com/hackathons/zinnovatio-gen-z-innovations-hackathon-30-season-3-chandigarh-university-cu-ajitgarh-punjab-1557303?lb=sFdjeQV8&utm_medium=Share&utm_source=ProfessorAuggie&utm_campaign=Innovation_challenge', '_blank');
    };

    const handleQRCode = () => {
        console.log('QR Code clicked');
    };

    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden"
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
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-800/20 text-sm font-medium mb-8 border border-gray-700/80"
                    >
                        <FaRocket className="mr-3 text-white" />
                        <span className="text-gray-200">Zinnovatio 3.0 - Season 3</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                    >
                        <span className="text-white">Zinnovatio Gen Z </span>
                        <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Innovations </span>
                        <span className="text-gray-400">Hackathon</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
                                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                                background: "linear-gradient(45deg, #374151, #4B5563)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRegister}
                            className="px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-bold text-xl flex items-center justify-center group border border-gray-500 hover:border-white transition-all duration-300"
                        >
                            <span className="text-white">Register Now</span>
                            <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-white" />
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                borderColor: "white",
                                backgroundColor: "rgba(255, 255, 255, 0.05)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleQRCode}
                            className="px-8 py-5 border-2 border-gray-500 hover:border-white rounded-xl font-bold text-lg flex items-center justify-center group transition-all duration-300 bg-transparent"
                        >
                            <FaQrcode className="mr-3 text-gray-400 group-hover:text-white transition-colors text-xl" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">QR Code</span>
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

                    {/* Organizations Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="border-t border-gray-700 pt-12"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-lg text-gray-400 mb-8 uppercase tracking-wider">Powered By</h3>
                            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
                                {orgData.map((org: IOrgData) => (
                                    <motion.div
                                        whileHover={{ scale: 1.1, opacity: 1 }}
                                        className="flex items-center justify-center"
                                    >
                                        <img
                                            src={org.src}
                                            alt={org.alt}
                                            className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatedBorder />
        </div>
    );
}