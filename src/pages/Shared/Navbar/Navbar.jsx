import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/justdc-fb-min.png";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../../../providers/AuthProvider";

const navOptions = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    {
        name: "Events",
        subOptions: [
            { name: "Upcoming Events", path: "/events" },
            { name: "Past Events", path: "events" },
        ],
    },
    {
        name: "Members",
        subOptions: [
            { name: "Alumni", path: "/alumni" },
            { name: "Executive Members", path: "/executive-members" },
            { name: "General Members", path: "/general-members" },
        ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Donate", path: "/donate" },
];

const menuVariants = {
    hidden: { x: "100%", opacity: 0 }, // ✅ Start from right (out of screen)
    visible: { x: 0, opacity: 1 }, // ✅ Slide to left (into screen)
    exit: { x: "100%", opacity: 0 }, // ✅ Slide back to right when closing
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-10 py-2 bg-white shadow-xl lg:py-0">
            <nav className="flex items-center justify-between w-full px-4 sm:px-8 md:px-12">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-1 sm:gap-2">
                    <img src={logo} alt="logo" className="w-10 sm:w-14 lg:w-20" />
                    <h1 className="font-extrabold leading-tight uppercase text-xl sm:text-2xl lg:text-3xl text-[#003366]">JUST Debate Club</h1>
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
                                    <ul className="absolute left-0 hidden bg-white shadow-md rounded-md p-2 space-y-1 min-w-[150px] group-hover:flex flex-col">
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
                    {user ? <>
                        <Link to="/dashboard/cart" className="hidden px-4 py-2 text-xs lg:text-sm text-[#003366] uppercase bg-[#fdb714] rounded-full md:block hover:bg-[#eab12a]">Dashboard</Link>
                        <button onClick={handleLogOut} className="hidden px-4 py-2 text-xs lg:text-sm text-[#003366] uppercase bg-[#fdb714] rounded-full md:block hover:bg-[#eab12a]">Logout</button>
                    </>
                        :
                        <>
                            <button className="hidden px-4 py-2 text-xs lg:text-sm text-[#003366] uppercase bg-[#fdb714] rounded-full md:block hover:bg-[#eab12a]">Join Us</button>
                            <NavLink to="/login" className="hidden px-4 py-2 text-xs lg:text-sm text-[#003366] bg-[#fdb714] rounded-full md:block hover:bg-[#eab12a]">Sign In</NavLink>

                        </>
                    }
                    {/* Mobile Menu Toggle */}
                    <button className="sm:text-lg lg:text-2xl xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%] md:w-[50%] bg-[#003366] shadow-lg text-white px-6 py-4 flex flex-col z-50"
                        >
                            {/* Close Button (ONLY ONE) */}
                            <button
                                className="self-end mb-4 text-2xl text-white"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaTimes />
                            </button>

                            {navOptions.map((option, index) => (
                                <div key={index} className="w-full">
                                    {option.subOptions ? (
                                        <details>
                                            <summary className="flex items-center gap-1 py-2 cursor-pointer lg:text-lg">
                                                {option.name} <FaAngleDown className="text-sm" />
                                            </summary>
                                            <ul>
                                                {option.subOptions.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={sub.path}
                                                            className="block text-sm hover:bg-gray-200"
                                                            onClick={() => setMenuOpen(false)}
                                                        >
                                                            {sub.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        <NavLink
                                            to={option.path}
                                            className="block py-2 font-medium lg:text-lg"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {option.name}
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;