import { FaCity, FaHeartbeat, FaTractor, FaGraduationCap, FaSolarPanel, FaRocket, FaCogs, FaHandsHelping } from "react-icons/fa";
import type { ITrackThemeData } from "../types/ITrack";

export const trackThemeData: ITrackThemeData[] = [
    {
        id: 1,
        title: "Smart & Sustainable Cities",
        sdg: "SDG 11: Sustainable Cities & Communities",
        icon: <FaCity className="text-green-400" />,
        description: "Encouraging urban innovation in governance, mobility, clean air, waste management, and disaster resilience using IoT, Geospatial technologies, AI, CivicTech, and e-governance solutions.",
        impact: "Build resilient and sustainable urban environments",
        color: "from-green-500/20 to-green-600/20",
        borderColor: "border-green-400/30",
        participants: 50,
        projects: 15
    },
    {
        id: 2,
        title: "AgriTech & Rural Transformation",
        sdg: "SDG 2: Zero Hunger",
        icon: <FaTractor className="text-yellow-400" />,
        description: "Focusing on enhancing farmers' income, water management, supply chains, and rural enterprises through precision farming, drones, soil health monitoring, and fintech solutions.",
        impact: "Empower rural communities and ensure food security",
        color: "from-yellow-500/20 to-yellow-600/20",
        borderColor: "border-yellow-400/30",
        participants: 45,
        projects: 12
    },
    {
        id: 3,
        title: "Healthcare, Wellbeing & Assistive Technologies",
        sdg: "SDG 3: Good Health & Well-being",
        icon: <FaHeartbeat className="text-red-400" />,
        description: "Promoting affordable health solutions, telemedicine, digital health platforms, mental wellness, prosthetics, and assistive technologies to improve healthcare access and quality.",
        impact: "Enhance healthcare accessibility and quality for all",
        color: "from-red-500/20 to-red-600/20",
        borderColor: "border-red-400/30",
        participants: 55,
        projects: 18
    },
    {
        id: 4,
        title: "Education, Skilling & Future of Work",
        sdg: "SDG 4: Quality Education",
        icon: <FaGraduationCap className="text-blue-400" />,
        description: "Driving innovations in personalized learning, employability, and lifelong skilling in alignment with NEP-2020 through EdTech, VR/AR tools, AI tutors, and skill marketplaces.",
        impact: "Prepare workforce for future opportunities",
        color: "from-blue-500/20 to-blue-600/20",
        borderColor: "border-blue-400/30",
        participants: 60,
        projects: 20
    },
    {
        id: 5,
        title: "Energy, Environment & Climate Action",
        sdg: "SDG 7: Affordable & Clean Energy",
        icon: <FaSolarPanel className="text-orange-400" />,
        description: "Supporting clean energy initiatives, climate resilience, sustainability, and conservation efforts using renewable energy technologies, carbon capture, electric vehicles, and circular economy practices.",
        impact: "Transition to sustainable energy and climate resilience",
        color: "from-orange-500/20 to-orange-600/20",
        borderColor: "border-orange-400/30",
        participants: 40,
        projects: 10
    },
    {
        id: 6,
        title: "Defence, Aerospace & National Security",
        sdg: "SDG 16: Peace, Justice & Strong Institutions",
        icon: <FaRocket className="text-gray-400" />,
        description: "Encouraging indigenous solutions in aerospace, defence logistics, cybersecurity, and border security, with a focus on drones, satellite tech, secure communication, and surveillance.",
        impact: "Strengthen national security and technological sovereignty",
        color: "from-gray-500/20 to-gray-600/20",
        borderColor: "border-gray-400/30",
        participants: 35,
        projects: 8
    },
    {
        id: 7,
        title: "Industry 4.0 & Digital Infrastructure",
        sdg: "SDG 9: Industry, Innovation & Infrastructure",
        icon: <FaCogs className="text-purple-400" />,
        description: "Empowering Atmanirbhar Bharat by fostering innovations in smart manufacturing, automation, fintech, logistics, 5G, blockchain, semiconductors, and cyber-physical systems.",
        impact: "Drive industrial innovation and self-reliance",
        color: "from-purple-500/20 to-purple-600/20",
        borderColor: "border-purple-400/30",
        participants: 48,
        projects: 14
    },
    {
        id: 8,
        title: "Social Impact, Inclusion & Governance",
        sdg: "SDG 10: Reduced Inequalities",
        icon: <FaHandsHelping className="text-pink-400" />,
        description: "Solving societal challenges in accessibility, financial inclusion, gender safety, and grassroots governance through GovTech, policy tech, civic inclusion platforms, and safety applications.",
        impact: "Promote social inclusion and equitable governance",
        color: "from-pink-500/20 to-pink-600/20",
        borderColor: "border-pink-400/30",
        participants: 42,
        projects: 11
    }
];