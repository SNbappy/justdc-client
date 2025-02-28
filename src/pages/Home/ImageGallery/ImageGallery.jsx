import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight, FaCaretLeft, FaCaretRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const images = [
    "https://daffodilvarsity.edu.bd/gallery/february-2022/71e65aef92fe72ca521c5b0b5a8789c8.webp",
    "https://daffodilvarsity.edu.bd/gallery/february-2022/e81e760dd28b5bfa07d7c8ba0f9b0344.webp",
    "https://daffodilvarsity.edu.bd/gallery/february-2022/e9ac09beaf46b8f65152c31a52778b26.webp",
    "https://daffodilvarsity.edu.bd/gallery/february-2022/7857dcf23f7ec50314485f2c4db6ef10.webp",
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

    return (
        <div className="w-full">
            {/* Image Grid */}
            <div className="flex w-full">
                {images.map((img, index) => (
                    <div key={index} className="relative w-1/4">
                        {/* Image */}
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="object-cover w-full cursor-pointer h-[350px]"
                            onClick={() => openModal(index)}
                        />

                        {/* Hover Icon */}
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100"
                            onClick={() => openModal(index)}
                        >
                            <div className="  bg-[#fdb714] p-4">
                                <FaInstagram className="text-white " />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
            {/* Modal */ }
    <AnimatePresence>
        {selectedImage && (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="relative flex items-center justify-center w-full h-full">
                    {/* Close Button (Outside Image, Top-Right) */}
                    <button
                        className="absolute top-0 right-0 z-50 p-3 text-white rounded-full"
                        onClick={closeModal}
                    >
                        <FaTimes className="opacity-70" />
                    </button>

                    {/* Previous Button */}
                    <button
                        className="absolute text-white left-5"
                        onClick={prevImage}
                    >
                        <IoMdArrowDropleft className="text-6xl opacity-60 hover:opacity-100" />
                    </button>

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
                    <button
                        className="absolute text-white right-5"
                        onClick={nextImage}
                    >
                        <IoMdArrowDropright className="text-6xl opacity-60 hover:opacity-100" />
                    </button>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
        </div >
    );
};

export default ImageGallery;
