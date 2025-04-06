import React from 'react';
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Achievements = () => {
    return (
        <div className='pt-20'>
            {/* <div className="relative overflow-hidden bg-center bg-cover h-80"
                style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?debate')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 py-24 text-center text-white">
                    <h1 className="text-5xl font-bold">Achievements</h1>
                    <p className="mt-4 text-xl">Celebrating our success and dedication in the world of debates!</p>
                </div>
            </div> */}
            <div className="relative w-full">
                <div>
                    <img
                        src="/public/Hero Section/Achievement.JPG"
                        alt="Gallery Hero"
                        className={`object-cover w-full h-[300px] transition-transform duration-[1500ms] ease-in-out`}
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A7EB4]/50 via-[#6EA8DB]/50 to-[#9EC4EC]/50 mix-blend-multiply backdrop-blur-[4px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto text-center text-white sm:max-w-full lg:pb-0">
                    <h2 className="font-sans text-5xl font-black uppercase">
                        JUSTDC Gallery
                    </h2>
                    <p className="mt-2 font-sans text-xl font-medium">
                        A glimpse into our events, achievements, and the vibrant spirit of the JUST Debate Club.
                    </p>
                </div>
            </div>

            {/* Achievements Section */}
            <section className="py-16">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Top Achievements</h2>
                    <p className="mt-4 text-xl text-gray-600">Discover our incredible journey of success and awards.</p>
                    <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}>
                            <FaTrophy className="text-5xl text-[#003366] mx-auto" />
                            <h3 className="mt-6 text-2xl font-semibold">National Debate Championship 2024</h3>
                            <p className="mt-4 text-gray-600">Our team secured the first position in the National Debate Championship, showcasing exceptional oratory and critical thinking skills.</p>
                        </motion.div>
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}>
                            <FaStar className="text-5xl text-[#003366] mx-auto" />
                            <h3 className="mt-6 text-2xl font-semibold">Best Speaker Award</h3>
                            <p className="mt-4 text-gray-600">Recognizing our club members for their outstanding performances in regional and national debates.</p>
                        </motion.div>
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}>
                            <FaMedal className="text-5xl text-[#003366] mx-auto" />
                            <h3 className="mt-6 text-2xl font-semibold">Club Member of the Year</h3>
                            <p className="mt-4 text-gray-600">Honoring the most dedicated and impactful members of the club for their contribution to debates and growth.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Member Recognition Section */}
            <section className="py-16 bg-gray-100">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Member Highlights</h2>
                    <p className="mt-4 text-xl text-gray-600">Celebrating individual excellence in debating!</p>
                    <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
                            <img src="https://source.unsplash.com/1600x900/?person" alt="Member" className="object-cover w-32 h-32 mx-auto rounded-full" />
                            <h3 className="mt-6 text-2xl font-semibold">John Doe</h3>
                            <p className="mt-4 text-gray-600">Winner of the 'Best Debater' title in the 2024 Regional Debate Tournament. A rising star!</p>
                        </motion.div>
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
                            <img src="https://source.unsplash.com/1600x900/?person" alt="Member" className="object-cover w-32 h-32 mx-auto rounded-full" />
                            <h3 className="mt-6 text-2xl font-semibold">Jane Smith</h3>
                            <p className="mt-4 text-gray-600">Recognized for her outstanding research skills and impactful speeches in national debates.</p>
                        </motion.div>
                        <motion.div className="p-6 transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
                            <img src="https://source.unsplash.com/1600x900/?person" alt="Member" className="object-cover w-32 h-32 mx-auto rounded-full" />
                            <h3 className="mt-6 text-2xl font-semibold">Emily Johnson</h3>
                            <p className="mt-4 text-gray-600">Awarded 'Best Newcomer' for her exceptional performance in the debut inter-school debate competition.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-[#003366] text-white py-16 text-center">
                <h2 className="text-3xl font-semibold">Get Involved and Make History</h2>
                <p className="mt-4 text-xl">Join JUSTDC and become a part of our legacy. Reach new heights and achieve greatness!</p>
                <a href="/join" className="mt-6 inline-block bg-yellow-500 text-[#003366] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400">
                    Join Now
                </a>
            </section>
        </div>
    );
};

export default Achievements;
