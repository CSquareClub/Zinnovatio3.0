import { motion } from "framer-motion";

export default function SectionHeader({ title, highlightWord, description }: { title: string, highlightWord: string, description: string }) {
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">{title} </span>
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">{highlightWord}</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                {description}
            </p>
        </motion.div>
    )
}
