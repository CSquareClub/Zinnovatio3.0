import { motion } from 'framer-motion';
import { facultyMembers } from '../../data/FacultyMembers';
import type { IFacultyMember } from '../../types/IMember';
import Particle from '../../components/common/Particle';
import BackgroundPattern from '../../components/common/BackgroundPattern';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedBorder from '../../components/common/AnimatedBorder';
import FacultyCard from '../../components/ui/FacultyCard';
import { useTheme } from '../../components/ui/ThemeContext';

export default function MemberSection() {
    const { isDark } = useTheme();

    return (
        <div
            id='faculty'
            className={`min-h-max relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-gradient-to-l from-neutral-200 to-neutral-50 text-gray-900'}`}
        >
            {/* Enhanced Background Elements */}
            <Particle />
            <BackgroundPattern />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">

                <SectionHeader title='Meet Our' highlightWord='Faculty' description=' Our world-class faculty members combine decades of academic excellence with real-world expertise to mentor the next generation of technology leaders and innovators' />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="overflow-hidden rounded-3xl">
                        <motion.div
                            className="flex gap-8 pb-8"
                            animate={{
                                x: [0, -2300]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 35,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                width: '200vw',
                                marginLeft: '50vw',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            {facultyMembers.map((member: IFacultyMember, index) => {
                                return (
                                    <FacultyCard key={index} member={member} index={index} />
                                );
                            })}

                            {/* Duplicate set for seamless infinite scroll */}
                            {facultyMembers.map((member: IFacultyMember, index) => {
                                return (
                                    <FacultyCard key={`second-${member.name}`} member={member} index={index} />
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <AnimatedBorder />
        </div>
    );
}