const Footer = () => {
    return (
        <footer className="relative py-12 text-gray-300 bg-gray-900">
            {/* Wave Effect */}
            <div className="absolute top-0 left-0 w-full">
                <svg className="w-full h-16 text-gray-900" viewBox="0 0 1440 320">
                    <path
                        fill="currentColor"
                        d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,154.7C672,149,768,107,864,85.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
                    ></path>
                </svg>
            </div>

            {/* Footer Content */}
            <div className="container relative z-10 px-6 mx-auto lg:px-16">
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
                    {/* JUST Debate Club */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">JUST Debate Club</h2>
                        <p className="mt-2 text-gray-400">Elevate your voice, shape the world.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="transition hover:text-white">Home</a></li>
                            <li><a href="#" className="transition hover:text-white">Events</a></li>
                            <li><a href="#" className="transition hover:text-white">About Us</a></li>
                            <li><a href="#" className="transition hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                        <p className="mt-2 text-gray-400">Jashore University of Science & Technology</p>
                        <p className="text-gray-400">Email: debateclub@just.edu.bd</p>

                        {/* Social Icons */}
                        <div className="flex justify-center mt-4 space-x-4 md:justify-start">
                            <a href="#" className="text-2xl text-gray-400 transition hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-2xl text-gray-400 transition hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-2xl text-gray-400 transition hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-2xl text-gray-400 transition hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-4 mt-6 text-center text-gray-500 border-t border-gray-700">
                    <p>© {new Date().getFullYear()} JUST Debate Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
