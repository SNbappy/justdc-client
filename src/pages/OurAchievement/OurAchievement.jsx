import React from 'react';

const OurAchievement = () => {
    return (
        <div className='flex items-center justify-between max-w-[1250px] mx-auto gap-8'>
            <div className='w-1/2'>
                <div className='font-sans text-[40px] font-bold uppercase text-[#98002E]'>
                    Our Achievements
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6"></div>
                <p className='text-xl py-9'>The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.</p>
                <button className="text-xl font-normal text-white bg-[#98002E] border-none rounded-full px-14 py-4">See All Achievements</button>
            </div>
            <div className='w-1/2'>
                <img className='rounded-3xl' src="/src/assets/IMG_8118.JPG" alt="" />
            </div>
        </div>
    );
};

export default OurAchievement;