import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cardImg from "../../../assets/coming_soon.avif";

const JustdcTodayCard = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    }, []);

    return (
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="relative transition-all transform rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-[500px]"
                    data-aos="fade-up"
                    data-aos-delay={index * 300}
                    data-aos-once="true" // Ensures it animates only once
                >
                    <figure>
                        <img src={cardImg} alt="photo" />
                    </figure>
                    <div className="card-body">
                        <p className='py-2 text-2xl font-medium'>Intra University Debate Competition</p>
                    </div>
                    <div className="absolute top-4 left-4 p-2 font-sans text-white rounded-b-xl max-w-24 bg-[#003366]">
                        <p className="text-center">
                            <span className="text-2xl font-medium">27</span><br />Mar 2025
                        </p>
                    </div>
                    <button className='bg-[#003366] text-white font-sans py-2 rounded-b-lg uppercase'>Learn More</button>
                </div>
            ))}
        </div>
    );
};

export default JustdcTodayCard;
