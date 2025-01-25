import video from "../../../assets/homevideo2024.mp4";

const Banner = () => {
    return (
        <div className="">
            <video
                src={video}
                className="w-full h-full"
                autoPlay
                muted
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Banner;
