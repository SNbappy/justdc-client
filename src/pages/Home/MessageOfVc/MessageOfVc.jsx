import React from 'react';

const MessageOfVc = () => {
    return (
        <div className='bg-[#003366]'>
            <div className='max-w-[1250px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-0 py-10 md:py-20 xl:py-28 mx-auto xl:flex hidden'>
                <div className='w-1/2 '>
                    <img className='object-cover rounded-3xl h-[430px]' src="ayman-cover.jpg" alt="" />
                </div>
                <div className='w-1/2 mt-10 ml-[-40px] bg-white rounded-3xl p-16'>
                    <p className='text-2xl'>It is inspiring to see our students use this platform to not
                        only sharpen their communication and reasoning skills but also to address real-world issues with
                        creativity and confidence. The club's remarkable achievements and vibrant community reflect the
                        dedication and talent of its members. My heartfelt best wishes to
                        all its members and their endeavors.</p>
                    <p className='pt-4 font-sans text-2xl font-bold text-right text-[#003366]'>~Ayman Faiyaz</p>
                    <p className='font-sans font-bold text-right text-[#003366]'>President, JUSTDC</p>
                </div>
            </div>
            <div className='px-4 py-10 sm:px-8 md:px-12 xl:px-0 lg:px-20 md:py-20 xl:py-28 xl:hidden'>
                <div className=''>
                    <div className=''>
                        <img className='object-cover w-full h-[300px] rounded-3xl sm:h-[400px] md:h-[500px] lg:h-[600px]' src="ayman-cover.jpg" alt="" />
                    </div>
                    <div className='p-16 bg-white rounded-b-2xl'>
                        <p className='text-2xl'>Welcome to the JUST Debate Club, a place where ideas ignite and voices inspire. Our club is more than just debates—it's a platform for critical thinking, confidence, and leadership. Here, we challenge perspectives, refine arguments, and grow together. Join us in shaping a future where words have the power to create change!</p>
                        <p className='pt-4 font-sans text-2xl font-bold text-right text-[#003366]'>~Ayman Faiyaz</p>
                        <p className='pt-4 font-sans text-2xl font-bold text-right text-[#003366]'>President, JUSTDC</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageOfVc;