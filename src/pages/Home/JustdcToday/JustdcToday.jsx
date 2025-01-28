import React from 'react';
import JustdcTodayCard from '../../JustdcTodayCard/JustdcTodayCard';

const JustdcToday = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center'>
                JUSTDC Today
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"></div>
            <div
                className='p-16 mt-8 bg-white shadow-md rounded-xl'
                style={{
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                }}
            >
                <h2 className='font-sans text-3xl font-semibold text-[#003366] pb-12'>Upcoming Events</h2>
                <JustdcTodayCard />
            </div>

        </div>
    );
};

export default JustdcToday;