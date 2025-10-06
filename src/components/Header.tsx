import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ui/ThemeContext';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (section: string) => {
        const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Register', action: () => window.open('https://unstop.com/hackathons/zinnovatio-gen-z-innovations-hackathon-30-season-3-chandigarh-university-cu-ajitgarh-punjab-1557303?lb=sFdjeQV8&utm_medium=Share&utm_source=ProfessorAuggie&utm_campaign=Innovation_challenge', '_blank') },
        { label: 'Explore', action: () => handleNavigation('event-details') },
        { label: 'Faculty', action: () => handleNavigation('faculty') },
        { label: 'Gallery', action: () => handleNavigation('Gallery') }
    ];

    const headerOpacity = Math.min(scrollY / 100, 0.95);
    const backdropBlur = Math.min(scrollY / 50, 20);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${headerOpacity * 0.8})`,
                backdropFilter: `blur(${backdropBlur}px)`,
                borderBottom: scrollY > 50 ? '1px solid rgba(75, 85, 99, 0.3)' : '1px solid transparent'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center h-10 w-max"
                    >
                        <img src='/logo/zinn-logo.png' className='size-full' alt='logo' />

                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    color: scrollY > 50 ? "#F3F4F6" : "#D1D5DB",
                                    textShadow: scrollY > 50 ? "0 0 8px rgba(243, 244, 246, 0.3)" : "0 0 4px rgba(209, 213, 219, 0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={item.action}
                                className={`font-medium cursor-pointer text-sm uppercase tracking-wider transition-all duration-300 relative group ${scrollY > 50 ? 'text-gray-300 dark:text-red-500 hover:text-white' : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                {item.label}
                                <motion.div
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrollY > 50
                                        ? 'bg-gradient-to-r from-gray-400 to-gray-300'
                                        : 'bg-gradient-to-r from-gray-500 to-gray-400'
                                        }`}
                                    whileHover={{ width: "100%" }}
                                />
                            </motion.button>
                        ))}

                        <div className={`w-px h-6 transition-colors duration-300 ${scrollY > 50 ? 'bg-gray-600/50' : 'bg-gray-700/30'
                            }`}></div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: scrollY > 50 ? "0 0 20px rgba(243, 244, 246, 0.2)" : "0 0 15px rgba(209, 213, 219, 0.15)"
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`p-2 rounded-full border transition-all duration-300 ${scrollY > 50
                                ? 'bg-gray-800/40 hover:bg-gray-700/60 border-gray-600/40 hover:border-gray-500/60'
                                : 'bg-gray-900/30 hover:bg-gray-800/50 border-gray-700/30 hover:border-gray-600/50'
                                }`}
                        >
                            <motion.div
                                animate={{ rotate: isDark ? 0 : 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? (
                                    <FaSun className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                        }`} />
                                ) : (
                                    <FaMoon className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                        }`} />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg border transition-all duration-300 ${scrollY > 50
                            ? 'bg-gray-800/40 hover:bg-gray-700/60 border-gray-600/40'
                            : 'bg-gray-900/30 hover:bg-gray-800/50 border-gray-700/30'
                            }`}
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                    }`} />
                            ) : (
                                <FaBars className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                    }`} />
                            )}
                        </motion.div>
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        height: isMobileMenuOpen ? "auto" : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`md:hidden overflow-hidden rounded-lg mt-2 border transition-all duration-300 ${scrollY > 50
                        ? 'bg-gray-900/80 backdrop-blur-2xl border-gray-700/30'
                        : 'bg-gray-900/70 backdrop-blur-xl border-gray-800/20'
                        }`}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20
                                }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={item.action}
                                className={`block w-full text-left font-medium text-sm uppercase tracking-wider transition-colors duration-300 py-2 ${scrollY > 50 ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        <div className={`border-t pt-4 transition-colors duration-300 ${scrollY > 50 ? 'border-gray-600/30' : 'border-gray-700/20'
                            }`}>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleTheme}
                                className={`flex items-center space-x-3 w-full text-left transition-colors duration-300 py-2 ${scrollY > 50 ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                <motion.div
                                    animate={{ rotate: isDark ? 0 : 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isDark ? (
                                        <FaSun className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                            }`} />
                                    ) : (
                                        <FaMoon className={`text-lg transition-colors duration-300 ${scrollY > 50 ? 'text-gray-300' : 'text-gray-400'
                                            }`} />
                                    )}
                                </motion.div>
                                <span className="font-medium text-sm uppercase tracking-wider">
                                    {isDark ? 'Light' : 'Dark'} Theme
                                </span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
}