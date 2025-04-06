import React from 'react';

const alumniData = [
    {
        name: "Ayesha Rahman",
        batch: "2018-2022",
        position: "Former President",
        photo: "/images/ayesha.jpg",
        bio: "Currently pursuing a Master's in International Relations at University of Toronto. Led the team to national championship in 2021.",
    },
    {
        name: "Tariq Islam",
        batch: "2017-2021",
        position: "Former General Secretary",
        photo: "/images/tariq.jpg",
        bio: "Now working at UNDP as a policy advisor. Known for his sharp wit and persuasive debating style.",
    },
    {
        name: "Nadia Hossain",
        batch: "2016-2020",
        position: "Debater of the Year 2019",
        photo: "/images/nadia.jpg",
        bio: "Awarded Best Speaker in 3 national competitions. Currently teaching at BRAC University.",
    },
];

const AlumniPage = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    src="/public/Hero Section/Achievement.JPG"
                    alt="Gallery Hero"
                    className="object-cover w-full h-[300px] transition-transform duration-[1500ms] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A7EB4]/50 via-[#6EA8DB]/50 to-[#9EC4EC]/50 mix-blend-multiply backdrop-blur-[4px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                    <h2 className="font-sans text-5xl font-black uppercase">JUSTDC Alumni</h2>
                    <p className="max-w-3xl mt-2 font-sans text-xl font-medium">
                        Celebrating the trailblazers who once led JUST Debate Club with passion, dedication, and unmatched eloquence.
                    </p>
                </div>
            </div>

            {/* Alumni List */}
            <div className="max-w-6xl px-4 py-12 mx-auto space-y-10">
                {alumniData.map((alumni, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-between gap-6 p-6 bg-white shadow-md rounded-2xl md:flex-row"
                    >
                        {/* Image */}
                        <img
                            src={alumni.photo}
                            alt={alumni.name}
                            className="object-cover w-full h-64 rounded-xl md:w-1/3 md:h-56"
                        />

                        {/* Content */}
                        <div className="w-full space-y-2 text-center md:w-2/3 md:text-left">
                            <h3 className="text-2xl font-bold text-gray-800">{alumni.name}</h3>
                            <p className="text-sm text-gray-600">{alumni.batch} • {alumni.position}</p>
                            <p className="text-gray-700">{alumni.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlumniPage;
