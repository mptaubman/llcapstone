import React from 'react';

function Navigation(){
    return (
        <nav className='navbar'>
            <img src={require("../assets/logo.jpg")}
            alt="Little Lemon Logo"
            className='nav-logo'></img>
        <a className="hover-effect" href="index.html">
            <h1>Home</h1>
        </a>
        <a className="hover-effect" href="index.html">
            <h1>About</h1>
        </a>
        <a className='hover-effect' href="index.html">
            <h1>Menu</h1>
        </a>
      <a className="hover-effect" href="index.html">
        <h1>Reservations</h1>
      </a>
      <a className="hover-effect" href="index.html">
        <h1>Order</h1>
      </a>
      <a className="hover-effect" href="index.html">
        <h1>Login</h1>
      </a>
        </nav>
    );
}

export default Navigation;