import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/svg-bgnai1.svg";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";

const navOptions = [
    { name: "Home", path: "/" },
    { name: "About", path: "/notice" },
    { name: "Achievements", path: "/alumni" },
    {
        name: "Events",
        subOptions: [
            { name: "Upcoming Events", path: "/about/mission" },
            { name: "Past Events", path: "about/vision" },
        ],
    },
    {
        name: "Members",
        subOptions: [
            { name: "Alumni", path: "/debate/topics" },
            { name: "Executive Members", path: "/debate/guideline" },
            { name: "General Members", path: "/debate/guideline" },
        ],
    },
    { name: "Gallery", path: "/donate" },
    { name: "Donate", path: "/donate" },
    
    
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-10 py-2 bg-white shadow-xl md:py-0">
            <nav className="flex items-center justify-between w-full px-4 sm:px-8 md:px-12">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-1 sm:gap-2">
                    <img src={logo} alt="logo" className="w-10 sm:w-14 lg:w-20" />
                    <h1 className="font-extrabold leading-tight uppercase text-xl lg:text-3xl text-[#003366]">JUST Debate Club</h1>
                </NavLink>

                {/* Navigation Links */}
                <ul className="items-center hidden space-x-5 text-lg font-medium xl:flex">
                    {navOptions.map((option, index) => (
                        <li key={index} className="relative group">
                            {option.subOptions ? (
                                <>
                                    <button className="flex items-center gap-1 hover:text-[#003366] hover:underline">
                                        {option.name} <FaAngleDown />
                                    </button>
                                    <ul className="absolute left-0 hidden bg-white shadow-md rounded-md p-2 space-y-1 min-w-[150px] group-hover:block">
                                        {option.subOptions.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <NavLink to={sub.path} className="block px-4 py-2 text-sm hover:bg-gray-200">
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <NavLink to={option.path} className="hover:text-[#003366] hover:underline">
                                    {option.name}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Section (Search & Buttons) */}
                <div className="flex items-center gap-4 font-sans font-semibold uppercase">
                    {/* <IoSearch className="hidden text-2xl cursor-pointer xl:block" /> */}
                    <button className="hidden px-4 py-2 text-sm text-[#003366] uppercase bg-[#fdb714] rounded-full hover:bg-red-700 xl:block">Join Us</button>
                    <NavLink to="/login" className="hidden px-4 py-2 text-sm text-[#003366] bg-[#fdb714] rounded-full xl:block">Sign In</NavLink>
                    {/* Mobile Menu Toggle */}
                    <button className="sm:text-lg lg:text-2xl xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute left-0 flex flex-col items-center w-full py-2 bg-white shadow-md top-12 lg:top-16 xl:hidden">
                        {navOptions.map((option, index) => (
                            <div key={index} className="w-full text-center">
                                {option.subOptions ? (
                                    <details>
                                        <summary className="flex items-center justify-center gap-1 py-2 cursor-pointer lg:text-lg">
                                            {option.name} <FaAngleDown className="text-sm" />
                                        </summary>
                                        <ul className="">
                                            {option.subOptions.map((sub, subIndex) => (
                                                <li key={subIndex}>
                                                    <NavLink to={sub.path} className="block text-sm text-gray-700 hover:bg-gray-200">
                                                        {sub.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <NavLink to={option.path} className="block py-2 font-medium lg:text-lg">
                                        {option.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;