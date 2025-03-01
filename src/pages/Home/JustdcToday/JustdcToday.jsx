import React, { useEffect } from 'react';
import JustdcTodayCard from '../JustdcTodayCard/JustdcTodayCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JustdcToday = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out', offset:200 });
    }, []);

    return (
        <div className='max-w-[1250px] mx-auto' data-aos="fade-up" data-aos-once="true">
            <div className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center'
                data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                JUSTDC Today
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"
                data-aos="fade-up" data-aos-delay="300" data-aos-once="true"></div>

            <div className='p-16 mt-8 bg-white shadow-md rounded-xl'
                style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
                data-aos="fade-up" data-aos-delay="400" data-aos-once="true">

                <h2 className='font-sans text-3xl font-semibold text-[#003366] pb-12'
                    data-aos="fade-right" data-aos-delay="500" data-aos-once="true">
                    Upcoming Events
                </h2>

                <JustdcTodayCard />
            </div>
        </div>
    );
};

export default JustdcToday;
