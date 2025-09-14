import React from 'react';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const RoleRoute = ({ children, allowedRoles = [], requiredPermission = null }) => {
    const { role, permissions, loading, hasPermission } = useRole();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    // Check role-based access
    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
        return <Navigate to="/dashboard" replace />;
    }

    // Check permission-based access
    if (requiredPermission && !hasPermission(requiredPermission)) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default RoleRoute;
