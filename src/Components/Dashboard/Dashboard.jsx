// src/components/Dashboard/Dashboard.jsx
import React, { useState, useEffect, useContext } from 'react';
import ProfileView from './ProfileView';
import ProfileEdit from './ProfileEdit';
import { AuthContext } from '../../providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userProfile, setUserProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserProfile();
    }, [user]);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const profileData = await response.json();
                setUserProfile(profileData);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProfileUpdate = (updatedProfile) => {
        setUserProfile(updatedProfile);
        setIsEditing(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-32 h-32 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
                <span className="ml-4 text-lg text-gray-600">Loading dashboard...</span>
            </div>
        );
    }

    return (
        <div className="p-6 mx-auto max-w-7xl">
            {/* Dashboard Header */}
            <div className="p-8 mb-8 text-center text-white shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <h1 className="mb-2 text-3xl font-bold">Welcome to JUST Debate Club Dashboard</h1>
                <p className="text-lg opacity-90">Hello, {userProfile?.name || user?.displayName}!</p>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Sidebar */}
                <div className="flex-shrink-0 w-full lg:w-64">
                    <nav className="p-4 bg-white rounded-lg shadow-md">
                        <ul className="space-y-2">
                            <li className="px-4 py-3 text-white transition-colors bg-indigo-500 rounded-lg cursor-pointer">
                                Profile
                            </li>
                            <li className="px-4 py-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-500 hover:text-white">
                                My Debates
                            </li>
                            <li className="px-4 py-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-500 hover:text-white">
                                Tournaments
                            </li>
                            <li className="px-4 py-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-500 hover:text-white">
                                Achievements
                            </li>
                            <li className="px-4 py-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-500 hover:text-white">
                                Settings
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {isEditing ? (
                        <ProfileEdit
                            userProfile={userProfile}
                            onUpdate={handleProfileUpdate}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        <ProfileView
                            userProfile={userProfile}
                            onEdit={() => setIsEditing(true)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
