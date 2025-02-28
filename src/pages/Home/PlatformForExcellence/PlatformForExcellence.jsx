import CountUp from 'react-countup';
import { RxDotFilled } from 'react-icons/rx';

const PlatformForExcellence = () => {
    const stats = [
        {
            title: 'Debates Organized',
            description: 'Regularly hosting events that foster intellectual growth and critical thinking.',
            count: 250,
        },
        {
            title: 'National-Level Recognition',
            description: 'Participating in and excelling at prestigious debate competitions across the country.',
            count: 50,
        },
        {
            title: 'Diverse Community',
            description: 'Bringing together students from a variety of disciplines, united by a shared passion for debate.',
            count: 26,
        },
        {
            title: 'Growth Opportunities',
            description: 'Providing endless opportunities to develop public speaking, leadership, and critical thinking skills.',
            count: 100,
        },
    ];

    const maxCount = Math.max(...stats.map(stat => stat.count));
    const commonDuration = 7;

    return (
        <div>
            <div className="max-w-[1250px] mx-auto text-center pt-16">
                <div className="font-sans text-[40px] font-bold uppercase text-[#003366]">
                    A Platform for Excellence
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
                <div className="grid grid-cols-4 mt-14">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 text-center"
                        >
                            <div className='font-sans'
                                style={{ filter: "drop-shadow(3px 3px 0 white) drop-shadow(6px 6px 0 #fdb714)" }}>
                                <h3 className="text-7xl font-bold text-[#003366]">
                                    <CountUp
                                        start={0}
                                        end={stat.count}
                                        duration={commonDuration}
                                        delay={0}
                                    />
                                    +
                                </h3>
                            </div>
                            <h4
                                className="mt-4 font-sans text-2xl"
                            >
                                {stat.title}
                            </h4>

                            {/* <p className="mt-2 text-gray-600">{stat.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
            <div className='my-16'>
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714]' />
            </div>
        </div>
    );
};

export default PlatformForExcellence;
