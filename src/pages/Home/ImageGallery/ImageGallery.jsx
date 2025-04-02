import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaInstagram } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const images = [
    "Gallery/Gallery3.webp",
    "Gallery/Gallery1.webp",
    "Gallery/Gallery4.webp",
    "Gallery/Gallery2.webp",
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const [loadedCount, setLoadedCount] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (loadedCount === images.length) {
            setImagesLoaded(true);
        }
    }, [loadedCount]);

    const handleImageLoad = () => {
        setLoadedCount((prev) => prev + 1);
    };


    return (
        <div className="w-full pt-10 md:pt-20 xl:pt-28">
            {/* Image Grid (Always Rendered) */}
            <div className={`w-full lg:flex transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}>
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative lg:w-1/4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="object-cover w-full cursor-pointer h-[350px]"
                            onClick={() => openModal(index)}
                            onLoad={handleImageLoad}
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100"
                            onClick={() => openModal(index)}
                        >
                            <div className="bg-[#fdb714] p-4">
                                <FaInstagram className="text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="relative flex items-center justify-center w-full h-full"
                        >
                            {/* Close Button (Top-Right) */}
                            <motion.button
                                className="absolute top-0 right-0 z-50 p-3 text-white"
                                onClick={closeModal}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes className="opacity-70" />
                            </motion.button>

                            {/* Previous Button */}
                            <motion.button
                                className="absolute text-white left-5"
                                onClick={prevImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <IoMdArrowDropleft className="text-6xl opacity-80 hover:opacity-100" />
                            </motion.button>

                            {/* Image */}
                            <motion.img
                                key={selectedImage}
                                src={selectedImage}
                                alt="Full View"
                                className="max-w-full max-h-[88vh]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Next Button */}
                            <motion.button
                                className="absolute text-white right-5"
                                onClick={nextImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <IoMdArrowDropright className="text-6xl opacity-80 hover:opacity-100" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageGallery;