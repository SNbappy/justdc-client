import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo-pro.jpg";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

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
            <li key={index} className={index === 0 ? "bg-[#740427] rounded-bl-[10px] px-3" : ""}>
                <NavLink to={option.path} className="hover:underline">
                    {option.name}
                </NavLink>
            </li>
        ))
    );

    const renderLargeNavOptions = () => (
        navOptionsLarge.map((option, index) => (
            <li key={index} className="relative">
                {option.subOptions ? (
                    <div className="group">
                        <NavLink to="#" className="flex items-center hover:underline">
                            {option.name}
                            <span className="ml-2 transition-all duration-300 transform group-hover:rotate-180"><FaAngleDown className="font-light" /></span> {/* Caret symbol */}
                        </NavLink>
                        <div className="absolute left-0 hidden w-full bg-white shadow-lg group-hover:block top-10">
                            <ul className="p-2 rounded shadow-lg bg-base-100">
                                {option.subOptions.map((subOption, subIndex) => (
                                    <li key={subIndex}>
                                        <NavLink to={subOption.path} className="p-1 text-lg rounded hover:bg-gray-200">
                                            {subOption.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <NavLink to={option.path} className="hover:underline">
                        {option.name}
                    </NavLink>
                )}
            </li>
        ))
    );

    return (
        <div className="fixed z-50 flex justify-between w-full pl-12 mx-auto mb-10 bg-white shadow-lg">
            <NavLink to="/" className="flex items-center gap-1 font-sans ">
                <img className="w-[100px]" src={logo} alt="logo" />
                <div className="text-red-900 uppercase whitespace-nowrap">
                    <h2 className="xl:text-[20px] leading-[20px] font-semibold">Jashore University of<br />Science & Technology</h2>
                    <h1 className="xl:text-[36px] font-bold leading-[30px]">Debate Club</h1>
                </div>
            </NavLink>
            <div className="grid justify-around">
                <div className="flex justify-between bg-[#98002e] rounded-bl-[10px] mb-6">
                    <div>
                        <ul className="flex gap-10 text-lg font-medium text-white rounded-bl-[10px]">
                            {renderTinyNavOptions()}
                        </ul>
                    </div>
                    <div className="pr-20">
                        <IoSearch className="mt-[7px] font-black text-white " />
                    </div>
                </div>
                <div className="flex items-center justify-between pb-2 pr-12">
                    <ul className="gap-4 pl-10 text-xl menu menu-horizontal">
                        {renderLargeNavOptions()}
                    </ul>
                    <div className="flex gap-4 font-semibold text-[#7D1E27] text-lg">
                        <button className="px-6 py-2 rounded-full bg-[#FDB714] hover:bg-[#E38B25]">Join Us</button>
                        <button className="px-6 py-2 rounded-full bg-[#FDB714] hover:bg-[#E38B25]">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
