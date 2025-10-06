import { motion } from 'framer-motion';
import { FaCamera, FaImages, FaEye, FaStar, FaTrophy } from 'react-icons/fa';
import { events, galleryImages } from '../../data/GalleryData';
import type { IEvent, IGalleryImage } from '../../types/IGallery';
import Particle from '../../components/common/Particle';
import BackgroundPattern from '../../components/common/BackgroundPattern';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedBorder from '../../components/common/AnimatedBorder';

export default function GallerySection() {


    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden" id='gallery'>
            <Particle />
            <BackgroundPattern />


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Premium Header */}
                <SectionHeader title='Zinnovatio' highlightWord='Moments' description='A visual journey through innovation, creativity, and unforgettable memories from our hackathon legacy' />

                {/* Enhanced Event Timeline */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                        {events.map((event: IEvent) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                whileHover={{ y: -15 }}
                                className={`cursor-pointer relative p-10 rounded-3xl border backdrop-blur-md transition-all duration-500 bg-gray-800/30 border-gray-700/60
                                    }`}
                            >
                                {event.featured && (
                                    <motion.div
                                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-gray-400 to-white rounded-full flex items-center justify-center shadow-lg"
                                        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <FaStar className="text-gray-900 text-sm" />
                                    </motion.div>
                                )}

                                <div className="text-center">
                                    <div className={`inline-block px-6 py-3 rounded-2xl ${event.highlight} mb-6 shadow-lg`}>
                                        <span className="text-white font-bold text-lg tracking-wide">{event.title}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">{event.year}</h3>
                                    <p className="text-gray-300 text-base mb-6 leading-relaxed">{event.description}</p>
                                    <div className="flex items-center justify-center space-x-6 text-base text-gray-400">
                                        <div className="flex items-center">
                                            <FaImages className="mr-3 text-lg" />
                                            <span>{event.imageCount} Photos</span>
                                        </div>
                                        {event.featured && (
                                            <div className="flex items-center">
                                                <FaTrophy className="mr-3 text-yellow-400 text-lg" />
                                                <span className="text-yellow-400">Featured</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h3 className="text-4xl font-bold text-center mb-16 text-white">
                        <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">Photo Collage</span>
                    </h3>

                    <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
                        {galleryImages.map((image: IGalleryImage, index: number) => {

                            return (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
                                    className={`group relative ${image.size == 'small' ? 'col-span-6 row-span-2' : image.size == 'medium' ? 'col-span-4 row-span-2' : 'col-span-3 row-span-1'} rounded-3xl overflow-hidden bg-gray-800/30 border border-gray-700/60`}
                                >
                                    <div className={`w-full h-full bg-gradient-to-br ${image.event === 'Zinnovatio 1.0' ? 'from-gray-700/30 to-gray-900/30' :
                                        image.event === 'Zinnovatio 2.0' ? 'from-gray-600/30 to-gray-800/30' :
                                            'from-gray-800/30 to-black/30'
                                        } flex items-center justify-center relative p-8`}>
                                        <div className="text-center">
                                            <motion.div
                                                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                <FaCamera className="text-white text-3xl" />
                                            </motion.div>
                                            <p className="text-white font-bold text-lg mb-2">{image.event}</p>
                                            <p className="text-gray-300 text-sm leading-tight">{image.alt}</p>
                                        </div>

                                        {/* Enhanced overlay effects */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                                            <div className="p-6 w-full">
                                                <p className="text-white font-bold text-base mb-2">{image.alt}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <FaEye className="text-gray-300 text-sm mr-2" />
                                                        <span className="text-gray-300 text-sm">View Details</span>
                                                    </div>
                                                    {image.featured && (
                                                        <motion.div
                                                            className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white"
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        >
                                                            Featured
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Premium border effects */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/40 transition-all duration-500"
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >

                    <motion.p
                        className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Be part of Zinnovatio 3.0 and create memories that will last a lifetime
                    </motion.p>
                </motion.div>
            </div>

            <AnimatedBorder />
        </div>
    );
}