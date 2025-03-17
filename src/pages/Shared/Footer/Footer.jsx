import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="pt-16 pb-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="container grid grid-cols-1 gap-12 px-6 mx-auto lg:w-10/12 md:grid-cols-2 xl:grid-cols-4">
                {/* About the Club */}
                <div>
                    <h2 className="mb-4 font-sans text-[22px] font-extrabold uppercase">JUST Debate Club</h2>
                    <p className="leading-relaxed text-gray-300 text-[16px] lg:text-lg">
                        Empowering students to excel in public speaking, critical thinking, and competitive debating.
                        Join us and find your voice!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 font-sans text-[22px] font-bold uppercase">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300 text-[16px] lg:text-lg">
                        {[
                            { name: "About Us", icon: "fas fa-info-circle", href: "#about" },
                            { name: "Upcoming Events", icon: "fas fa-calendar-alt", href: "#events" },
                            { name: "Join Us", icon: "fas fa-users", href: "#join" },
                            { name: "Contact", icon: "fas fa-envelope", href: "#contact" },
                        ].map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="flex items-center transition-all duration-300 ease-in-out hover:text-pink-400">
                                    <i className={`mr-2 ${link.icon}`}></i> {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-4 font-sans text-2xl font-bold uppercase text-[22px]">Contact Us</h3>
                    <p className="flex items-center gap-2 text-gray-300 text-[16px] lg:text-lg">
                        <IoLocationOutline className="font-bold"/>JUST Debate Club Office
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 text-[16px] lg:text-lg py-2">
                        <IoMailOutline />
                        <a href="mailto:justdebateclub2018@gmail.com" className="flex items-center gap-2 hover:text-pink-400">
                           justdebateclub2018@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 text-[16px] lg:text-lg">
                        <IoCallSharp /> +123 456 789
                    </p>
                    <div className="flex mt-4 space-x-4">
                        {["facebook", "x icon", "youtube", "instagram"].map((icon, index) => (
                            <img key={index} className="w-[20px] h-[20px] hover:scale-110 transition-transform" src={`/public/FooterIcon/${icon}.png`} alt={icon} />
                        ))}
                    </div>
                </div>

                {/* Direct Mail Section */}
                <div>
                    <h3 className="mb-4 font-sans text-[22px] font-bold uppercase">Send Us a Message</h3>
                    <form action="mailto:justdebateclub2018@gmail.com" method="post" encType="text/plain" className="space-y-3">
                        <input type="text" placeholder="Your Name" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-[14px]" required />
                        <input type="email" placeholder="Your Email" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-[14px]" required />
                        <textarea placeholder="Your Message" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-[14px]" rows="3" required></textarea>
                        <button type="submit" className="w-full p-2 font-bold text-white transition-all duration-300 bg-[#003366] rounded-md hover:bg-pink-600 text-[14px]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-12 text-center text-gray-500 border-t border-gray-700 text-[14px]">
                <p>© {new Date().getFullYear()} JUST Debate Club. All Rights Reserved.</p>
                <p className="mt-2">
                    Developed by <a href="https://its-bappy.netlify.app" className="font-bold text-blue-400 animate-pulse" target="_blank" rel="noopener noreferrer">Bappy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;