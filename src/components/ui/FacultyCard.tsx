import { motion } from "framer-motion";
import type { IFacultyMember } from "../../types/IMember";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

export default function FacultyCard({ member, index }: { member: IFacultyMember, index: number }) {
    const [isHovering, setIsHovering] = useState(false);
    console.log(isHovering);
    return (

        <motion.div
            key={`first-${member.name}`}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8 + (index * 0.12), duration: 0.8, type: "spring" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group flex-shrink-0 w-96 h-max bg-black/25 backdrop-blur-xl rounded-3xl border border-white/15 hover:border-cyan-400/40 transition-all duration-700 shadow-2xl flex flex-col justify-between p-6 cursor-pointer relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                    <motion.div
                        className="relative w-16 h-16 bg-gradient-to-br from-white/25 to-white/15 rounded-2xl flex items-center justify-center border border-white/40 overflow-hidden shadow-xl"
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
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ x: '-100%', rotate: -45 }}
                            whileHover={{ x: '200%', rotate: -45 }}
                            transition={{ duration: 0.8 }}
                        />
                    </motion.div>

                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors duration-300">
                            {member.role}
                        </p>
                        <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                            {member.experience} experience
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center"
                    >
                        <FaEnvelope className="text-cyan-400 text-sm" />
                    </motion.button>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-cyan-400/60" />
                        <span className="truncate">{member.location}</span>
                    </div>
                    <motion.div
                        className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaLinkedin className="text-cyan-400/60 hover:text-cyan-400 cursor-pointer" />
                        <FaTwitter className="text-cyan-400/60 hover:text-cyan-400 cursor-pointer" />
                        <FaGithub className="text-cyan-400/60 hover:text-cyan-400 cursor-pointer" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
