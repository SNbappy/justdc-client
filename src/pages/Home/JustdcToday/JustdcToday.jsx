import React from 'react';
import JustdcTodayCard from '../JustdcTodayCard/JustdcTodayCard';

const JustdcToday = () => {
    return (
        <div
            className='lg:max-w-[1110px] xl:max-w-[1250px] mx-auto px-4 sm:px-8 md:px-12 xl:px-0 pt-14 md:pt-20 xl:pt-[60px]'
            
        >
            <div
                className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px]'
                >
                JUSTDC Today
            </div>
            <div
                className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"
            ></div>

            <div
                className='px-3 sm:px-12 md:px-14 py-7 lg:py-16 bg-white shadow-md mt-14  rounded-xl max-w-[510px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1250px] mx-auto'
                style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
            >
                <h2
                    className='font-sans lg:text-3xl font-semibold text-[#003366] pb-10 lg:pb-12 text-[26px] text-center xl:text-left'
                >
                    Upcoming Events
                </h2>
                <JustdcTodayCard />
                <div className='mt-16'>
                    <button className="rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#003366] flex mx-auto border-2 border-[#003366] hover:bg-[#003366] hover:text-white text-base">See All Events</button>
                </div>
            </div>
        </div>
    );
};

export default JustdcToday;
