import { FaTools, FaFacebook } from "react-icons/fa";

const UnderDevelopmentPage = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-100">
            <div className="max-w-lg p-8 bg-white shadow-lg rounded-2xl">
                <h1 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-red-500">
                    <FaTools className="text-2xl" /> {title} Page Under Development
                </h1>
                <p className="mb-4 text-lg text-gray-600">
                    Something amazing is coming soon! 🎉 We're crafting this page to bring you the best experience. Stay tuned! In the meantime, don’t miss out—explore our latest updates, events, and exciting activities on our official Facebook page! 🚀
                </p>
                <a
                    href="https://www.facebook.com/justdebateclub18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                >
                    <FaFacebook className="mr-2 text-xl" /> Visit Our Facebook Page
                </a>
            </div>
        </div>
    );
};

export default UnderDevelopmentPage;
