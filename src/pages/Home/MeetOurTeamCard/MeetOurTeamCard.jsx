import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const MeetOurTeamCard = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            role: "Debate Coach",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Team Captain",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 3,
            name: "Alice Johnson",
            role: "Event Coordinator",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 4,
            name: "Bob Brown",
            role: "Public Relations",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 5,
            name: "John Doe",
            role: "Debate Coach",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 6,
            name: "Jane Smith",
            role: "Team Captain",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 7,
            name: "Alice Johnson",
            role: "Event Coordinator",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 8,
            name: "Bob Brown",
            role: "Public Relations",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
    ];

    // Function to render social media icons
    const renderIcon = (platform) => {
        switch (platform) {
            case "twitter":
                return <FaTwitter className="text-sm" />;
            case "facebook":
                return <FaFacebookF className="text-sm" />;
            case "google":
                return <FaGooglePlusG className="text-md" />;
            case "instagram":
                return <FaInstagram className="text-sm" />;
            default:
                return null;
        }
    };

    return (
        <section className="px-4 py-8">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                    // pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative group">
                            {/* Image Section */}
                            <div className="relative overflow-hidden max-h-[380px] w-full">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full transition-all duration-500 hover:brightness-[120%] brightness-[70%] group-hover:scale-110"
                                />
                                {/* Social Icons - Appears on Hover */}
                                <ul className="absolute bottom-[-50px] w-full flex justify-center items-center space-x-5 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-2">
                                    {member.socials.map((social, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={social.link}
                                                className="text-xl text-yellow-300 transition-colors duration-300 hover:text-yellow-400"
                                            >
                                                {renderIcon(social.platform)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Name and Position - Always Visible */}
                            <div className="py-2 text-center border rounded-b-lg border-1">
                                <h3 className="font-sans text-2xl font-bold uppercase">
                                    {member.name}
                                </h3>
                                <p className="font-light text-[#FDB714]">{member.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MeetOurTeamCard;
