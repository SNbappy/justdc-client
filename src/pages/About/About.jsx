const About = () => {
    return (
        <div className="pt-20 bg-gray-50">
            {/* Hero Section */}
            <div className="relative w-full">
                <div>
                    <img
                        src="/public/Hero Section/Gallery.jpg"
                        alt="Gallery Hero"
                        className={`object-cover w-full h-[200px] transition-transform duration-[1500ms] ease-in-out`}
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A7EB4]/50 via-[#6EA8DB]/50 to-[#9EC4EC]/50 mix-blend-multiply backdrop-blur-[4px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto text-center text-white sm:max-w-full lg:pb-0">
                    <h2 className="font-sans text-5xl font-bold uppercase">
                        About JUSTDC
                    </h2>
                    <p className='flex items-center pt-2 text-xl font-semibold'>Home / About</p>
                    {/* <p className="mt-2 font-sans text-xl font-medium">
                        A glimpse into our events, achievements, and the vibrant spirit of the JUST Debate Club.
                    </p> */}
                </div>
            </div>
            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 max-w-[1250px] mx-auto">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold text-[#003366] mb-4">Who We Are</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Since 2018, the JUST Debate Club at Jashore University of Science and Technology has stood as a beacon for student leadership, intellectual curiosity, and advocacy. We are a vibrant community committed to empowering students through critical thought, spirited debate, and impactful communication.
                        </p>
                    </div>
                    <div>
                        <img src="/About/executive together.jpg" alt="Team" className="shadow-lg rounded-xl" />
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="px-6 py-16 bg-white md:px-12">
                <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Our Mission</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To nurture confident speakers and ethical thinkers who lead with integrity, creativity, and conviction — making debates not just competitions, but catalysts for change.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Our Vision</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To establish a community where every student finds their voice and uses it to shape a better society — on campus, in the nation, and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements & Community */}
            <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#f0f8ff] to-white">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Achievements</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Our members have won numerous awards in regional and national tournaments. We regularly host events like Rommo Bitorko, Planchet Debate, JUSTDC Fest, and Inter-University Debate Championships.
                        </p>
                        <ul className="pl-5 mt-4 text-gray-700 list-disc">
                            <li>Top 3 in National Debate Fest 2024</li>
                            <li>Host of JUSTDC Open 2023</li>
                            <li>30+ Active Members Across All Departments</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Community Engagement</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Beyond debates, we engage in blood donation drives, fundraising for disaster relief, and environmental campaigns. JUSTDC believes in giving back to society with action as powerful as our words.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-6 py-16 bg-white md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-[#003366] mb-8">Voices of JUSTDC</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="p-6 bg-gray-100 shadow rounded-xl">
                            <p className="italic text-gray-700">“JUSTDC helped me find my voice and build the confidence to speak on any stage. It's more than a club — it's a family.”</p>
                            <p className="mt-4 font-semibold text-[#003366]">— Tanisha Rahman, Former President</p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow rounded-xl">
                            <p className="italic text-gray-700">“The experiences I gained through JUSTDC shaped my leadership skills and taught me the value of informed discourse.”</p>
                            <p className="mt-4 font-semibold text-[#003366]">— Rifat Ahmed, Debate Coach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline or History (optional) */}
            <section className="px-6 py-16 md:px-12 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-[#003366] mb-8 text-center">Our Journey</h3>
                    <ul className="border-l-4 border-[#003366] pl-6 space-y-6">
                        <li>
                            <span className="font-bold text-[#003366]">2018 —</span> Inception of JUSTDC with 12 founding members.
                        </li>
                        <li>
                            <span className="font-bold text-[#003366]">2020 —</span> First-ever Inter-Departmental Debate Tournament.
                        </li>
                        <li>
                            <span className="font-bold text-[#003366]">2022 —</span> Partnership with National Debate Federation.
                        </li>
                        <li>
                            <span className="font-bold text-[#003366]">2024 —</span> Hosted the largest student-run debate fest in university history.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-[#003366] text-white text-center">
                <h3 className="mb-4 text-3xl font-bold">Join JUSTDC Today</h3>
                <p className="mb-6 text-lg">Be part of a transformative community of thinkers, speakers, and changemakers.</p>
                <a
                    href="/join"
                    className="inline-block px-6 py-3 bg-white text-[#003366] font-semibold rounded-full hover:bg-gray-100 transition"
                >
                    Become a Member
                </a>
            </section>
        </div>
    );
};

export default About;
