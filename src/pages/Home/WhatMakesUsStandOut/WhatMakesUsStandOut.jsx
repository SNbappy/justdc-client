import image from '../../../assets/381979843_734132018728236_564759029073434333_n.jpg'

const WhatMakesUsStandOut = () => {
    return (
        <div className='bg-fixed bg-cover' style={
            {
                backgroundImage: `url(${image})`,
            }
        }>
            <div className='px-4 py-10 bg-white bg-opacity-80 md:py-16 lg:py-[90px] sm:px-8 md:px-12 xl:px-0'>
                <div className='max-w-[970px] mx-auto'>
                    <div className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px] w-3/5 mx-auto'>
                        What Makes Us Stand Out
                    </div>
                    <div className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"></div>
                    <p className='py-8 text-lg text-center text-gray-600 lg:text-xl'>The JUST Debate Club is more than just a platform for debates; it’s a thriving community where passion meets purpose. Unlike
                        others, we prioritize inclusivity, ensuring that every voice is heard and valued, regardless of prior experience. Our dynamic
                        approach blends rigorous training with creative freedom, empowering members to explore new perspectives and challenge
                        conventional thinking. With opportunities to compete on global stages and a focus on personal and intellectual growth, we foster a
                        culture of excellence that inspires innovation and leadership. At JUST Debate Club, we don’t just debate – we create
                        changemakers.</p>
                    <div className='flex flex-col items-center justify-center gap-4 mx-auto font-sans uppercase xl:flex-row'>
                        <div className="w-4/5 md:w-2/5 sm:w-3/5">
                            <button className="rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white w-full text-center">
                                Discover Our Story
                            </button>
                        </div>
                        <div className="w-4/5 md:w-2/5 sm:w-3/5">
                            <button className="rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white  w-full">
                                Meet Our Team
                            </button>
                        </div>
                        <div className="w-4/5 md:w-2/5 sm:w-3/5">
                            <button className="rounded-full px-14 py-4 font-sans uppercase font-semibold text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white  w-full">
                                Become a Member
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatMakesUsStandOut;