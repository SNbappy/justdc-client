// src/components/Dashboard/ProfileEdit.jsx
import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const ProfileEdit = ({ userProfile, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({
        name: userProfile?.name || '',
        phone: userProfile?.phone || '',
        department: userProfile?.department || '',
        studentId: userProfile?.studentId || '',
        batch: userProfile?.batch || '',
        location: userProfile?.location || '',
        experienceLevel: userProfile?.experienceLevel || 'Beginner',
        preferredFormats: userProfile?.preferredFormats || [],
        specialties: userProfile?.specialties || [],
        bio: userProfile?.bio || '',
        socialLinks: {
            facebook: userProfile?.socialLinks?.facebook || '',
            linkedin: userProfile?.socialLinks?.linkedin || '',
            twitter: userProfile?.socialLinks?.twitter || ''
        }
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('socialLinks.')) {
            const socialField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                socialLinks: {
                    ...prev.socialLinks,
                    [socialField]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleArrayInputChange = (field, value) => {
        const arrayValue = value.split(',').map(item => item.trim()).filter(item => item);
        setFormData(prev => ({
            ...prev,
            [field]: arrayValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/profile`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const updatedProfile = await response.json();
                onUpdate(updatedProfile);
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-hidden bg-white shadow-lg rounded-xl">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
                <p className="mt-1 text-gray-600">Update your information and preferences</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Personal Information */}
                <div>
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-800">
                        <div className="w-2 h-6 mr-3 bg-indigo-500 rounded"></div>
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-700">
                                Department
                            </label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Select Department</option>
                                <option value="CSE">Computer Science & Engineering</option>
                                <option value="EEE">Electrical & Electronic Engineering</option>
                                <option value="CE">Civil Engineering</option>
                                <option value="ME">Mechanical Engineering</option>
                                <option value="IPE">Industrial & Production Engineering</option>
                                <option value="TE">Textile Engineering</option>
                                <option value="PME">Petroleum & Mining Engineering</option>
                                <option value="CFPE">Chemical & Food Process Engineering</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="studentId" className="block mb-2 text-sm font-medium text-gray-700">
                                Student ID
                            </label>
                            <input
                                type="text"
                                id="studentId"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="batch" className="block mb-2 text-sm font-medium text-gray-700">
                                Batch
                            </label>
                            <input
                                type="text"
                                id="batch"
                                name="batch"
                                value={formData.batch}
                                onChange={handleInputChange}
                                placeholder="e.g., 2021-22"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="City, Country"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Debate Information */}
                <div>
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-800">
                        <div className="w-2 h-6 mr-3 bg-purple-500 rounded"></div>
                        Debate Information
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label htmlFor="experienceLevel" className="block mb-2 text-sm font-medium text-gray-700">
                                Experience Level
                            </label>
                            <select
                                id="experienceLevel"
                                name="experienceLevel"
                                value={formData.experienceLevel}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="preferredFormats" className="block mb-2 text-sm font-medium text-gray-700">
                                Preferred Formats
                            </label>
                            <input
                                type="text"
                                id="preferredFormats"
                                value={formData.preferredFormats.join(', ')}
                                onChange={(e) => handleArrayInputChange('preferredFormats', e.target.value)}
                                placeholder="Parliamentary, Oxford, Public Forum (comma separated)"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="specialties" className="block mb-2 text-sm font-medium text-gray-700">
                                Specialties
                            </label>
                            <input
                                type="text"
                                id="specialties"
                                value={formData.specialties.join(', ')}
                                onChange={(e) => handleArrayInputChange('specialties', e.target.value)}
                                placeholder="Politics, Economics, Social Issues (comma separated)"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <div>
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-800">
                        <div className="w-2 h-6 mr-3 bg-green-500 rounded"></div>
                        About Me
                    </h3>
                    <div>
                        <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-700">
                            Biography
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="4"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us about yourself, your debate experience, interests..."
                            className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-800">
                        <div className="w-2 h-6 mr-3 bg-blue-500 rounded"></div>
                        Social Links
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-700">
                                Facebook URL
                            </label>
                            <input
                                type="url"
                                id="facebook"
                                name="socialLinks.facebook"
                                value={formData.socialLinks.facebook}
                                onChange={handleInputChange}
                                placeholder="https://facebook.com/username"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="linkedin" className="block mb-2 text-sm font-medium text-gray-700">
                                LinkedIn URL
                            </label>
                            <input
                                type="url"
                                id="linkedin"
                                name="socialLinks.linkedin"
                                value={formData.socialLinks.linkedin}
                                onChange={handleInputChange}
                                placeholder="https://linkedin.com/in/username"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="twitter" className="block mb-2 text-sm font-medium text-gray-700">
                                Twitter URL
                            </label>
                            <input
                                type="url"
                                id="twitter"
                                name="socialLinks.twitter"
                                value={formData.socialLinks.twitter}
                                onChange={handleInputChange}
                                placeholder="https://twitter.com/username"
                                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col justify-end gap-4 pt-6 border-t border-gray-200 sm:flex-row">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="inline-flex items-center justify-center px-6 py-3 text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                        <FaTimes className="mr-2" />
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center px-6 py-3 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-green-300"
                    >
                        <FaSave className="mr-2" />
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
