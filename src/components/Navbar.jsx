// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { persistor } from '../utils/appStore';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user.userInfo);

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
            console.log(res);

            dispatch(removeUser());
            await persistor.purge();
            navigate('/signin');

        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="bg-gray-800 first-bg-color text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                        <span className="text-xl font-bold">Jamaat Timing App</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <Link to="" ></Link>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    {(user?.role === 'admin' || user?.role === 'superAdmin') && (
                        <>
                            <Link to="/registerMasjid" className="hover:text-gray-400">Register Masjid</Link>
                            <Link to="/updateMasjidTiming" className="hover:text-gray-400">Update Masjid Timing</Link>
                        </>

                    )}
                    {user?.role === 'superAdmin' && (
                        <>
                            <Link to="/updateMasjidTimingAdmin" className="hover:text-gray-400">Update Masjid Timing Admin</Link>
                        </>

                    )}
                    {!user && (
                        <>
                            <Link to="/signIn" className="hover:text-gray-400">Sign In</Link>
                            <Link to="/signUp" className="hover:text-gray-400">Sign Up</Link>
                        </>
                    )}
                    {user && (
                        <button onClick={() => handleLogout()} className="hover:text-gray-400">Logout</button>
                    )}
                    <ThemeToggle/>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700">
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
                    {(user?.role === 'admin' || user?.role === 'superAdmin') && (
                        <>
                            <Link to="/registerMasjid" className="block px-4 py-2 hover:bg-gray-600">Register Masjid</Link>
                            <Link to="/updateMasjidTiming" className="block px-4 py-2 hover:text-gray-400">Update Masjid Timing</Link>

                        </>
                    )}
                    {user?.role === 'superAdmin' && (
                        <>
                            <Link to="/updateMasjidTimingAdmin" className="block px-4 py-2 hover:text-gray-400">Update Masjid Timing Admin</Link>
                        </>

                    )}
                    {!user && (
                        <>
                            <Link to="/signIn" className="block px-4 py-2 hover:bg-gray-600">Sign In</Link>
                            <Link to="/signUp" className="block px-4 py-2 hover:bg-gray-600">Sign Up</Link>
                        </>
                    )
                    }
                    {user && (
                        <button onClick={() => handleLogout()} className="block px-4 py-2 hover:bg-gray-600">Logout</button>
                    )}

                </div>
            )}
        </nav>
    );
};

export default Navbar;
