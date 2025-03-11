import React from 'react';

const MessageOfVc = () => {
    return (
        <div className='bg-[#003366]'>
            <div className='max-w-[1250px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-0 py-10 md:py-20 xl:py-28 mx-auto xl:flex hidden'>
                <div className='w-1/2 '>
                    <img className='object-cover rounded-3xl h-[430px]' src="ayman-cover.jpg" alt="" />
                    <img src="/public/Quote/quote-open-yellowOL.svg" className="w-[116px] mt-[-510px]" alt="" />
                </div>
                <div className='w-1/2 mt-10 ml-[-40px] bg-white rounded-3xl p-16'>
                    <p className='text-2xl'>Welcome to the JUST Debate Club, where passionate minds come together to engage in thought-provoking discussions. We believe in the power of debate to inspire change, build confidence, and sharpen critical thinking. Join us in shaping ideas, challenging perspectives, and making a lasting impact!</p>
                    <p className='pt-4 font-sans text-2xl font-bold text-right text-[#003366]'>~Ayman Faiyaz</p>
                    <p className='font-sans font-bold text-right text-[#003366]'>President, JUSTDC</p>
                    <svg
                        className="w-[116px] text-sky-500 absolute ml-[450px] mt-14"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 110 85.9"
                    >
                        <path
                            d="M30.5,49.6c0.7-0.2,1.4-0.7,1.9,0s0,1.4-0.4,1.9c-2.7,6.7-7,12.2-12.6,16.9c-2.8,2.5-6.3,4.4-9.5,6.5
      c-2.5,1.6-3,4.4-1.6,6.8c1.2,2.3,3.9,3,6.5,1.9c1.1-0.5,2.1-1.1,3-1.6c7.9-4.7,14.8-10.7,20.7-17.7c11.3-13.5,14.9-28.8,9.9-45.8
      C45,7,33.3,0,21.7,1.8C9.8,3.8,1.4,13.6,1.4,25.7C1.5,41.3,15,52.4,30.5,49.6z M88.4,49.6c0.7-0.2,1.4-0.7,1.9,0s0,1.4-0.4,1.9
      c-2.7,6.7-7,12.2-12.6,16.9c-2.8,2.5-6.3,4.4-9.5,6.5c-2.5,1.6-3,4.4-1.6,6.8c1.2,2.3,3.9,3,6.5,1.9c1.1-0.5,2.1-1.1,3-1.6
      c8-4.7,14.8-10.7,20.8-17.7c11.3-13.5,14.9-28.8,9.8-45.8C102.9,7,91.2,0,79.6,1.8C67.7,3.7,59.3,13.6,59.3,25.7
      C59.6,41.3,73.1,52.4,88.4,49.6z"
                            fill="currentColor"
                        />
                    </svg>
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