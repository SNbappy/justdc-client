import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    const sectionRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting && !isAnimated) {
                    setIsAnimated(true);
                    controls.start({
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: 'easeInOut' },
                    });
                    observerInstance.disconnect(); // Stop observing after first trigger
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible (smooth trigger)
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isAnimated, controls]);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className={isAnimated ? 'aos-animate' : ''}
        >
            {/* Section Title */}
            <div className='text-center mx-auto max-w-[850px] mt-28'>
                <div className='font-sans text-[40px] font-bold uppercase text-[#003366]'>
                    Meet Our Executive Team
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
                <p className='mt-4 mb-10 text-lg'>
                    Behind every great debate is a team of passionate leaders. Meet the{' '}
                    <span className='font-bold'>JUST Debate Club</span> Executive Team, committed to fostering a vibrant community of thinkers and communicators.
                </p>
            </div>

            {/* Team Cards Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
            >
                <MeetOurTeamCard />
            </motion.div>
        </motion.div>
    );
};

export default MeetOurTeam;
