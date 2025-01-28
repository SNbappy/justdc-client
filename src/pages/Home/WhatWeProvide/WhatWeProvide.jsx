import React from 'react';
import WhatWeProvideCard from '../WhatWeProvideCard/WhatWeProvideCard';
import { RxDotFilled } from 'react-icons/rx';

const WhatWeProvide = () => {
    return (
        <div>
            <div className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center pt-24'>
                What We Provide
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"></div>
            <div>
                <WhatWeProvideCard />
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

export default WhatWeProvide;