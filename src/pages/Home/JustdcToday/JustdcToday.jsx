import React from 'react';
import JustdcTodayCard from '../../JustdcTodayCard/JustdcTodayCard';

const JustdcToday = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className='font-sans text-[40px] font-bold uppercase text-[#98002E] text-center pt-24'>
                JUSTDC Today
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"></div>
            <div className='p-16 shadow-xl rounded-xl'>
                <h2 className='font-sans text-3xl font-semibold text-[#98002E] pb-12'>Upcoming Events</h2>
                <JustdcTodayCard />
            </div>
        </div>
    );
};

export default JustdcToday;