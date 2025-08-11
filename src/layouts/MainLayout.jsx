import React, { Children } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='w-11/12 mx-auto'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Mainlayout;