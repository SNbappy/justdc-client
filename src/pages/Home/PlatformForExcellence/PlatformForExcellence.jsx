import CountUp from 'react-countup';

const PlatformForExcellence = () => {
    const stats = [
        {
            title: 'Debates Organized',
            description: 'Regularly hosting events that foster intellectual growth and critical thinking.',
            count: 50, // Example number
        },
        {
            title: 'National-Level Recognition',
            description: 'Participating in and excelling at prestigious debate competitions across the country.',
            count: 20, // Example number
        },
        {
            title: 'Diverse Community',
            description: 'Bringing together students from a variety of disciplines, united by a shared passion for debate.',
            count: 100, // Example number
        },
        {
            title: 'Growth Opportunities',
            description: 'Providing endless opportunities to develop public speaking, leadership, and critical thinking skills.',
            count: 200, // Example number
        },
    ];

    return (
        <div className="py-16">
            <div className="max-w-[1250px] mx-auto text-center">
                <div className='font-sans text-[40px] font-bold uppercase text-[#98002E]'>
                    Our Achievements
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
                <div className="grid grid-cols-4 gap-8 mt-14">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 text-center shadow-lg rounded-2xl"
                        >
                            <h3 className="text-4xl font-extrabold text-[#98002E]">
                                <CountUp end={stat.count} duration={2} />
                                +
                            </h3>
                            <h4 className="mt-4 text-xl font-semibold">
                                {stat.title}
                            </h4>
                            <p className="mt-2 text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlatformForExcellence;
