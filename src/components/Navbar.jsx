import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Add Mango</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;