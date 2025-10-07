import { motion } from "framer-motion";
import type { IFacultyMember } from "../../types/IMember";
import { useState } from "react";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../ui/ThemeContext";

export default function FacultyCard({ member, index }: { member: IFacultyMember, index: number }) {
    const [isHovering, setIsHovering] = useState(false);
    const { isDark } = useTheme();

    console.log(isHovering);
    return (

        <motion.div
            key={`first-${member.name}`}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8 + (index * 0.12), duration: 0.8, type: "spring" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`group flex-shrink-0 w-96 h-max backdrop-blur-xl rounded-3xl border transition-all duration-700 shadow-2xl flex flex-col justify-between p-6 cursor-pointer relative overflow-hidden ${isDark ? 'bg-black/25 border-white/15 hover:border-cyan-400/40' : 'bg-white/25 border-gray-300/15 hover:border-cyan-400/40'}`}
            style={{
                background: `linear-gradient(135deg, ${isDark ? 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2)'})`,
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: `${isDark ? '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : '0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(0, 0, 0, 0.1)'}`,
            }}
        >
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${isDark ? 'from-cyan-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100' : 'from-cyan-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100'}`}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            <motion.div
                className={`absolute inset-0 bg-gradient-to-tr transition-opacity duration-500 ${isDark ? 'from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100' : 'from-gray-100/10 via-transparent to-gray-200/5 opacity-0 group-hover:opacity-100'}`}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                    <motion.div
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center border overflow-hidden shadow-xl ${isDark ? 'bg-gradient-to-br from-white/25 to-white/15 border-white/40' : 'bg-gradient-to-br from-gray-100/25 to-gray-200/15 border-gray-300/40'}`}
                    >
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />

                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'from-transparent via-white/30 to-transparent' : 'from-transparent via-gray-300/30 to-transparent'}`}
                            initial={{ x: '-100%', rotate: -45 }}
                            whileHover={{ x: '200%', rotate: -45 }}
                            transition={{ duration: 0.8 }}
                        />
                    </motion.div>

                    <div className="flex-1">
                        <h3 className={`font-bold text-lg leading-tight transition-colors duration-300 ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-gray-900 group-hover:text-cyan-500'}`}>
                            {member.name}
                        </h3>
                        <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-cyan-300 group-hover:text-cyan-200' : 'text-cyan-600 group-hover:text-cyan-500'}`}>
                            {member.role}
                        </p>
                        <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'}`}>
                            {member.experience} experience
                        </p>
                    </div>

                    <motion.button
                        onClick={() => window.open(member.linkedin, '_blank')}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-xl border transition-all cursor-pointer duration-300 flex items-center justify-center ${isDark ? 'bg-cyan-500/20 hover:bg-cyan-500/30 border-cyan-400/30 hover:border-cyan-400/60' : 'bg-cyan-500/20 hover:bg-cyan-500/30 border-cyan-400/30 hover:border-cyan-400/60'}`}
                    >
                        <FaLinkedin className="text-cyan-400 text-sm" />
                    </motion.button>
                </div>

                <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FaMapMarkerAlt className="mr-1 text-cyan-400/60" />
                        <span className="truncate">{member.location}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}