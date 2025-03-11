import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS inside useEffect
const OurAchievement = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    }, []);

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between max-w-[1250px] mx-auto gap-8 py-10 md:py-20 xl:py-[90px] px-4 sm:px-8 md:px-12 xl:px-0'>
            {/* Left Section */}
            <motion.div
                className='lg:w-1/2'
                initial="hidden"
                animate="visible"
                data-aos="fade-right"
                data-aos-once="true"  // Ensures AOS triggers only once
            >
                {/* Title */}
                <motion.div
                    className='font-sans text-[40px] font-bold uppercase text-[#003366]'
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    Our Achievements
                </motion.div>

                <motion.div
                    className="w-[140px] h-[3px] bg-[#fdb714] mt-6"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-once="true"
                ></motion.div>

                {/* Paragraph */}
                <motion.p
                    className='text-xl py-9'
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-once="true"
                >
                    The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.
                </motion.p>

                {/* Button */}
                <motion.button
                    className="bg-[#003366] border-none rounded-full px-10 py-4 font-sans uppercase font-semibold text-white"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-once="true"
                >
                    See All Achievements
                </motion.button>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                className='lg:w-1/2'
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-once="true"
            >
                <img className='rounded-xl brightness-110' src="achievement-khulna.JPG" alt="Achievements" />
            </motion.div>
        </div>
    );
};

export default OurAchievement;
