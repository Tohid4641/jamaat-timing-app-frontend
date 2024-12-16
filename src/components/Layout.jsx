import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/selectMasjid">Select Masjid</Link></li>
                <li><Link to="/signIn">Sign In</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Layout