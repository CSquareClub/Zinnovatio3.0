import { motion } from "framer-motion";

export default function Particle() {
    return (
        <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => {
                const isDataNode = i % 3 === 0;
                return (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${isDataNode ? 'bg-cyan-400' : 'bg-white'} opacity-50`}
                        style={{
                            width: `${isDataNode ? '3px' : '2px'}`,
                            height: `${isDataNode ? '3px' : '2px'}`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -80, 0],
                            x: [0, Math.random() * 60 - 30, 0],
                            opacity: [0.5, 1, 0.5],
                            scale: [1, isDataNode ? 1.5 : 1.3, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3,
                        }}
                    />
                );
            })}
        </div>
    )
}
