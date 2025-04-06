import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const testimonials = [
    {
        name: "Aruneka Haque Shamma",
        position: "Alumni",
        text: "নিজের অনেক স্বপ্নের ক্লাব কে যখন এতো সুন্দরভাবে এগিয়ে যেতে দেখি, দারুণ সব আয়োজন, অসংখ্য অর্জন দেখে কি যে শান্তি লাগে!!! অনেক শুভকামনা, ক্লাব এগিয়ে যাক বহুদূর",
        image: "Reviews/Aruneka.jpg",
    },
    {
        name: "MD ATIF-UL-ISLAM NOOR",
        position: "Alumni",
        text: "যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের বিতর্ক ক্লাব এমন একটি অংগন হিসেবে গড়ে উঠছে, যেখানে সবাই নিজস্ব মননশীলতার বহিঃপ্রকাশ ঘটিয়ে নিজেদেরকে উন্নত করছে এবং সুদুর ভবিষ্যতে দেশের যেকোন বিতর্ক অংগনকে ছাড়িয়ে দেশের মধ্যে একটি আলাদা নিজস্ব পরিচয় বহন করবে বলে আমি আশা ব্যক্ত করছি।",
        image: "Reviews/Atif.jpg",
    },
    {
        name: "Mutaleb Hossain",
        position: "Organizing Secretary",
        text: "২০২২ সালে প্রথম বর্ষে যখন আমি বিশ্ববিদ্যালয়ে পা রাখি, তখন থেকেই যুক্তিবিদ্যার এই চর্চাগৃহে আমার যাত্রা শুরু হয়। যবিপ্রবি ডিবেট ক্লাব কেবল একটি সংগঠন নয়, এটি দক্ষতার এক প্রশিক্ষণ কেন্দ্র। যুক্তি, বিশ্লেষণ, বক্তৃতা—এসবের অনুশীলনের মাধ্যমে যে কেউ নিজেকে এক নতুন রূপে আবিষ্কার করতে পারে।",
        image: "Reviews/Mutaleb.jpg",
    },
    {
        name: "Nayem Zaman",
        position: "Alumni",
        text: "যুক্তি, চিন্তাশক্তি এবং আত্মবিশ্বাসের এক অনন্য মঞ্চ হলো JUST ডিবেট ক্লাব। এখানে বিতর্কগুলো সুচিন্তিত, আকর্ষণীয় এবং সমালোচনামূলক চিন্তাকে উৎসাহিত করে। আত্মবিশ্বাস তৈরি করতে এবং প্রভাবশালী বক্তা হতে চাইলে এই ক্লাবের অংশ হওয়া অবশ্যই দরকার!",
        image: "Reviews/Nayem.jpg",
    },
    {
        name: "Mostafijur Rahman",
        position: "Member",
        text: "ভার্সিটিতে এসে একমাত্র এই ক্লাবেই যুক্ত হয়েছি। আর জাস্টডিসি আমাকে কখনোই হতাশ করেনি। এই ক্লাবের ইভেন্ট ম্যানেজমেন্ট,অরগানাইজেশান,অ্যাডজুডিকেশন বরাবরই আমাকে মুগ্ধ করেছে এবং অন্যান্য ক্লাব থেকে এটাকে অনন্য করে তুলেছে। সর্বোপরি এই জাস্টডিসি কে আমি নিজে Own করি এবং এর উত্তরোত্তর সাফল্য কামনা করি।",
        image: "Reviews/Mostafij.jpg",
    },
    {
        name: "Maisha Rahman",
        position: "Alumni",
        text: "জাস্ট ডিসি-র সাথে আমার সম্পর্কটা স্রেফ ভালবাসা এবং আবেগের। এই ক্লাবের সাথে থেকে যতকিছু শিখেছি, সেগুলো আমার সারাজীবনের সম্পদ এবং পথ চলার দিকনির্দেশনা। দোয়া করি প্রিয় জাস্ট ডিসি কে অনন্য উচ্চতায় নিয়ে যাবে স্নেহের অনুজেরা। ভাল থাকুক ভালোবাসার জাস্ট ডিসি।",
        image: "Reviews/maisha.jpg",
    },
    {
        id: 6,
        name: "Shahbaz Ahmed",
        position: "Publication Secretary",
        text: "ডিবেট ক্লাব কেবলমাত্র বিতার্কিকদের জন্যই নয়; এটি একটি সমন্বিত প্ল্যাটফর্ম, যেখানে গল্প, পরিকল্পনা এবং সৃষ্টিশীলতার একত্র অভিব্যক্তি ঘটে। প্রকাশনা, ডিজাইন কিংবা আয়োজন ব্যবস্থাপনায় আগ্রহী সদস্যদের আন্তরিক অংশগ্রহণই গঠন করে সংগঠনের ভিত। প্রতিটি সফল আয়োজনের অন্তরালে থাকে অনেক নিঃশব্দ প্রচেষ্টা ও গভীর নিষ্ঠা।",
        image: "Reviews/Ricky.jpg",
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
        <div className="pt-16 max-w-[1250px] mx-auto md:px-4">
            <div className="font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-center text-[26px] w-4/5 mx-auto">
                What Our Community Says
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
            {/* <p className="mt-4 mb-10 text-lg max-w-[900px] mx-auto text-center w-4/5">
                Our alumni and members share their experiences, insights, and memories from their journey with us. Their words reflect the impact, learning, and growth they have gained through our community.
            </p> */}
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
                            className={`flex items-center md:px-4 rounded-lg transition-all duration-300 my-10 ${index === activeIndex ? "opacity-100 transform-none" : "opacity-20 transform-none"}`}
                            style={{
                                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                                width: "90%",
                                maxWidth: "600px",
                            }}
                        >
                            <div className="flex justify-between gap-8 md:flex-row md:text-left">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mt-14 md:w-24 md:h-24"
                                />
                                <div>
                                    <FaQuoteLeft className="text-8xl mb-[-50px] text-[rgba(216,17,89,1)] opacity-10" />
                                    <p className="mt-4 text-lg md:text-xl">{testimonial.text}</p>
                                    <h3 className="mt-4 text-lg font-semibold md:text-xl">{testimonial.name}</h3>
                                    <h3>{testimonial.position}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mx-auto">
                <NavLink to="/testimonials" className="px-6 py-2 text-white bg-[#003366] rounded-full hover:bg-[#004477] uppercase font-sans text-center grid mx-auto max-w-[150px]">
                    View Details
                </NavLink>
           </div>
        </div>
    );
};

export default TestimonialSection;