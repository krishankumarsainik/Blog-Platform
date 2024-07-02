import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-400 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl">Simple Blog</Link>
                <Link to="/admin">Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;
