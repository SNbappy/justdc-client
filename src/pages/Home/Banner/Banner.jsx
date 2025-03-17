import video from "../../../assets/BannerVid.mp4";

const Banner = () => {
    return (
        <div className="">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-full">
                <video
                    src={video}
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                >
                    Your browser does not support the video tag.
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10 mx-auto text-center text-white sm:max-w-full lg:pb-0">
                    <h2 className="font-sans text-5xl font-black sm:text-7xl md:text-[90px] lg:text-9xl [text-shadow:_4px_4px_0px_black]">
                        Think Sharp
                    </h2>
                    <p className="mt-2 font-sans text-xl font-medium sm:text-2xl md:text-3xl lg:text-[44px] [text-shadow:_3px_3px_0px_black]">
                        Dare to question, debate, and inspire
                    </p>

                    {/* Buttons (Visible in Overlay on Large Screens) */}
                    <div className="hidden gap-6 pt-20 lg:flex">
                        <button className="bg-[#003366] py-3 px-14 rounded-full font-sans uppercase">
                            Our Achievements
                        </button>
                        <button className="bg-[#003366] py-3 px-16 rounded-full font-sans uppercase">
                            Why JUSTDC
                        </button>
                        <button className="bg-[#003366] py-3 px-16 rounded-full font-sans uppercase">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Buttons for Small Screens (Appears as a separate section below the video) */}
            <div className="flex flex-col items-center gap-4 py-8 font-sans lg:hidden md:py-10">
                <button className="w-3/5 sm:w-2/5 md:w-[30%] px-6 py-3 font-medium text-white bg-[#003366] rounded-full hover:bg-red-700 uppercase drop-shadow-xl">
                    Our Achievements
                </button>
                <button className="w-3/5 sm:w-2/5 md:w-[30%] px-6 py-3 font-medium text-white rounded-full bg-[#003366] hover:bg-blue-700 uppercase drop-shadow-xl">
                    Why JUSTDC
                </button>
                <button className="w-3/5 sm:w-2/5 md:w-[30%] px-6 py-3 font-medium text-white bg-[#003366] rounded-full hover:bg-green-700 uppercase drop-shadow-xl">
                    Join Us
                </button>
            </div>
        </div>
    );
};

export default Banner;
