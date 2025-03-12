import React from 'react';
import JustdcTodayCard from '../JustdcTodayCard/JustdcTodayCard';

const JustdcToday = () => {
    return (
        <div
            className='max-w-[1250px] mx-auto px-4 sm:px-8 md:px-12 xl:px-0 pt-10 md:pt-20 xl:pt-[90px]'
            
        >
            <div
                className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center'
                >
                JUSTDC Today
            </div>
            <div
                className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"
            ></div>

            <div
                className='px-4 py-16 mt-8 bg-white shadow-md sm:px-8 md:px-12 xl:px-16 rounded-x'
                style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
            >
                <h2
                    className='font-sans text-3xl font-semibold text-[#003366] pb-12'
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
