import React from "react";

function Footer(){
    return(
        <footer>
            <li className="foot_logo">
            <img src={require("../assets/small_logo.jpg")}
            alt="Little Lemon Head Logo">
            </img>
            </li>
            <li className="Sitemap">
                <h1 className="footTitle">Navigation</h1>
                <ul className="footLink">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Menu</a></li>
                    <li><a href="index.html">Reservations</a></li>
                    <li><a href="index.html">Order Online</a></li>
                    <li><a href="index.html">Login</a></li>
                </ul>
            </li>
            <li className="Contact">
                <hi className="footTitle">Contact Us</hi>
                <ul className="footLink">
                    <li><a href="index.html">Address</a></li>
                    <li><a href="index.html">Phone Number</a></li>
                    <li><a href="index.html">Email</a></li>
                </ul>
            </li>

            <li className="Socials">
                <h1 className="footTitle">Social Media</h1>
                <ul className="footLink">
                    <li><a href="index.html">Address</a></li>
                    <li><a href="index.html">LinkedIn</a></li>
                    <li><a href="index.html">Facebook</a></li>
                    <li><a href="index.html">Twitter/X</a></li>
                    <li><a href="index.html">TikTok</a></li>
                </ul>
            </li>
        </footer>
    );
}


export default Footer;

