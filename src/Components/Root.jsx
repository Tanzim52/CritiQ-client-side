import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className='bg-[#F7F6EE]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;