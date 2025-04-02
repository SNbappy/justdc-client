const About = () => {
    return (
        <div className="px-4 pt-24 pb-10 bg-gray-100 lg:pb-20 lg:pt-36 sm:px-8 md:px-12 xl:px-0">
            <section className="px-6 py-16 text-gray-800 bg-white md:px-12 lg:px-20 max-w-[1250px] mx-auto border shadow-xl   rounded-lg">
                <div className="mx-auto text-center max-w-7xl ">
                    <h2 className="mb-10 font-sans text-4xl font-extrabold text-[#003366] uppercase">About JUST Debate Club</h2>
                    <p className="mb-8 text-lg leading-relaxed">
                        Established in 2018, the JUST Debate Club has become a cornerstone of intellectual engagement at Jashore University of Science and Technology. Our mission is to foster critical thinking, articulate expression, and a passion for informed discourse among students.
                    </p>
                    <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 font-sans text-2xl font-semibold text-[#003366]">Our Achievements</h3>
                            <p className="text-lg leading-relaxed">
                                Our members have consistently excelled in regional and national competitions, earning accolades that reflect our commitment to excellence. Beyond competitions, we organize events like Public Speaking, Rommo Bitorko (a platform for humorous debates), Planchet Debates (a unique debating format), and many more, providing avenues for creative expression and public speaking.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-2xl font-semibold text-[#003366]">Community Engagement</h3>
                            <p className="text-lg leading-relaxed">
                                Beyond debating, we are deeply committed to social causes. We actively participate in fundraising for those in need and engage in environmental initiatives, striving to make a positive impact on our community and beyond.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-lg leading-relaxed">
                            At the JUST Debate Club, we believe in the power of words to inspire change, challenge perspectives, and build a more informed society. Join us in our journey to amplify voices and make a difference.
                        </p>
                    </div>
                </div>
            </section>
       </div>
    );
};

export default About;
