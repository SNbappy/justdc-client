import { FaHandsHelping, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Donate = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 pb-10 text-center bg-gray-100 pt-28">
            <div className="max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
                <h1 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-green-600">
                    <FaHandsHelping className="text-2xl" /> Support Our Cause
                </h1>
                <p className="mb-4 text-lg text-gray-600">
                    The <strong>JUST Debate Club</strong> actively raises funds for <strong>helping the ill</strong> and participating in <strong>social work</strong>.
                    We engage in various <strong>community service activities</strong>, and whenever we need donations for a cause,
                    we will update it here.
                </p>

                <div className="p-4 mb-6 bg-yellow-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-yellow-700">📢 Current Donation Campaign</h2>
                    <p className="text-gray-700">We are currently raising funds to help a student in need of medical treatment. Your support can make a difference.</p>
                </div>

                <p className="mb-6 text-lg text-gray-600">
                    If you are interested in donating, please <strong>contact us</strong>.
                </p>

                <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">📞 Contact Information</h2>
                    <div className="text-left text-gray-700">
                        <p className="font-semibold">🎓 Club President:</p>
                        <p><FaPhoneAlt className="inline-block text-blue-500" /> +8801XXXXXXXXX</p>
                        <p><FaEnvelope className="inline-block text-red-500" /> president@justdebate.com</p>

                        <p className="mt-4 font-semibold">🎓 Club Secretary:</p>
                        <p><FaPhoneAlt className="inline-block text-blue-500" /> +8801XXXXXXXXX</p>
                        <p><FaEnvelope className="inline-block text-red-500" /> secretary@justdebate.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
