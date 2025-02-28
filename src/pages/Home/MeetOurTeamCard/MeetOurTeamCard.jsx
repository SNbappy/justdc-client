import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {  Autoplay } from "swiper/modules";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const MeetOurTeamCard = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Ayman Faiyaz",
            role: "President",
            image: "/src/assets/Executive members/ayman.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 2,
            name: "Nowshin Jahan Zerin",
            role: "General Secretary",
            image: "/src/assets/Executive members/jerin.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 3,
            name: "Md. Sabbir Hossain Bappy",
            role: "Head of IT",
            image: "/src/assets/Executive members/bappy.JPG",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 4,
            name: "Md. Muhaimenul Haque",
            role: "Joint Secretary (Debate)",
            image: "/src/assets/Executive members/prottoy.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 5,
            name: "Mutaleb Hossain",
            role: "Organising Secretary",
            image: "/src/assets/Executive members/Mutaleb.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 6,
            name: "Tanha Islam",
            role: "Joint Secretary (Administration)",
            image: "",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 7,
            name: "Parvez Nabiul Islam",
            role: "Assistant Treasurer",
            image: "/src/assets/Executive members/Parvez.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 8,
            name: "Ashaba Hossain",
            role: "Office Secretary",
            image: "/src/assets/Executive members/ashaba.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 9,
            name: "Istiak Quayum",
            role: "Vice President (Administration)",
            image: "/src/assets/Executive members/istiak.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 10,
            name: "Nilufar Maharuf",
            role: "Vice President (Debate)",
            image: "/src/assets/Executive members/nilufar.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 11,
            name: "Sadeka Shahani",
            role: "Treasurer",
            image: "/src/assets/Executive members/sadeka.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 12,
            name: "Shahbaz Ahmed",
            role: "Publication Secretary",
            image: "/src/assets/Executive members/Ricky.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 13,
            name: "Farhana Yasmin Sultana",
            role: "Head of Content Creation and Branding",
            image: "",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 14,
            name: "Md. Jubaedur Rahman",
            role: "Head of Debate & Workshop",
            image: "/src/assets/Executive members/jubaedur.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 15,
            name: "Faria Binte Faruque",
            role: "Communication Secretary",
            image: "/src/assets/Executive members/faria.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 16,
            name: "Aaiyaan Aqeeb",
            role: "Head of Corporate & External Affairs",
            image: "/src/assets/Executive members/aqeeb.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 17,
            name: "Md. Ashikul Islam",
            role: "Head of Human Resource Management",
            image: "/src/assets/Executive members/ashik.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 18,
            name: "Md. Atiqur Rahman",
            role: "Head of Event Management",
            image: "/src/assets/Executive members/atique.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 19,
            name: "Shahrin Afrin Shipla",
            role: "Head of Social & Cultural Wing",
            image: "",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 20,
            name: "Shihab Uddin Sarker",
            role: "Equity Officer",
            image: "/src/assets/Executive members/shihab.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 21,
            name: "Rifat Rayhan",
            role: "Executive Member",
            image: "/src/assets/Executive members/rifat.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 22,
            name: "Oyan Chowdhury",
            role: "Executive Member",
            image: "/src/assets/Executive members/oyan.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 23,
            name: "Fahamid Rahman Siam",
            role: "Head of English Wing",
            image: "/src/assets/Executive members/siam.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 24,
            name: "Rukhsana Zaman Miel",
            role: "Equity Officer",
            image: "",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 25,
            name: "Al Shahria Rafid",
            role: "Executive Member",
            image: "/src/assets/Executive members/rafid.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 26,
            name: "Md. Raihan Chowdhury",
            role: "Equity Officer",
            image: "/src/assets/Executive members/raihan.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 27,
            name: "Lamia Majhar Linta",
            role: "Equity Officer",
            image: "/src/assets/Executive members/linta.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 24,
            name: "Lubna Yeasmin Jenny",
            role: "Equity Officer",
            image: "",
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
                                    src={member.image || "/src/assets/Executive members/blank-profile-picture-973460_1280.png"}
                                    alt={member.name}
                                    className="object-cover w-full h-96 transition-all duration-300 hover:brightness-110 brightness-[70%] group-hover:scale-110"
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
                            <div className="py-2 text-center border border-black border-opacity-10 border-y-0">
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
