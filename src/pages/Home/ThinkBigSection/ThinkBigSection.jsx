import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import myImage from "../../../assets/content_area_pattern_triangle.svg";

const ThinkBigSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (1s)
            once: true, // Ensures animation runs once when scrolled into view
        });
    }, []);

    return (
        <div
            className="mt-[184px] bg-[#003366] text-center pt-36 pb-32"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url(${myImage})`,
            }}
        >
            <div className="max-w-[800px] mx-auto">
                <div
                    className="text-[#fdb714] text-4xl font-semibold font-sans"
                    data-aos="fade-up"
                >
                    Does your voice go unheard? Not here.
                </div>
                <div
                    className="pt-8 text-xl text-white"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    At JUST Debate Club, every voice holds power, and every idea deserves
                    to be heard. We provide a platform where students can express
                    themselves freely, challenge diverse perspectives, and engage in
                    thought-provoking discussions.
                </div>
                <div className="pt-6" data-aos="zoom-in" data-aos-delay="600">
                    <button className="px-6 py-2 rounded-full bg-[#fdb714] hover:bg-[#E38B25] text-xl font-sans uppercase font-semibold text-[#98002E] mt-4">
                        Join Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThinkBigSection;
