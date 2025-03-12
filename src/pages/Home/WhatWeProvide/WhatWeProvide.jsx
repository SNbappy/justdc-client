import React from "react";
import WhatWeProvideCard from "../WhatWeProvideCard/WhatWeProvideCard";
import { RxDotFilled } from "react-icons/rx";

const WhatWeProvide = () => {
    return (
        <div
            className="pt-10 md:pt-20 xl:pt-[90px]"
        >
            <div className="font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px]">
                What We Provide
            </div>
            <div className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"></div>

           
            <div>
                <WhatWeProvideCard />
            </div>

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

export default WhatWeProvide;