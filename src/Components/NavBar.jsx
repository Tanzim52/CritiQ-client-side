import React from 'react';

const NavBar = () => {
    return (
        <div>
            {/* Navbar with custom theme colors */}
            <div className="navbar bg-[#3D405B] text-[#F7F6EE] shadow-md">
                <div className="navbar-start">
                    {/* Dropdown for mobile view */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#F7F6EE]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#3D405B] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                            <li><a className="hover:text-[#E07A5F]">Home</a></li>
                            <li><a className="hover:text-[#E07A5F]">Services</a></li>
                        </ul>
                    </div>
                    {/* Website Logo */}
                    <a className="btn btn-ghost text-2xl font-bold text-[#F7F6EE]">CritiQ</a>
                </div>

                {/* Navbar Center for Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="hover:text-[#E07A5F]">Home</a></li>
                        <li><a className="hover:text-[#E07A5F]">Services</a></li>
                    </ul>
                </div>

                {/* Navbar End with Login and Register Buttons */}
                <div className="navbar-end space-x-2">
                    <a className="btn bg-[#E07A5F] text-[#F7F6EE] hover:bg-[#D56950] shadow-md">Login</a>
                    <a className="btn bg-[#E07A5F] text-[#F7F6EE] hover:bg-[#D56950] shadow-md">Register</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
