import video from "../../../assets/BannerVid.mp4";

const Banner = () => {
    return (
        <div>
            <video
                src={video}
                className="w-full h-full"
                autoPlay
                muted
            >
                Your browser does not support the video tag.
            </video>

            {/* Overlay and content */}
            <div>
                <div className=" text-center text-white mt-[-520px] font-sans drop-shadow-[0_0_10px_black]">
                    <span className="font-black leading-tight text-9xl">Think Sharp</span><br />
                    <span className="font-bold text-[40px]">Dare to question, debate, and inspire!</span>
                </div>
                <div className="flex justify-center gap-5 mt-10">
                    <div>
                        <button className="text-xl font-sans uppercase text-white font-semibold bg-[#003366] border-none rounded-full px-14 py-4">Our Achievements</button>
                    </div>
                    <div>
                        <button className="text-xl font-sans uppercase text-white font-semibold bg-[#003366] border-none rounded-full px-14 py-4">Why JUSTDC</button>
                    </div>
                    <div>
                        <button className="text-xl font-sans uppercase text-white font-semibold bg-[#003366] border-none rounded-full px-14 py-4">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
