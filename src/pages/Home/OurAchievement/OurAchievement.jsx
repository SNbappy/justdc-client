import React from 'react';
import { motion } from 'framer-motion';
// import achievementImg from "../../../assets/IMG_8118.jpg"

const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from left
    visible: (delay) => ({
        opacity: 1,
        x: 0,
        transition: { delay, duration: 0.6, ease: "easeOut" }
    })
};

const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.9, duration: 0.6, ease: "easeOut" }
    }
};

const OurAchievement = () => {
    return (
        <div className='flex items-center justify-between max-w-[1250px] mx-auto gap-8 mt-20'>
            {/* Left Section */}
            <motion.div
                className='w-1/2'
                initial="hidden"
                animate="visible"
            >
                {/* Title */}
                <motion.div
                    className='font-sans text-[40px] font-bold uppercase text-[#003366]'
                    variants={textVariants}
                    custom={0.2} // Arrives first
                >
                    Our Achievements
                </motion.div>

                <motion.div
                    className="w-24 h-[2px] bg-[#fdb714] mt-6"
                    variants={textVariants}
                    custom={0.3} // Small delay
                ></motion.div>

                {/* Paragraph */}
                <motion.p
                    className='text-xl py-9'
                    variants={textVariants}
                    custom={0.5} // Arrives after title
                >
                    The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.
                </motion.p>

                {/* Button */}
                <motion.button
                    className="text-xl bg-[#fdb714] border-none rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#98002E]"
                    variants={textVariants}
                    custom={0.7} // Arrives last from the left
                >
                    See All Achievements
                </motion.button>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                className='w-1/2'
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <img className='rounded-3xl brightness-110' src="/public/achievement.jpg" alt="Achievements" />
            </motion.div>
        </div>
    );
};

export default OurAchievement;
