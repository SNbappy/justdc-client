import { useState, useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id:1,
        name: "Aruneka Haque Shamma",
        position: "Alumni",
        text: "নিজের অনেক স্বপ্নের ক্লাব কে যখন এতো সুন্দরভাবে এগিয়ে যেতে দেখি, দারুণ সব আয়োজন, অসংখ্য অর্জন দেখে কি যে শান্তি লাগে!!! অনেক শুভকামনা, ক্লাব এগিয়ে যাক বহুদূর",
        image: "Reviews/Aruneka.jpg",
    },
    {
        id:2,
        name: "MD ATIF-UL-ISLAM NOOR",
        position: "Alumni",
        text: "যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের বিতর্ক ক্লাব এমন একটি অংগন হিসেবে গড়ে উঠছে, যেখানে সবাই নিজস্ব মননশীলতার বহিঃপ্রকাশ ঘটিয়ে নিজেদেরকে উন্নত করছে।",
        image: "Reviews/Atif.jpg",
    },
    {
        id:3,
        name: "Mutaleb Hossain",
        position: "Organizing Secretary",
        text: "যবিপ্রবি ডিবেট ক্লাব কেবল একটি সংগঠন নয়, এটি দক্ষতার এক প্রশিক্ষণ কেন্দ্র। যুক্তি, বিশ্লেষণ, বক্তৃতা—এসবের অনুশীলনের মাধ্যমে যে কেউ নিজেকে এক নতুন রূপে আবিষ্কার করতে পারে।",
        image: "Executive members/Mutaleb.jpg",
    },
    {
        id:4,
        name: "Nayem Zaman",
        position: "Alumni",
        text: "JUST ডিবেট ক্লাব যুক্তি, চিন্তাশক্তি এবং আত্মবিশ্বাসের এক অনন্য মঞ্চ। এখানে বিতর্কগুলো সুচিন্তিত, আকর্ষণীয় এবং সমালোচনামূলক চিন্তাকে উৎসাহিত করে।",
        image: "Reviews/Nayem.jpg",
    },
    {
        id:5,
        name: "Maisha Rahman",
        position: "Alumni",
        text: "জাস্ট ডিসি-র সাথে আমার সম্পর্কটা স্রেফ ভালবাসা এবং আবেগের। এই ক্লাবের সাথে থেকে যতকিছু শিখেছি, সেগুলো আমার সারাজীবনের সম্পদ এবং পথ চলার দিকনির্দেশনা। দোয়া করি প্রিয় জাস্ট ডিসি কে অনন্য উচ্চতায় নিয়ে যাবে স্নেহের অনুজেরা। ভাল থাকুক ভালোবাসার জাস্ট ডিসি।",
        image: "Reviews/maisha.jpg",
    },
];

const TestimonialPage = () => {
    return (
        <div className="min-h-screen bg-[#f8f9fa] py-16 px-6 mt-20">
            {/* Page Header */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-semibold text-[#003366] mb-4">What Our Community Says</h1>
                <div className="w-24 h-[3px] bg-[#fdb714] mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Our alumni and members share their experiences, insights, and memories from their journey with us. Their words reflect the impact, learning, and growth they have gained through our community.
                </p>
            </div>

            {/* Testimonial List */}
            <div className="max-w-4xl mx-auto">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-8 mb-8 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full border-4 border-[#fdb714] mr-6"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-[#003366]">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <FaQuoteLeft className="absolute text-[#fdb714] text-6xl -left-8 top-0 opacity-20" />
                            <p className="text-lg text-gray-700">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Back Button */}
            <div className="mt-10 text-center">
                <button
                    className="px-6 py-3 bg-[#003366] text-white rounded-full shadow-lg hover:bg-[#004477] transition-all"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default TestimonialPage;
