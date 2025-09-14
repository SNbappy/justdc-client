import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useProfile = () => {
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();

    const fetchProfile = async () => {
        try {
            setLoading(true);
            setError(null);

            const [profileRes, statsRes] = await Promise.all([
                axiosSecure.get('/users/profile'),
                axiosSecure.get('/users/stats')
            ]);

            setProfile(profileRes.data);
            setStats(statsRes.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch profile');
            console.error('Profile fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (profileData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axiosSecure.put('/users/profile', profileData);
            await fetchProfile(); // Refresh profile data
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to update profile';
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchProfile();
        }
    }, [user]);

    return {
        profile,
        stats,
        loading,
        error,
        updateProfile,
        refetchProfile: fetchProfile
    };
};

export default useProfile;
