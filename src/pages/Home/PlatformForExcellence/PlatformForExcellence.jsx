import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { RxDotFilled } from 'react-icons/rx';

const PlatformForExcellence = () => {

    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startCount) {
                    setStartCount(true); // Trigger only once
                    observer.disconnect(); // Stop observing after first trigger
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [startCount]); // Depend on startCount to stop re-running

    const stats = [
        { title: 'Debates Organized', count: 250 },
        { title: 'National-Level Recognition', count: 50 },
        { title: 'Diverse Community', count: 26 },
        { title: 'Growth Opportunities', count: 100 },
    ];

    return (
        <div ref={sectionRef}>
            <div className="max-w-[1250px] mx-auto text-center pt-10 md:pt-20 xl:pt-[90px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="font-sans text-[40px] font-bold uppercase text-[#003366]">
                    A Platform for Excellence
                </div>
                <div className="w-[140px] h-[3px] bg-[#fdb714] mt-6 mx-auto"></div>

                {/* Stats Section */}
                <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4 mt-14">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className='font-sans'
                                style={{ filter: "drop-shadow(3px 3px 0 white) drop-shadow(6px 6px 0 #fdb714)" }}>
                                <h3 className="text-7xl font-bold text-[#003366]">
                                    <CountUp
                                        start={0}
                                        end={startCount ? stat.count : 0} // Only counts once
                                        duration={5}
                                    />
                                    +
                                </h3>
                            </div>
                            <h4 className="mt-4 font-sans text-2xl">
                                {stat.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Dots */}
            <div className='pt-[90px]'>
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
            </div>
        </div>
    );
};

export default PlatformForExcellence;