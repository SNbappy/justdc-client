import React from 'react';
import { motion } from 'framer-motion';

// Title & Content Animation (Faster)
const fadeVariants = {
    hidden: { opacity: 0, y: 30, willChange: "transform, opacity" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

// Image Animation (Less Impact)
const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, willChange: "transform, opacity" },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const OurAchievement = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between max-w-[1250px] mx-auto gap-8 py-10 md:py-20 xl:py-[90px] px-4 sm:px-8 md:px-12 xl:px-0'>
            {/* Left Section */}
            <div className='lg:w-1/2'>
                {/* Title */}
                <h2
                    className='font-sans text-[40px] font-bold uppercase text-[#003366]'
                >
                    Our Achievements
                </h2>

                {/* Divider */}
                <div
                    className="w-[140px] h-[3px] bg-[#fdb714] mt-6"
                ></div>

                {/* Paragraph */}
                <p
                    className='text-xl py-9'
                    
                >
                    The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.
                </p>

                {/* Button */}
                <button
                    className="bg-[#003366] border-none rounded-full px-10 py-4 font-sans uppercase font-semibold text-white hover:bg-[#002855] transition-all"
                    
                >
                    See All Achievements
                </button>
            </div>

            {/* Right Section - Image */}
            <div
                className='lg:w-1/2'
                
            >
                <img className='rounded-xl brightness-110' src="achievement-khulna.JPG" alt="Achievements" />
            </div>
        </div>
    );
};

export default OurAchievement;
