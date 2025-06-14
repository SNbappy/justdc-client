import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const MeetOurTeamCard = () => {
    const teamMembers = [
        {
            id: 5,
            name: "Mutaleb Hossain",
            role: "President",
            image: "Executive members/Mutaleb.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 6,
            name: "S. M. Nazmus Sakib",
            role: "Cultural Secretary",
            image: "Executive members/Nazmus.jpg",
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
            role: "Treasurer",
            image: "Executive members/Parvez.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },

        // {
        //     id: 1,
        //     name: "Ayman Faiyaz",
        //     role: "President",
        //     image: "Executive members/ayman.jpg",
        //     socials: [
        //         { platform: "twitter", link: "#" },
        //         { platform: "facebook", link: "#" },
        //         { platform: "google", link: "#" },
        //         { platform: "instagram", link: "#" },
        //     ],
        // },
        {
            id: 2,
            name: "Mostafijur Rahaman",
            role: "IT Secretary",
            image: "Executive members/jerin.jpg",
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
            role: "General Secretary",
            image: "Executive members/bappy.JPG",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 8,
            name: "Md Ashraful Haque",
            role: "Head of Content Creation & Brand",
            image: "Executive members/Ashraful.png",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        // {
        //     // id: 9,
        //     // name: "Istiak Quayum",
        //     // role: "Vice President (Administration)",
        //     // image: "Executive members/istiak.jpg",
        //     // socials: [
        //     //     { platform: "twitter", link: "#" },
        //     //     { platform: "facebook", link: "#" },
        //     //     { platform: "google", link: "#" },
        //     //     { platform: "instagram", link: "#" },
        //     // ],
        // },
        // {
        //     // id: 10,
        //     // name: "Nilufar Maharuf",
        //     // role: "Vice President (Debate)",
        //     // image: "Executive members/nilufar.jpg",
        //     // socials: [
        //     //     { platform: "twitter", link: "#" },
        //     //     { platform: "facebook", link: "#" },
        //     //     { platform: "google", link: "#" },
        //     //     { platform: "instagram", link: "#" },
        //     // ],
        // },
        // {
        //     // id: 4,
        //     // name: "Md. Muhaimenul Haque",
        //     // role: "Joint Secretary (Debate)",
        //     // image: "Executive members/prottoy.jpg",
        //     // socials: [
        //     //     { platform: "twitter", link: "#" },
        //     //     { platform: "facebook", link: "#" },
        //     //     { platform: "google", link: "#" },
        //     //     { platform: "instagram", link: "#" },
        //     // ],
        // },

        // {
        //     // id: 11,
        //     // name: "Sadeka Shahani",
        //     // role: "Treasurer",
        //     // image: "Executive members/sadeka.jpg",
        //     // socials: [
        //     //     { platform: "twitter", link: "#" },
        //     //     { platform: "facebook", link: "#" },
        //     //     { platform: "google", link: "#" },
        //     //     { platform: "instagram", link: "#" },
        //     // ],
        // },
        {
            id: 12,
            name: "Shahbaz Ahmed",
            role: "Vice President (Administration)",
            image: "Executive members/Ricky.jpg",
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
            role: "Vice President (Publications)",
            image: "Executive members/farhana.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 14,
            name: "DEWAN MD. TANZILUL HAMIM",
            role: "Head of English Debate",
            image: "Executive members/jubaedur.jpg",
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
            role: "",
            image: "Executive members/faria.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 16,
            name: "MD Asif Karim Alvi",
            role: "Head of Debate and Workshop",
            image: "Executive members/aqeeb.jpg",
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
            role: "Organizing secretary",
            image: "/public/Executive members/Ashik.jpeg",
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
            role: "Vice-president",
            image: "Executive members/atique.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 19,
            name: "Md. Abdullah Al Mamun",
            role: "Executive Member",
            image: "Executive members/Shipla.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        // {
            // id: 20,
            // name: "Shihab Uddin Sarker",
            // role: "Equity Officer",
            // image: "Executive members/shihab.jpg",
            // socials: [
            //     { platform: "twitter", link: "#" },
            //     { platform: "facebook", link: "#" },
            //     { platform: "google", link: "#" },
            //     { platform: "instagram", link: "#" },
            // ],
        // },
        {
            id: 21,
            name: "Rifat Rayhan",
            role: "Event Management Secretary",
            image: "Executive members/rifat.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        // {
            // id: 22,
            // name: "Oyan Chowdhury",
            // role: "Executive Member",
            // image: "Executive members/oyan.jpg",
            // socials: [
            //     { platform: "twitter", link: "#" },
            //     { platform: "facebook", link: "#" },
            //     { platform: "google", link: "#" },
            //     { platform: "instagram", link: "#" },
            // ],
        // },
        {
            id: 23,
            name: "S.M. Fahamid Rahman",
            role: "Communication Secretary",
            image: "Executive members/siam.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 24,
            name: "Mst. Shormili Aktar",
            role: "Publication secretary",
            image: "Executive members/miel.jpg",
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
            role: "Office secretary",
            image: "Executive members/rafid.jpg",
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
            role: "",
            image: "Executive members/raihan.jpg",
            socials: [
                { platform: "twitter", link: "#" },
                { platform: "facebook", link: "#" },
                { platform: "google", link: "#" },
                { platform: "instagram", link: "#" },
            ],
        },
        {
            id: 27,
            name: "Md. Abdulla Hil Maruf Munsi",
            role: "Joint Secretary (publication)",
            image: "Executive members/linta.jpg",
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
            role: "",
            image: "Executive members/jenny.jpg",
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
                    delay: 5000,
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
                            <div className="relative overflow-hidden max-h-[420px] w-full">
                                <img
                                    src={member.image || "Executive members/blank-profile-picture-973460_1280.png"}
                                    alt={member.name}
                                    className="object-cover w-full h-[400px] transition-all duration-100 hover:brightness-110 brightness-[50%] group-hover:scale-110"
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
                                <p className="font-light text-[#fdb714]">{member.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MeetOurTeamCard;
