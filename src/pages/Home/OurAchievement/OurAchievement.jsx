import React from 'react';


const OurAchievement = () => {
    return (
        <div className='flex flex-col xl:flex-row items-center justify-between max-w-[1250px] mx-auto gap-8 pt-10 md:pt-14 lg:pb-14'>
            {/* Left Section */}
            <div className='px-4 text-center xl:w-1/2 xl:text-left sm:px-8 md:px-12 xl:px-0'>
                {/* Title */}
                <h2
                    className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-[26px] w-4/5 mx-auto xl:mx-0'
                >
                    Our Achievements
                </h2>

                {/* Divider */}
                <div
                    className="w-[140px] h-[3px] bg-[#fdb714] mt-6 mx-auto xl:mx-0"
                ></div>

                {/* Paragraph */}
                <p
                    className='text-lg text-gray-600 lg:text-xl py-9'
                    
                >
                    The JUST Debate Club stands as a beacon of excellence and intellectual rigor, proudly showcasing
                    a legacy of triumphs. Over the years, our members have dominated prestigious debating
                    championships at both national and international levels, earning accolades and respect in the
                    debating community.
                </p>

                {/* Button */}
                <button
                    className="bg-[#003366] border-none rounded-full px-10 py-4 font-sans uppercase font-semibold text-white hover:bg-[#002855] transition-all text-xs sm:text-base"
                    
                >
                    See All Achievements
                </button>
            </div>

            {/* Right Section - Image */}
            <div
                className='xl:w-1/2'
            >
                <img className='pt-6 lg:pt-12 xl:rounded-xl brightness-110' src="achievement-khulna.webp" alt="Achievements" />
            </div>
        </div>
    );
};

export default OurAchievement;
