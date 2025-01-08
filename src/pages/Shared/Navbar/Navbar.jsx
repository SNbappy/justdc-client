import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo-pro.jpg";
import { IoSearch } from "react-icons/io5";

const navOptionsTiny = [
    { name: "Notice", path: "/notice" },
    { name: "Executive Members", path: "/executive-members" },
    { name: "Alumni", path: "/alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "Donate", path: "/donate" },
];

const navOptionsLarge = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        subOptions: [
            { name: "Mission", path: "/about/mission" },
            { name: "Vision", path: "/about/vision" },
            { name: "Team", path: "/about/team" },
        ]
    },
    {
        name: "Achievements",
        subOptions: [
            { name: "Awards", path: "/achievements/awards" },
            { name: "Recognition", path: "/achievements/recognition" },
            { name: "Media Coverage", path: "/achievements/media-coverage" },
        ]
    },
    {
        name: "Events",
        subOptions: [
            { name: "Workshops", path: "/events/workshops" },
            { name: "Competitions", path: "/events/competitions" },
            { name: "Guest Lectures", path: "/events/guest-lectures" },
        ]
    },
    {
        name: "Debate",
        subOptions: [
            { name: "Topics", path: "/debate/topics" },
            { name: "Guideline", path: "/debate/guideline" },
        ]
    },
];

const Navbar = () => {
    const renderTinyNavOptions = () => (
        navOptionsTiny.map((option, index) => (
            <li key={index} className={index === 0 ? "bg-[#740427] rounded-bl-[10px] px-2" : ""}>
                <NavLink to={option.path} className="hover:underline">
                    {option.name}
                </NavLink>
            </li>
        ))
    );

    const renderLargeNavOptions = () => (
        navOptionsLarge.map((option, index) => (
            <li key={index} className="relative text-2xl">
                {option.subOptions ? (
                    <details>
                        <summary className="cursor-pointer hover:underline">{option.name}</summary>
                        <ul className="p-2 rounded shadow-lg bg-base-100">
                            {option.subOptions.map((subOption, subIndex) => (
                                <li key={subIndex}>
                                    <NavLink to={subOption.path} className="p-1 text-lg rounded hover:bg-gray-200">
                                        {subOption.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </details>
                ) : (
                    <NavLink to={option.path} className="hover:underline">
                        {option.name}
                    </NavLink>
                )}
            </li>
        ))
    );

    return (
        <div className="flex justify-between pl-12 mx-auto shadow-lg">
            <NavLink to="/" className="flex items-center gap-1 pt-4 font-sans">
                <img className="w-[100px]" src={logo} alt="logo" />
                <div className="mt-[-18px] text-red-900 uppercase">
                    <h2 className="text-[17px] leading-[20px] font-semibold">Jashore University of<br />Science & Technology</h2>
                    <h1 className="text-[31px] font-bold leading-[30px]">Debate Club</h1>
                </div>
            </NavLink>
            <div className="grid justify-around">
                <div className="flex justify-between bg-[#98002e] rounded-bl-[10px] mb-4">
                    <div>
                        <ul className="flex gap-6 text-lg font-medium text-white rounded-bl-[10px]">
                            {renderTinyNavOptions()}
                        </ul>
                    </div>
                    <div className="pr-20">
                        <IoSearch className="mt-[10px] font-black text-white " />
                    </div>
                </div>
                <div className="flex items-center pr-12">
                    <ul className="pl-10 menu menu-horizontal">
                        {renderLargeNavOptions()}
                    </ul>
                    <div className="flex gap-2 font-semibold text-[#7D1E27] text-lg">
                        <button className="px-6 py-2 rounded-full bg-[#FDB714] hover:bg-[#E38B25]">Join Us</button>
                        <button className="px-6 py-2 rounded-full bg-[#FDB714] hover:bg-[#E38B25]">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;