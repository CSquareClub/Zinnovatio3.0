import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import { footerLinks, socialLinks } from '../data/FooterData';
import Particle from './common/Particle';
import AnimatedBorder from './common/AnimatedBorder';
import { useTheme } from './ui/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`relative border-t overflow-hidden ${isDark ? 'bg-black text-white border-gray-800/50' : 'bg-gradient-to-l from-neutral-200 to-neutral-50 text-gray-900 border-gray-300/50'}`}>
            <Particle />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-6">
                            <h3 className={`text-3xl font-bold mb-2 tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>ZINNOVATIO</h3>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Empowering the next generation of innovators through technology and creativity
                            </p>
                        </div>

                        <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className={`mr-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className="text-sm">Chandigarh University, Punjab</span>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className={`mr-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className="text-sm">+91 XXXXX XXXXX</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className={`mr-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className="text-sm">hello@zinnovatio.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <h4 className={`text-lg font-bold mb-6 tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.1), duration: 0.5 }}
                                    >
                                        <a
                                            href={link.href}
                                            className={`text-sm relative group transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                                        >
                                            {link.label}
                                            <motion.div
                                                className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-gray-400 to-gray-300' : 'bg-gradient-to-r from-gray-500 to-gray-600'}`}
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <h4 className={`text-lg font-bold mb-6 tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-gray-900/10 text-gray-900 border-gray-300/20 hover:bg-gray-900/20'}`}
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="border-t pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                            >
                                <FaHeart className="w-5 h-5" />
                            </motion.div>
                            <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>by innovators, for innovators</span>
                        </div>

                        <div className={`flex items-center space-x-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <a href="#" className={`transition-colors duration-300 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Privacy Policy</a>
                            <a href="#" className={`transition-colors duration-300 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Terms of Service</a>
                            <a href="#" className={`transition-colors duration-300 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Code of Conduct</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatedBorder />
        </footer>
    );
}