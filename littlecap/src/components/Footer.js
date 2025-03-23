import React from "react";

function Footer(){
    return(
        <footer>
            <img src={require("../assets/small_logo.jpg")}
            alt="Little Lemon Head Logo"
            className="foot_logo">
            </img>
                <h1 className="footTitle">Navigation</h1>
                <ul className="footLink">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/BookingPage">Reservations</a></li>
                    <li><a href="/Order">Order Online</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
                <hi className="footTitle">Contact Us</hi>
                <ul className="footLink">
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone Number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
                <h1 className="footTitle">Social Media</h1>
                <ul className="footLink">
                    <li><a href="/">Address</a></li>
                    <li><a href="/">LinkedIn</a></li>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter/X</a></li>
                    <li><a href="/">TikTok</a></li>
                </ul>

        </footer>
    );
}


export default Footer;

