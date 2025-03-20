import React from 'react';
import cardImg from "../../../assets/Update Music Concept Album.png"

const JustdcTodayCard = () => {
    return (
        <div className='grid justify-center gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3'>
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="relative mx-auto overflow-hidden shadow-lg cursor-pointer rounded-xl hover:shadow-2xl card card-compact justify-items-center group max-w-[420px]"
                >
                    <figure className='overflow-hidden'>
                        <img
                            src={cardImg}
                            alt="photo"
                            className="object-cover w-full h-[259px] transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110"
                        />
                    </figure>
                    <div className="card-body">
                        <p className='py-2 font-sans text-2xl lg:text-2xl text-[#003366] font-bold'>Lorem, ipsum.</p>
                        <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="absolute top-0 left-4 px-3 pb-3 font-sans text-white rounded-b-lg max-w-24 bg-[#003366] text-center">
                        <h1 className='text-[30px] leading-tight'>27</h1>
                        <p className='leading-tight whitespace-nowrap'>Mar 2025</p>
                    </div>
                    <button className='bg-[#003366] text-white font-sans py-2 rounded-b-lg uppercase text-xs sm:text-base'>Learn More</button>
                </div>
            ))}
        </div>
    );
};

export default JustdcTodayCard;
