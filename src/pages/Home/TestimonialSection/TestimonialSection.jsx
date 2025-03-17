import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "Executive members/bappy.JPG",
    },
];

function getLen(arr) {
    console.log("I am recounting")
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        count++;
    return count;
}

const TestimonialSection = () => {
    const testimonialCount = useMemo(() => getLen(testimonials), [testimonials]);
    const [activeIndex, setActiveIndex] = useState(Math.floor(testimonialCount / 2));

    return (
        <div className="pt-10 md:pt-20 xl:pt-28 max-w-[1250px] mx-auto px-4">
            <div className="font-sans text-[40px] font-bold uppercase text-[#003366] text-center">
                What Our Community Says
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
            <p className="mt-4 mb-10 text-lg max-w-[900px] mx-auto text-center">
                Our alumni and members share their experiences, insights, and memories from their journey with us. Their words reflect the impact, learning, and growth they have gained through our community.
            </p>
            <div className="mx-auto">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    spaceBetween={100}
                    initialSlide={activeIndex}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="w-full font-sans"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className={`flex items-center p-6 rounded-lg transition-all duration-300 my-10 ${index === activeIndex ? "opacity-100 transform-none" : "opacity-20 transform-none"}`}
                            style={{
                                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                                width: "90%",
                                maxWidth: "600px",
                            }}
                        >
                            <div className="flex items-center justify-between gap-8 text-center md:flex-row md:text-left">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full md:w-28 md:h-28"
                                />
                                <div>
                                    <FaQuoteLeft className="text-8xl mb-[-50px] text-[rgba(216,17,89,1)] opacity-20" />
                                    <p className="mt-4 text-lg md:text-xl">{testimonial.text}</p>
                                    <h3 className="mt-4 text-lg font-semibold md:text-xl">{testimonial.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className="flex px-4 py-2 mx-auto mt-6 text-white bg-[#003366] rounded-lg hover:bg-blue-700">
                View Details
            </button>
        </div>
    );
};

export default TestimonialSection;