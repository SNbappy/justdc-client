import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // ✅ Add loading state
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            console.log('🚀 Starting signup process...', { email: data.email, name: data.name });

            // Step 1: Create Firebase user
            console.log('📧 Creating Firebase user...');
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log('✅ Firebase user created:', loggedUser.uid);

            // Step 2: Update Firebase profile
            console.log('👤 Updating Firebase profile...');
            await updateUserProfile(data.name, data.photoURL);
            console.log('✅ Firebase profile updated');

            // Step 3: Create user in database
            console.log('💾 Creating user in database...');
            const userInfo = {
                name: data.name,
                email: data.email
            };

            console.log('📤 Sending to backend:', userInfo);
            console.log('🔗 Backend URL:', axiosPublic.defaults.baseURL);

            const response = await axiosPublic.post('/users', userInfo);
            console.log('📥 Backend response:', response.data);

            // ✅ Enhanced response handling
            if (response.data.insertedId) {
                console.log('✅ User successfully added to database with ID:', response.data.insertedId);

                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account created successfully!",
                    text: `Welcome to JUST Debate Club! Your role: ${response.data.role || 'user'}`,
                    showConfirmButton: false,
                    timer: 2000
                });

                // Navigate to dashboard instead of home
                navigate('/dashboard');
            } else if (response.data.message === "User already exists") {
                console.log('ℹ️ User already exists in database');

                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "Account already exists",
                    text: "This email is already registered. Redirecting to dashboard...",
                    showConfirmButton: false,
                    timer: 2000
                });

                navigate('/dashboard');
            } else {
                // Unexpected response format
                console.warn('⚠️ Unexpected response format:', response.data);
                throw new Error('Unexpected response from server');
            }

        } catch (error) {
            console.error('❌ Signup error:', error);

            // Detailed error handling
            let errorMessage = "An error occurred during signup";

            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "This email is already registered. Please use a different email or try logging in.";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "Password is too weak. Please choose a stronger password.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Please enter a valid email address.";
            } else if (error.response) {
                // Backend API error
                errorMessage = error.response.data?.message || `Backend error: ${error.response.status}`;
                console.error('Backend error details:', error.response.data);
            } else if (error.request) {
                // Network error
                errorMessage = "Network error. Please check your internet connection.";
                console.error('Network error:', error.request);
            }

            Swal.fire({
                position: "center",
                icon: "error",
                title: "Signup Failed",
                text: errorMessage,
                showConfirmButton: true
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Account | JUST Debate Club</title>
            </Helmet>

            <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Logo/Brand Section */}
                    <div className="text-center">
                        <div className="font-sans lg:text-[30px] font-bold uppercase text-[#003366] text-center text-[26px] w-4/5 mx-auto">
                            JUST Debate Club
                        </div>
                        <p className="mb-8 text-sm text-gray-600">
                            Create your account to join our community
                        </p>
                    </div>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-6 py-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    disabled={isLoading}
                                    {...register("name", {
                                        required: "Full name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Name must be at least 2 characters"
                                        }
                                    })}
                                    className="block w-full px-3 py-2 placeholder-gray-400 transition-colors border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    disabled={isLoading}
                                    {...register("email", {
                                        required: "Email address is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address"
                                        }
                                    })}
                                    className="block w-full px-3 py-2 placeholder-gray-400 transition-colors border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        disabled={isLoading}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                                message: "Password must include uppercase, lowercase, number, and special character"
                                            }
                                        })}
                                        className="block w-full px-3 py-2 pr-10 placeholder-gray-400 transition-colors border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Create a secure password"
                                    />
                                    <button
                                        type="button"
                                        disabled={isLoading}
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                                    >
                                        {showPassword ? "👁️" : "👁️‍🗨️"}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Photo URL (Optional) */}
                            <div>
                                <label htmlFor="photoURL" className="block mb-1 text-sm font-medium text-gray-700">
                                    Profile Photo URL <span className="text-xs text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    id="photoURL"
                                    type="url"
                                    disabled={isLoading}
                                    {...register("photoURL", {
                                        pattern: {
                                            value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                                            message: "Please enter a valid image URL"
                                        }
                                    })}
                                    className="block w-full px-3 py-2 placeholder-gray-400 transition-colors border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="https://example.com/photo.jpg"
                                />
                                {errors.photoURL && (
                                    <p className="mt-1 text-sm text-red-600">{errors.photoURL.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 mr-2 border-2 rounded-full border-white/30 border-t-white animate-spin"></div>
                                            Creating Account...
                                        </>
                                    ) : (
                                        'Create Account'
                                    )}
                                </button>
                            </div>

                            {/* Terms */}
                            <div className="text-center">
                                <p className="text-xs text-gray-500">
                                    By creating an account, you agree to our{" "}
                                    <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Sign In Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-blue-600 transition-colors hover:text-blue-500"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
