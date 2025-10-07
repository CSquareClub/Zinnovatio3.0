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
                backgroundColor: `${isDark ? `rgba(0, 0, 0, ${headerOpacity * 0.8})` : `rgba(255, 255, 255, ${headerOpacity * 0.9})`}`,
                backdropFilter: `blur(${backdropBlur}px)`,
                borderBottom: scrollY > 50 ? `${isDark ? '1px solid rgba(75, 85, 99, 0.3)' : '1px solid rgba(156, 163, 175, 0.3)'}` : '1px solid transparent'
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
                                className={`font-medium cursor-pointer text-sm uppercase tracking-wider transition-all duration-300 relative group ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-gray-900'}`}
                            >
                                {item.label}
                                <motion.div
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrollY > 50
                                        ? 'bg-gradient-to-r from-gray-400 to-gray-300'
                                        : 'bg-gradient-to-r from-gray-300 to-gray-200'
                                        }`}
                                />
                            </motion.button>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-gray-900/10 text-gray-900 border-gray-300/20 hover:bg-gray-900/20'}`}
                        >
                            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                        </motion.button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-gray-900/10 text-gray-900 border-gray-300/20 hover:bg-gray-900/20'}`}
                        >
                            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-gray-900/10 text-gray-900 border-gray-300/20 hover:bg-gray-900/20'}`}
                        >
                            {isMobileMenuOpen ? <FaTimes className="text-red-400" /> : <FaBars className="text-gray-400" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden border-t ${isDark ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-300'}`}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={item.action}
                                className={`block w-full text-left py-3 px-4 rounded-lg font-medium cursor-pointer transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/10'}`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}