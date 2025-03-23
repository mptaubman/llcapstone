import React from "react";

function Footer(){
    return(
        <footer>
            <img src={require("../assets/small_l_mono_g.jpg")}
            alt="Little Lemon Head Logo"
            className="foot_logo">
            </img><li>
                <h1 className="footTitle">Navigation</h1>
                <ul className="footLink">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Menu">Menu</a>
                    <a href="/BookingPage">Reservations</a>
                    <a href="/Order">Order Online</a>
                    <a href="/Login">Login</a>
                </ul></li>
                <li><h1 className="footTitle">Contact Us</h1>
                <ul className="footLink">
                    <a href="/">Address</a>
                    <a href="/">Phone Number</a>
                    <a href="/">Email</a>
                </ul></li>
                <li><h1 className="footTitle">Social Media</h1>
                <ul className="footLink">
                    <a href="https://www.linkedin.com">LinkedIn</a>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://x.com">Twitter/X</a>
                    <a href="https://tiktok.com">TikTok</a>
                </ul></li>

        </footer>
    );
}


export default Footer;

