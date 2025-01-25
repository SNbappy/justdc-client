import video from "../../../assets/homevideo2024.mp4";

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
                <div className="font-bold text-center text-white mt-[-540px] font-sans text-9xl drop-shadow-2xl">
                    Unleash Your Voice,<br/>Shape the Future
                </div>
                <div className="flex justify-center gap-5 mt-10">
                    <div>
                        <button className="text-xl font-normal text-white bg-[#98002e] border-none rounded-full px-14 py-4">Our Achievements</button>
                    </div>
                    <div>
                        <button className="text-xl font-normal text-white bg-[#98002e] border-none rounded-full px-14 py-4">Why JUSTDC</button>
                    </div>
                    <div>
                        <button className="text-xl font-normal text-white bg-[#98002e] border-none rounded-full px-14 py-4">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
