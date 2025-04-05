import React from 'react';
import { FaCalendar, FaEvernote, FaHome, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className='w-64 min-h-full bg-orange-400'>
                <ul className='p-4 menu'>
                    <li>

                        <NavLink to="/dashboard/userHome">
                            <FaHome />
                            User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/add-event">
                            <FaCalendar />
                            Add Event</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart />My Cart</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;