import React from "react";
import { motion } from "framer-motion";
import WhatWeProvideCard from "../WhatWeProvideCard/WhatWeProvideCard";
import { RxDotFilled } from "react-icons/rx";

const WhatWeProvide = () => {
    return (
        <motion.div
            className="pt-10 md:pt-20 xl:pt-28"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
            transition={{ duration: 0.8 }}
        >
            <div className="font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px]">
                What We Provide
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"></div>

            <WhatWeProvideCard />

            <div className='pt-10 md:pt-20 xl:pt-28'>
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
        </motion.div>
    );
};

export default WhatWeProvide;