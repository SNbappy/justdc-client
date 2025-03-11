import React from 'react';
import { motion } from 'framer-motion';
import JustdcTodayCard from '../JustdcTodayCard/JustdcTodayCard';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const fadeRightVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const JustdcToday = () => {
    return (
        <motion.div
            className='max-w-[1250px] mx-auto px-4 sm:px-8 md:px-12 xl:px-0 pt-10 md:pt-20 xl:pt-[90px]'
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
        >
            <motion.div
                className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center'
                variants={fadeUpVariant}
            >
                JUSTDC Today
            </motion.div>
            <motion.div
                className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"
                variants={fadeUpVariant}
            ></motion.div>

            <motion.div
                className='px-4 py-16 mt-8 bg-white shadow-md sm:px-8 md:px-12 xl:px-16 rounded-x'
                style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
                variants={fadeUpVariant}
            >
                <motion.h2
                    className='font-sans text-3xl font-semibold text-[#003366] pb-12'
                    variants={fadeRightVariant}
                >
                    Upcoming Events
                </motion.h2>
                <JustdcTodayCard />
                <div className='mt-16'>
                    <button className="rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#003366] flex mx-auto border-2 border-[#003366] hover:bg-[#003366] hover:text-white text-base">See All Events</button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default JustdcToday;
