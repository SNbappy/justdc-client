import React from 'react';

const MessageOfVc = () => {
    return (
        <div className='bg-[#98002E] py-20 mt-20'>
            <div className='max-w-[1250px] mx-auto flex justify-between items-center gap-4'>
                <div className='w-1/2'>
                    <img src="/src/assets/vc3.jpg" alt="" />
                    <div className='text-center text-white'>
                        Professor Dr. Md. Abdul Mazid<br/>
                        Vice Chancellor<br/>
                        Jashore University of Science and Technology
                        Jashore, Bangladesh
                    </div>
                </div>
                {/* <div>
                    <img className='w-64 mt-[-200px] ml-[100px] align-top' src="/../src/assets/quote-open-yellowOL.svg" alt="" />
                </div> */}
                <div className='p-10 bg-white rounded-lg'>
                    <img className='w-20' src="/../src/assets/quote-open-yellowOL.svg" alt="" />
                    {/* <h2 className='font-sans text-2xl font-bold'>Message from the Vice-Chancellor</h2> */}
                    <p className='py-2 text-xl opacity-80'>It is inspiring to see our students use this platform to not
                        only sharpen their communication and reasoning skills but also to address real-world issues with
                        creativity and confidence. The club's remarkable achievements and vibrant community reflect the
                        dedication and talent of its members. My heartfelt best wishes to
                        all its members and their endeavors.</p>
                    <h2 className='font-sans text-lg font-semibold leading-6 text-right'>- Professor Dr. Md. Abdul Mazid<br/>
                        Vice Chancellor<br/>
                        Jashore University of Science and Technology
                        Jashore, Bangladesh</h2>
                    <img className='items-end w-20' src="/src/assets/quote-close-pink.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MessageOfVc;