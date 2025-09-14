// src/components/Dashboard/ProfileView.jsx
import React from 'react';
import { FaEdit, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ProfileView = ({ userProfile, onEdit }) => {
    return (
        <div className="overflow-hidden bg-white shadow-lg rounded-xl">
            {/* Profile Header */}
            <div className="flex flex-col items-center gap-6 p-8 md:flex-row bg-gray-50">
                <div className="relative">
                    <img
                        src={userProfile?.profilePhoto || '/default-avatar.png'}
                        alt="Profile"
                        className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-lg"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="mb-1 text-2xl font-bold text-gray-800">{userProfile?.name}</h2>
                    <p className="mb-3 font-medium text-indigo-600">
                        {userProfile?.title || 'Debate Club Member'}
                    </p>
                    <button
                        onClick={onEdit}
                        className="inline-flex items-center px-4 py-2 text-white transition-colors bg-indigo-500 rounded-lg hover:bg-indigo-600"
                    >
                        <FaEdit className="mr-2" />
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Profile Details */}
            <div className="p-8 space-y-8">
                {/* Personal Information */}
                <div>
                    <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b border-gray-200">
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <FaEnvelope className="mr-3 text-indigo-500" />
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email</label>
                                <p className="text-gray-800">{userProfile?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <FaPhone className="mr-3 text-indigo-500" />
                            <div>
                                <label className="text-sm font-medium text-gray-600">Phone</label>
                                <p className="text-gray-800">{userProfile?.phone || 'Not provided'}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <div className="w-5 h-5 mr-3 bg-indigo-500 rounded"></div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Department</label>
                                <p className="text-gray-800">{userProfile?.department || 'Not specified'}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <div className="w-5 h-5 mr-3 bg-indigo-500 rounded"></div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Student ID</label>
                                <p className="text-gray-800">{userProfile?.studentId || 'Not provided'}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <div className="w-5 h-5 mr-3 bg-indigo-500 rounded"></div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Batch</label>
                                <p className="text-gray-800">{userProfile?.batch || 'Not specified'}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-gray-50">
                            <FaMapMarkerAlt className="mr-3 text-indigo-500" />
                            <div>
                                <label className="text-sm font-medium text-gray-600">Location</label>
                                <p className="text-gray-800">{userProfile?.location || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Debate Experience */}
                <div>
                    <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b border-gray-200">
                        Debate Experience
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-4 rounded-lg bg-indigo-50">
                            <label className="text-sm font-medium text-indigo-600">Experience Level</label>
                            <p className="text-lg font-semibold text-gray-800">
                                {userProfile?.experienceLevel || 'Beginner'}
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-purple-50">
                            <label className="text-sm font-medium text-purple-600">Preferred Formats</label>
                            <p className="text-gray-800">
                                {userProfile?.preferredFormats?.join(', ') || 'Not specified'}
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-green-50">
                            <label className="text-sm font-medium text-green-600">Specialties</label>
                            <p className="text-gray-800">
                                {userProfile?.specialties?.join(', ') || 'Not specified'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <div>
                    <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b border-gray-200">
                        About Me
                    </h3>
                    <div className="p-4 rounded-lg bg-gray-50">
                        <p className="leading-relaxed text-gray-700">
                            {userProfile?.bio || 'No bio available yet. Click "Edit Profile" to add your bio.'}
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b border-gray-200">
                        Social Links
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {userProfile?.socialLinks?.facebook && (
                            <a
                                href={userProfile.socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                <FaFacebook className="mr-2" />
                                Facebook
                            </a>
                        )}
                        {userProfile?.socialLinks?.linkedin && (
                            <a
                                href={userProfile.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-700 rounded-lg hover:bg-blue-800"
                            >
                                <FaLinkedin className="mr-2" />
                                LinkedIn
                            </a>
                        )}
                        {userProfile?.socialLinks?.twitter && (
                            <a
                                href={userProfile.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-400 rounded-lg hover:bg-blue-500"
                            >
                                <FaTwitter className="mr-2" />
                                Twitter
                            </a>
                        )}
                        {(!userProfile?.socialLinks?.facebook && !userProfile?.socialLinks?.linkedin && !userProfile?.socialLinks?.twitter) && (
                            <p className="italic text-gray-500">No social links added yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
