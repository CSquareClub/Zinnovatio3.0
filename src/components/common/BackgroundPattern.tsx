import { motion } from 'framer-motion';

export default function BackgroundPattern() {
    return (
        <>
            <motion.div
                className="absolute top-1/3 right-1/4 opacity-10"
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <path d="M20,20 L20,100 L40,100 L40,80 L80,80 L80,100 L100,100 L100,20 L80,20 L80,40 L40,40 L40,20 Z"
                        fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
                    <text x="60" y="35" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">&lt;/&gt;</text>
                    <text x="60" y="55" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">{"{}"}</text>
                    <text x="60" y="75" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">[]</text>
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-cyan-400/30 rounded-full opacity-15"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                    borderColor: ["rgba(34, 211, 238, 0.3)", "rgba(34, 211, 238, 0.5)", "rgba(34, 211, 238, 0.3)"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-emerald-400/30 rounded-full opacity-12"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.12, 0.25, 0.12],
                    borderColor: ["rgba(16, 185, 129, 0.3)", "rgba(16, 185, 129, 0.5)", "rgba(16, 185, 129, 0.3)"],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Data Stream Lines */}
            <motion.div
                className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-30"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scaleY: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent opacity-25"
                animate={{
                    opacity: [0.25, 0.5, 0.25],
                    scaleY: [1, 1.3, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                }}
            />
        </>
    )
}
