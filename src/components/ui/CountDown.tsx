import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function CountDown() {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Countdown timer effect
    useEffect(() => {
        const targetDate = new Date('2025-10-15T23:59:59').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
        >
            <div className="text-center">
                <motion.div
                    className="flex items-center justify-center mb-6"
                >
                    <motion.div
                        animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaExclamationTriangle className="text-orange-400 text-2xl mr-4" />
                    </motion.div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-200">
                        Registration Deadline Approaching
                    </h3>
                    <motion.div
                        animate={{
                            rotate: [0, -5, 5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <FaExclamationTriangle className="text-orange-400 text-2xl ml-4" />
                    </motion.div>
                </motion.div>

                {/* Compact Countdown Timer */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6">
                    {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Minutes' },
                        { value: timeLeft.seconds, label: 'Seconds' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <motion.div
                                className="w-20 h-20 sm:w-24 sm:h-24 bg-transparent border-2 border-gray-400/60 rounded-2xl flex flex-col items-center justify-center shadow-lg mb-2"
                            >
                                <span className="text-2xl sm:text-3xl font-bold text-white">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </motion.div>
                            <span className="text-gray-400 font-medium text-sm sm:text-base uppercase tracking-wider">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    animate={{
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-lg sm:text-xl font-semibold text-gray-300 mb-2"
                >
                    ⏰ Time is Running Out
                </motion.div>

                <motion.p
                    animate={{
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="text-gray-400 text-base sm:text-lg"
                >
                    Secure your spot before registration closes
                </motion.p>
            </div>
        </motion.div>
    )
}
