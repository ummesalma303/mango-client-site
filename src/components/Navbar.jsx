import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-400 text-white flex justify-between '>
            <div></div>
                <div className='space-x-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addMango'>Add Mango</NavLink>
                </div>
                <div></div>
            </nav>
        </div>
    );
};

export default Navbar;