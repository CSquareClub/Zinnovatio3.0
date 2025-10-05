import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import { footerLinks, socialLinks } from '../data/FooterData';
import Particle from './common/Particle';
import AnimatedBorder from './common/AnimatedBorder';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative bg-black text-white border-t border-gray-800/50 overflow-hidden" >
            <Particle />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">ZINNOVATIO</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Empowering the next generation of innovators through technology and creativity
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <FaMapMarkerAlt className="mr-3 text-gray-400" />
                                <span className="text-sm">Chandigarh University, Punjab</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <FaPhone className="mr-3 text-gray-400" />
                                <span className="text-sm">+91 XXXXX XXXXX</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <FaEnvelope className="mr-3 text-gray-400" />
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
                            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">{category}</h4>
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
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                                        >
                                            {link.label}
                                            <motion.div
                                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300"
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="border-t border-gray-800/50 pt-12 mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">Follow Us</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-gray-800/60 hover:bg-gray-700/80 rounded-full flex items-center justify-center border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="md:text-right">
                            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">Stay Updated</h4>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md md:ml-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-gray-800/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600/70 transition-colors duration-300"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-lg text-white font-medium transition-all duration-300 border border-gray-600/50"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="border-t border-gray-800/50 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                            <span>© {currentYear} Zinnovatio. Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="mx-2 text-red-400"
                            >
                                <FaHeart />
                            </motion.div>
                            <span>by innovators, for innovators</span>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Code of Conduct</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatedBorder />
        </footer>
    );
}