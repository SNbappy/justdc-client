import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
    const images = [
        {
            id: 1,
            src: '/public/Gallery/Gallery1.jpg',
            alt: 'Debate Event 1',
            caption: 'Inter-College Debate Competition 2023',
        },
        {
            id: 2,
            src: '/public/Gallery/Gallery2.jpg',
            alt: 'Debate Event 2',
            caption: 'Youth Parliament Session 2023',
        },
        {
            id: 1,
            src: '/public/Gallery/Gallery1.jpg',
            alt: 'Debate Event 1',
            caption: 'Inter-College Debate Competition 2023',
        },
        {
            id: 2,
            src: '/public/Gallery/Gallery2.jpg',
            alt: 'Debate Event 2',
            caption: 'Youth Parliament Session 2023',
        },
        {
            id: 1,
            src: '/public/Gallery/Gallery1.jpg',
            alt: 'Debate Event 1',
            caption: 'Inter-College Debate Competition 2023',
        },
        {
            id: 2,
            src: '/public/Gallery/Gallery2.jpg',
            alt: 'Debate Event 2',
            caption: 'Youth Parliament Session 2023',
        },
    ];

    return (
        <section className="pt-28 pb-16 max-w-[1250px] mx-auto  px-4 sm:px-8 md:px-12 xl:px-0">
            <div className="container">
                <div className="font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px] w-4/5 mx-auto">
                    Gallery
                </div>
                <div className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"></div>
                <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 group-hover:opacity-100">
                                <p className="text-lg font-semibold">{image.caption}</p>
                                <button className="px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100">
                                    View More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;