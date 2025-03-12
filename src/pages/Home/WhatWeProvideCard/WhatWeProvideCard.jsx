import React from "react";
import cardImg from "../../../assets/382149771_734130685395036_488278925793471851_n.jpg";
import expert from "../../../assets/expert-leading.jpg";
import network from "../../../assets/networking.jpg";
import skill from "../../../assets/skilldev.jpg";

const cardData = [
    { img: expert, title: "Expert-Led Training", description: "Workshops and sessions to enhance public speaking, argumentation, and critical thinking skills." },
    { img: cardImg, title: "Competitive Platforms", description: "Opportunities to participate in local, national, and international debate competitions." },
    { img: skill, title: "Skill Development", description: "Build leadership, teamwork, and problem-solving abilities through engaging activities." },
    { img: network, title: "Networking Opportunities", description: "Connect with like-minded peers, mentors, and professionals from various fields." }
];


const WhatWeProvideCard = () => {
    return (
        <div
            className="grid md:grid-cols-2 xl:grid-cols-4 max-w-[1250px] mx-auto mt-20 gap-7 justify-center px-4 sm:px-8 md:px-12 xl:px-0"
        >
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="mx-auto rounded-md shadow-md  hover:shadow-xl  hover:-translate-y-1 card card-compact max-w-[510px]"
                >
                    <figure className="w-full h-[250px]">
                        <img className="object-cover w-full h-full brightness-125" src={card.img} alt="photo" />
                    </figure>
                    <div className="w-full h-[5px] bg-[#003366]"></div>
                    <div className="card-body">
                        <h2 className="card-title text-[#003366] font-sans lg:text-2xl text-xl">{card.title}</h2>
                        <p className="pb-2 text-lg">{card.description}</p>
                        <div className="pb-2 card-actions">
                            <button className="font-semibold text-white bg-[#003366] border-none rounded-full uppercase font-sans px-6 py-3">Learn More</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhatWeProvideCard;