import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const OurAchievement = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-600px" });

    return (
        <div
            ref={ref}
            className='flex flex-col xl:flex-row items-center justify-between max-w-[1250px] mx-auto gap-8 pt-10 md:pt-14 xl:pb-14'
        >
            {/* Left Section with animation */}
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
                className='px-4 text-center xl:w-1/2 xl:text-left sm:px-8 md:px-12 xl:px-0'
            >
                <h2 className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-[26px] w-4/5 mx-auto xl:mx-0'>
                    Our Achievements
                </h2>

                <div className="w-[140px] h-[3px] bg-[#fdb714] mt-6 mx-auto xl:mx-0"></div>

                <p className='text-lg text-gray-600 lg:text-xl py-9'>
                    The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.
                </p>

                <button className="bg-[#003366] border-none rounded-full px-10 py-4 font-sans uppercase font-semibold text-white hover:bg-[#004477] transition-all text-xs sm:text-base">
                    See All Achievements
                </button>
            </motion.div>

            {/* Right Section - Image with delayed animation */}
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className='xl:w-1/2'
            >
                <img className='xl:rounded-xl brightness-110' src="achievement-khulna.webp" alt="Achievements" />
            </motion.div>
        </div>
    );
};

export default OurAchievement;
