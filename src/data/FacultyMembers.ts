import { FaCrown, FaUserTie, FaChalkboardTeacher, FaUsers, FaStar, FaGraduationCap } from "react-icons/fa";
import type { IFacultyMember } from "../types/IMember";


export const facultyMembers: IFacultyMember[] = [
    {
        name: "Dr. Sarah Johnson",
        role: "Executive Director",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        icon: FaCrown,
        location: "New York, USA",
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        experience: "15+ years"
    },
    {
        name: "Dr. Michael Chen",
        role: "HOD - Computer Science",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        icon: FaUserTie,
        location: "San Francisco, USA",
        linkedin: "https://linkedin.com/in/michael-chen",
        twitter: "https://twitter.com/michaelchen",
        github: "https://github.com/michaelchen",
        experience: "18+ years"
    },
    {
        name: "Prof. Emily Rodriguez",
        role: "Faculty Advisor",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        icon: FaChalkboardTeacher,
        location: "Austin, USA",
        linkedin: "https://linkedin.com/in/emily-rodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        github: "https://github.com/emilyrodriguez",
        experience: "12+ years"
    },
    {
        name: "Dr. David Kim",
        role: "Co-Faculty Advisor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        icon: FaUsers,
        location: "Seattle, USA",
        linkedin: "https://linkedin.com/in/david-kim",
        twitter: "https://twitter.com/davidkim",
        github: "https://github.com/davidkim",
        experience: "14+ years"
    },
    {
        name: "Prof. Lisa Thompson",
        role: "Senior Faculty Member",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        icon: FaStar,
        location: "Boston, USA",
        linkedin: "https://linkedin.com/in/lisa-thompson",
        twitter: "https://twitter.com/lisathompson",
        github: "https://github.com/lisathompson",
        experience: "16+ years"
    },
    {
        name: "Dr. James Wilson",
        role: "Research Coordinator",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        icon: FaGraduationCap,
        location: "Chicago, USA",
        linkedin: "https://linkedin.com/in/james-wilson",
        twitter: "https://twitter.com/jameswilson",
        github: "https://github.com/jameswilson",
        experience: "20+ years"
    }
];