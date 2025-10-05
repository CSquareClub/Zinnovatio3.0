import { FaBook, FaBolt, FaCity, FaIndustry, FaHeartbeat, FaRecycle, FaLeaf } from "react-icons/fa";
import type { ITrackThemeData } from "../types/ITrack";



export const trackThemeData: ITrackThemeData[] = [
    {
        id: 1,
        title: "Healthcare Access Revolution",
        sdg: "SDG 3: Good Health & Well-being",
        icon: <FaHeartbeat className="text-red-400" />,
        description: "Develop innovative solutions to improve healthcare accessibility in rural and underserved communities using technology.",
        impact: "Bridge healthcare gaps for millions",
        color: "from-red-500/20 to-red-600/20",
        borderColor: "border-red-400/30",
        participants: 45,
        projects: 12
    },
    {
        id: 2,
        title: "Digital Education Equality",
        sdg: "SDG 4: Quality Education",
        icon: <FaBook className="text-blue-400" />,
        description: "Create platforms that democratize quality education and make learning accessible to students from all socioeconomic backgrounds.",
        impact: "Equal learning opportunities for all",
        color: "from-blue-500/20 to-blue-600/20",
        borderColor: "border-blue-400/30",
        participants: 52,
        projects: 15
    },
    {
        id: 3,
        title: "Clean Energy Innovation",
        sdg: "SDG 7: affordable & Clean Energy",
        icon: <FaBolt className="text-yellow-400" />,
        description: "Design affordable renewable energy solutions and smart grid technologies for sustainable power generation and distribution.",
        impact: "Power the future sustainably",
        color: "from-yellow-500/20 to-yellow-600/20",
        borderColor: "border-yellow-400/30",
        participants: 38,
        projects: 9
    },
    {
        id: 4,
        title: "Future of Work Platform",
        sdg: "SDG 8: Decent Work & Economic Growth",
        icon: <FaIndustry className="text-purple-400" />,
        description: "Build platforms that connect skilled workers with opportunities and create new pathways for economic empowerment.",
        impact: "Create meaningful employment",
        color: "from-purple-500/20 to-purple-600/20",
        borderColor: "border-purple-400/30",
        participants: 41,
        projects: 11
    },
    {
        id: 5,
        title: "Smart Infrastructure Hub",
        sdg: "SDG 9: Industry, innovation & Infrastructure",
        icon: <FaIndustry className="text-indigo-400" />,
        description: "Develop IoT and AI-powered infrastructure solutions for smart cities, transportation, and industrial optimization.",
        impact: "Build resilient infrastructure",
        color: "from-indigo-500/20 to-indigo-600/20",
        borderColor: "border-indigo-400/30",
        participants: 36,
        projects: 10
    },
    {
        id: 6,
        title: "Sustainable Urban Living",
        sdg: "SDG 11: Sustainable Cities & Communities",
        icon: <FaCity className="text-green-400" />,
        description: "Create solutions for smart urban planning, waste management, and community engagement in sustainable city development.",
        impact: "Make cities livable for all",
        color: "from-green-500/20 to-green-600/20",
        borderColor: "border-green-400/30",
        participants: 47,
        projects: 13
    },
    {
        id: 7,
        title: "Circular Economy Solutions",
        sdg: "SDG 12: Responsible Consumption & Production",
        icon: <FaRecycle className="text-teal-400" />,
        description: "Design systems and platforms that promote circular economy principles, waste reduction, and sustainable consumption patterns.",
        impact: "Reduce waste, reuse resources",
        color: "from-teal-500/20 to-teal-600/20",
        borderColor: "border-teal-400/30",
        participants: 33,
        projects: 9
    },
    {
        id: 8,
        title: "Climate Action Network",
        sdg: "SDG 13: Climate Action",
        icon: <FaLeaf className="text-emerald-400" />,
        description: "Develop technologies for climate monitoring, carbon footprint tracking, and community-driven environmental conservation.",
        impact: "Combat climate change together",
        color: "from-emerald-500/20 to-emerald-600/20",
        borderColor: "border-emerald-400/30",
        participants: 29,
        projects: 8
    }
];