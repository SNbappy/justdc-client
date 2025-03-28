import React from "react";
import WhatWeProvideCard from "../WhatWeProvideCard/WhatWeProvideCard";
import { RxDotFilled } from "react-icons/rx";

const WhatWeProvide = () => {
    return (
        <div
            className="pt-14 lg:pt-[90px]"
        >
            <div className="font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px] w-4/5 mx-auto">
                What We Provide
            </div>
            <div className="w-[140px] h-[3px] bg-[#fdb714] mx-auto mt-6"></div>

           
            <div>
                <WhatWeProvideCard />
            </div>

            <div className='pt-[80px]'>
                <RxDotFilled className='mx-auto text-[#fdb714]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
            </div>
        </div>
    );
};

export default WhatWeProvide;