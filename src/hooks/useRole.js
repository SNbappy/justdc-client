import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();

    const fetchRoleData = async () => {
        try {
            setLoading(true);
            const response = await axiosSecure.get('/users/permissions');
            setRole(response.data.role);
            setPermissions(response.data.permissions);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch role data');
            console.error('Role fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchRoleData();
        }
    }, [user]);

    // Helper functions
    const isAdmin = () => role === 'admin';
    const isMember = () => role === 'member';
    const isModerator = () => role === 'moderator';

    const hasPermission = (permission) => permissions.includes(permission);

    const hasAnyPermission = (permissionsList) =>
        permissionsList.some(permission => permissions.includes(permission));

    return {
        role,
        permissions,
        loading,
        error,
        isAdmin,
        isMember,
        isModerator,
        hasPermission,
        hasAnyPermission,
        refetchRole: fetchRoleData
    };
};

export default useRole;
