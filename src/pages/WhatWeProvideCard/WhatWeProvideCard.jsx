import React from 'react';
import cardImg from '../../assets/382149771_734130685395036_488278925793471851_n.jpg';

const WhatWeProvideCard = () => {
    return (
        <div className='grid grid-cols-4 max-w-[1250px] mx-auto mt-20 gap-2'>
            <div className="transition-all transform rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-72">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                <div className="w-full h-[5px] bg-[#98002E]"></div>
                <div className="card-body">
                    <h2 className="card-title text-[#98002E] font-sans text-2xl">Expert-Led Training</h2>
                    <p className='py-2 text-lg'>Workshops and sessions to enhance public speaking, argumentation, and critical thinking skills.</p>
                    <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#98002e] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="transition-all transform rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-72">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                <div className="w-full h-[5px] bg-[#98002E]"></div>
                <div className="card-body">
                    <h2 className="card-title text-[#98002E] font-sans text-2xl">Competitive Platforms</h2>
                    <p className='py-2 text-lg'>Opportunities to participate in local, national, and international debate competitions.</p>
                    <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#98002e] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="transition-all transform rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-72">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                <div className="w-full h-[5px] bg-[#98002E]"></div>
                <div className="card-body">
                    <h2 className="card-title text-[#98002E] font-sans text-2xl">Skill Development</h2>
                    <p className='py-2 text-lg'>Build leadership, teamwork, and problem-solving abilities through engaging activities.</p>
                    <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#98002e] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="transition-all transform rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-72">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                <div className="w-full h-[5px] bg-[#98002E]"></div>
                <div className="card-body">
                    <h2 className="card-title text-[#98002E] font-sans text-2xl">Networking Opportunities</h2>
                    <p className='py-2 text-lg'>Connect with like-minded peers, mentors, and professionals from various fields.</p>
                    <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#98002e] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvideCard;