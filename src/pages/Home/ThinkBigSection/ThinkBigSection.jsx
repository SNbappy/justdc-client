import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../../../assets/content_area_pattern_triangle.svg";

const ThinkBigSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <div
            ref={sectionRef}
            className="bg-[#003366] text-center py-10 md:py-20 px-4 xl:py-28 sm:px-8 md:px-12"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url(${myImage})`,
            }}
        >
            <div className="max-w-[800px] mx-auto">
                <motion.div
                    className="text-[#fdb714] text-3xl md:text-4xl font-semibold font-sans"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Does your voice go unheard? Not here.
                </motion.div>
                <motion.div
                    className="pt-4 text-lg text-white md:pt-8 md:text-xl xl:pt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    At JUST Debate Club, every voice holds power, and every idea deserves to be heard. We provide a platform where students can express themselves freely, challenge diverse perspectives, and engage in thought-provoking discussions.
                </motion.div>
                <motion.div
                    className="pt-4 md:pt-6 xl:pt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
                >
                    <button className="px-6 py-2 rounded-full bg-[#fdb714] hover:bg-[#E38B25] md:text-lg font-sans uppercase font-semibold text-[#003366]">
                        Join Us
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ThinkBigSection;
