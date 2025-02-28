import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
    {
        name: "Mr. Mohamed Mizanur Rahman",
        text: "We are overwhelmed with the generosity, hospitality, and honor JUST Debate Club has shown to us... sssss sssssss sssssssssssssssss ssssssssssssssssssss",
        image: "/src/assets/Executive members/bappy.JPG",
    },
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(testimonials.length / 2));

    return (
        <div className="py-12 max-w-[1250px] mx-auto">
            <div className="font-sans text-[40px] font-bold uppercase text-[#003366] text-center">
                What Our Community Says
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
            <p className="mt-4 mb-10 text-lg max-w-[900px] mx-auto text-center">
                Our alumni and members share their experiences, insights, and memories from their journey with us. Their words reflect the impact, learning, and growth they have gained through our community.
            </p>
            <div className="mx-auto mt-10">
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
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full font-sans"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 my-10 ${index === activeIndex ? "opacity-100 scale-105" : "opacity-20 scale-90 "
                                }`}
                            style={{
                                transition: "opacity 0.5s, transform 0.5s",
                                width: "600px"
                            }}
                        >
                            <div className="flex items-center justify-between gap-8">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-28 h-28"
                                />
                                <div>
                                    <FaQuoteLeft className="text-8xl mb-[-50px] text-[rgba(216,17,89,1)] opacity-20" />
                                    <p className="mt-4 text-xl">{testimonial.text}</p>
                                    <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <button className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                View Details
            </button> */}
        </div>
    );
};

export default TestimonialSection;
