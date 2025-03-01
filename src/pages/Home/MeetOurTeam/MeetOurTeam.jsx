import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    const sectionRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset:200 });

        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting && !isAnimated) {
                    setIsAnimated(true);
                    observerInstance.disconnect(); // Stop observing after first trigger
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isAnimated]); // Stops re-running after the first animation

    return (
        <div ref={sectionRef} className={isAnimated ? 'aos-animate' : ''} data-aos="fade-up">
            {/* Section Title */}
            <div className='text-center mx-auto max-w-[850px] mt-28' data-aos="fade-up" data-aos-delay="200">
                <div className='font-sans text-[40px] font-bold uppercase text-[#003366]'>
                    Meet Our Executive Team
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
                <p className='mt-4 mb-10 text-lg' data-aos="fade-up" data-aos-delay="400">
                    Behind every great debate is a team of passionate leaders. Meet the{' '}
                    <span className='font-bold'>JUST Debate Club</span> Executive Team, committed to fostering a vibrant community of thinkers and communicators.
                </p>
            </div>

            {/* Team Cards Section */}
            <div data-aos="fade-up" data-aos-delay="1000">
                <MeetOurTeamCard />
            </div>
        </div>
    );
};

export default MeetOurTeam;
