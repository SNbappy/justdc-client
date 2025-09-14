import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome back!",
                    text: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Login Failed",
                    text: "Please check your email and password",
                    showConfirmButton: true
                });
            });
    }

    return (
        <>
            <Helmet>
                <title>Sign In | JUST Debate Club</title>
            </Helmet>

            <div className="flex flex-col justify-center min-h-screen py-12 font-sans bg-slate-50 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Logo/Brand Section */}
                    <div className="text-center">
                        <div className="font-sans lg:text-[30px] font-bold uppercase text-[#003366] text-center text-[26px] w-4/5 mx-auto">
                            JUST Debate Club
                        </div>
                        <p className="font-sans text-base font-normal tracking-wide text-slate-600">
                            Sign in to your account
                        </p>
                    </div>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-8 py-10 bg-white border shadow-lg rounded-xl border-slate-200">
                        <form onSubmit={handleLogin} className="space-y-6">

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold tracking-wide text-slate-700">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="block w-full px-4 py-3 font-sans transition-all duration-200 border rounded-lg appearance-none border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-semibold tracking-wide text-slate-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        className="block w-full px-4 py-3 pr-12 font-sans transition-all duration-200 border rounded-lg appearance-none border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 transition-colors text-slate-400 hover:text-slate-600"
                                    >
                                        <span className="text-lg">{showPassword ? "🙈" : "👁️"}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex items-center justify-end">
                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 tracking-wide"
                                >
                                    Sign In
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-slate-500">New to JUST Debate Club?</span>
                                </div>
                            </div>

                            {/* Sign Up Link */}
                            <div className="text-center">
                                <Link
                                    to="/signup"
                                    className="font-semibold tracking-wide text-blue-600 transition-colors hover:text-blue-700"
                                >
                                    Create your account
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 text-center">
                        <p className="text-sm font-normal leading-relaxed text-slate-600">
                            Join our community of passionate debaters and enhance your critical thinking skills
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
