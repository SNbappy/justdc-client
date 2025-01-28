import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const MeetOurTeamCard = () => {
    const teamMembers = [
        {
            name: "Ayman Faiyaz",
            role: "President",
            image: "/src/assets/ayman.jpg",
            socials: [
                { platform: "instagram", link: "#" },
                { platform: "github", link: "#" },
                { platform: "linkedin", link: "#" },
            ],
        },
        {
            name: "Nowsin Jahan Zerin",
            role: "Secretary",
            image: "/src/assets/jerin.jpg",
            socials: [
                { platform: "instagram", link: "#" },
                { platform: "github", link: "#" },
                { platform: "linkedin", link: "#" },
            ],
        },
        {
            name: "Sadeka Shahani Urmee ",
            role: "Treasurer",
            image: "/src/assets/urmee.jpg",
            socials: [
                { platform: "instagram", link: "#" },
                { platform: "github", link: "#" },
                { platform: "linkedin", link: "#" },
            ],
        },
        {
            name: "Md. Sabbir Hossain Bappy",
            role: "Head of IT",
            image: "/src/assets/bappy1.jpg",
            socials: [
                { platform: "instagram", link: "#" },
                { platform: "github", link: "#" },
                { platform: "linkedin", link: "#" },
            ],
        },
    ];

    const renderIcon = (platform) => {
        switch (platform) {
            case "instagram":
                return <FaInstagram />;
            case "github":
                return <FaGithub />;
            case "linkedin":
                return <FaLinkedin />;
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-6 mt-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-purple-700 shadow-2xl w-72 h-96 bg-opacity-60 rounded-xl group"
                    >
                        <div className="w-full h-full">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute bottom-[-160px] w-full h-40 flex flex-col items-center justify-center backdrop-blur-md shadow-inner border border-white/10 rounded-b-xl transition-all duration-500 group-hover:bottom-0">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-white uppercase opacity-0 translate-y-[-20px] transition-transform duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                    {member.name}
                                    <br />
                                    <span className="text-sm font-light normal-case">
                                        {member.role}
                                    </span>
                                </h3>
                            </div>
                            <ul className="flex mt-4 space-x-5 transition-transform duration-700 ease-in-out translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                {member.socials.map((social, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={social.link}
                                            className="text-xl text-white transition-colors duration-300 hover:text-yellow-300"
                                        >
                                            {renderIcon(social.platform)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurTeamCard;
