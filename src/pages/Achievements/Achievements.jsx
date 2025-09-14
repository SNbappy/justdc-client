import React from 'react';
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Achievements = () => {
    return (
        <div className='sm:pt-20 pt-14'>
            {/* Hero */}
            <div className="relative w-full">
                <div>
                    <img
                        src="Hero Section/Gallery.webp"
                        alt="Gallery Hero"
                        className={`object-cover w-full h-[100px] sm:h-[200px] transition-transform duration-[1500ms] ease-in-out`}
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A7EB4]/50 via-[#6EA8DB]/50 to-[#9EC4EC]/50 mix-blend-multiply backdrop-blur-[4px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto text-center text-white sm:max-w-full lg:pb-0">
                    <h2 className="font-sans text-2xl font-bold uppercase sm:text-5xl">
                        JUSTDC Achievements
                    </h2>
                    <p className='flex items-center pt-2 text-lg font-semibold sm:text-xl'>Home / Achievements</p>
                </div>
            </div>

            {/* Achievements Section */}
            <section className="py-16 max-w-[1250px] mx-auto">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Top Achievements</h2>
                    <p className="mt-4 text-xl text-gray-600">Discover our incredible journey of success and awards.</p>
                    <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Achievement Card 1 */}
                        <motion.div
                            className="overflow-hidden transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="Regional.jpg"
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Champion in Khulna Community debate competition</h3>
                                <p className="mt-3 leading-relaxed text-gray-600">ন্যাশনাল ডিবেট ফেডারেশন বাংলাদেশের ষষ্ঠ খুলনা কমিউনিটি বিতর্ক প্রতিযোগিতায় চ্যাম্পিয়ন হয়েছে যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (যবিপ্রবি)। ফাইনালে বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের (বশেমুরবিপ্রবি) ডিবেটিং সোসাইটিকে ১-৩ ব্যালটে হারিয়ে যবিপ্রবির বিতর্ক দল ‘জাস্ট-ডিসি অদম্য ৭১’ বিজয়ী হওয়ার গৌরব অর্জন করে। এ নিয়ে টানা দ্বিতীয়বার চ্যাম্পিয়ন হওয়ার গৌরব অর্জন করেছে যবিপ্রবির দল।
                                </p>
                                {/* <div className="inline-block px-3 py-1 mt-4 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                                    🏆 Champion
                                </div> */}
                            </div>
                        </motion.div>

                        {/* Achievement Card 2 */}
                        <motion.div
                            className="overflow-hidden transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="Champion.jpg"
                                    alt="Best Speaker Award"
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <FaStar className="text-3xl text-blue-400 drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">প্লাস্টিক ব্যবহার ও বাস্তবতা বিতর্ক ২০২৪ | বিশ্ববিদ্যালয় পর্যায়
</h3>
                                <p className="mt-3 leading-relaxed text-gray-600">বিডিএফ- ইউএনডিও - নরওয়ে এম্বাসি কর্তৃক আয়োজিত জাতীয় বিতর্ক প্রতিযোগিতায় ৫ রাউন্ডের ৫ রাউন্ড জয়লাভকরে ৩৬ দলের মধ্যে প্রথম স্থান অধিকার করে JUSTDC-অদম্য ৭১ টপ ব্রেক করে।</p>
                                {/* <div className="inline-block px-3 py-1 mt-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                                    ⭐ Excellence
                                </div> */}
                            </div>
                        </motion.div>

                        {/* Achievement Card 3 */}
                        {/* <motion.div
                            className="overflow-hidden transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="https://source.unsplash.com/400x300/?medal,achievement,recognition"
                                    alt="Member of the Year Medal"
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <FaMedal className="text-3xl text-orange-400 drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Club Member of the Year</h3>
                                <p className="mt-3 leading-relaxed text-gray-600">Honoring the most dedicated members for their contribution to debates and club growth.</p>
                                <div className="inline-block px-3 py-1 mt-4 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
                                    🥇 Recognition
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </section>

            {/* Member Recognition Section */}
            <section className="py-16 bg-gray-100">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Member Highlights</h2>
                    <p className="mt-4 text-xl text-gray-600">Celebrating individual excellence in debating!</p>
                    <h1 className='pt-20 font-bold text-red-500'>Will be updated soon</h1>
                </div>
            </section>

            {/* Call to Action Section */}
            {/* <section className="bg-[#003366] text-white py-16 text-center">
                <h2 className="text-3xl font-semibold">Get Involved and Make History</h2>
                <p className="mt-4 text-xl">Join JUSTDC and become a part of our legacy. Reach new heights and achieve greatness!</p>
                <a href="/join" className="mt-6 inline-block bg-yellow-500 text-[#003366] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400">
                    Join Now
                </a>
            </section> */}
        </div>
    );
};

export default Achievements;
