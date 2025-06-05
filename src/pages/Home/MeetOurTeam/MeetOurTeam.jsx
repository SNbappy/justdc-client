import { RxDotFilled } from 'react-icons/rx';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MeetOurTeam = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-600px" });

    return (
        <div ref={ref}>
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
                className='text-center mx-auto max-w-[850px] mt-20 xl:mt-28'
            >
                <div className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-[26px] w-4/5 mx-auto'>
                    Meet Our Executive Team
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                    className="w-[140px] h-[3px] bg-[#fdb714] my-6 mx-auto"
                ></motion.div>
            </motion.div>

            {/* Cards */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
                <MeetOurTeamCard />
            </motion.div>

            {/* Dots */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className='pt-8'
            >
                {[...Array(9)].map((_, i) => (
                    <RxDotFilled
                        key={i}
                        className={`mx-auto text-[#fdb714] mt-[-3px] ${i > 4 ? 'hidden lg:flex' : ''} ${i === 0 ? 'mt-0' : ''}`}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default MeetOurTeam;
