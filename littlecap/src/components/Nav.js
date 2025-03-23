import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <nav className='navbar'>
            <img src={require("../assets/logo.jpg")}
            alt="Little Lemon Logo"
            className='nav_logo'></img>
            <Link to="/" className="hover-effect">
              <h1>Home</h1>
            </Link>
            <Link to="/About" className="hover-effect">
              <h1>About</h1>
            </Link>
            <Link to="/Menu" className='hover-effect'>
              <h1>Menu</h1>
            </Link>
            <Link to="/BookingPage" className="hover-effect">
              <h1>Reservations</h1>
            </Link>
            <Link to="/Order" className="hover-effect">
              <h1>Order</h1>
            </Link>
            <Link to="Login" className="hover-effect">
              <h1>Login</h1>
            </Link>
        </nav>
    );
}

export default Navigation;