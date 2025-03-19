import React, { useRef } from "react";
import myImage from "../../../assets/content_area_pattern_triangle.svg";

const ThinkBigSection = () => {

    return (
        <div
            className="bg-[#003366] text-center py-7 md:py-20 px-4 xl:py-28 sm:px-8 md:px-12"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url(${myImage})`,
            }}
        >
            <div className="max-w-[800px] mx-auto">
                <div
                    className="text-[#fdb714] text-[26px] lg:text-4xl font-semibold font-sans"
                >
                    Does your voice go unheard? Not here.
                </div>
                <div
                    className="pt-4 text-white 7text-lg lg:text-xl md:pt-8 xl:pt-10"
                >
                    At JUST Debate Club, every voice holds power, and every idea deserves to be heard. We provide a platform where students can express themselves freely, challenge diverse perspectives, and engage in thought-provoking discussions.
                </div>
                <div
                    className="pt-4 md:pt-6 xl:pt-8"
                >
                    <button className="px-6 py-2 rounded-full bg-[#fdb714] hover:bg-[#E38B25] lg: font-sans uppercase font-semibold text-[#003366]">
                        Join Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThinkBigSection;
