import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#3D405B] text-[#F7F6EE] py-10">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Column 1: About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">CritiQ</h2>
                    <p className="text-sm">
                        CritiQ is your one-stop platform for sharing and exploring insightful reviews on services across various domains.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#E07A5F]">Home</a></li>
                        <li><a href="#" className="hover:text-[#E07A5F]">Services</a></li>
                        <li><a href="#" className="hover:text-[#E07A5F]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#E07A5F]">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="text-[#E07A5F] text-2xl hover:text-[#D56950]"><FaFacebookF /></a>
                        <a href="#" className="text-[#E07A5F] text-2xl hover:text-[#D56950]"><FaTwitter /></a>
                        <a href="#" className="text-[#E07A5F] text-2xl hover:text-[#D56950]"><FaInstagram /></a>
                        <a href="#" className="text-[#E07A5F] text-2xl hover:text-[#D56950]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="border-t border-[#6A7B76] mt-8"></div>

            {/* Footer Bottom */}
            <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} CritiQ. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
