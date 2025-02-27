import React from 'react';
import { motion } from "framer-motion";
import cardImg from "../../../assets/coming_soon.avif";

const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.6 }
    })
};

const JustdcTodayCard = () => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    className="relative transition-all transform rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-[345px]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                >
                    <figure>
                        <img src={cardImg} alt="photo" />
                    </figure>
                    <div className="card-body">
                        <p className='py-2 text-2xl font-medium'>Intra University Debate Competition</p>
                    </div>
                    <div className="absolute top-4 left-4 p-2 font-sans text-white rounded-b-xl max-w-24 bg-[#003366]">
                        <p className="text-center">
                            <span className="text-2xl font-medium">27</span><br />Mar 2025
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default JustdcTodayCard;
