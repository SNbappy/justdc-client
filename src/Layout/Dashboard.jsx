import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FaHome,
    FaCalendarAlt,
    FaTrophy,
    FaChartLine,
    FaBookOpen,
    FaUsers,
    FaBell,
    FaCog,
    FaSignOutAlt,
    FaMicrophone,
    FaVideo,
    FaClipboardList,
    FaMedal,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
            <Helmet>
                <title>My Dashboard | JUST Debate Club</title>
            </Helmet>

           dashboard
        </div>
    );
};

export default Dashboard;
