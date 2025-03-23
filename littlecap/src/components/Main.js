import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Confirmation from './pages/Confirmation';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage';
import Order from './pages/OrderOnline';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
                <Route path="/Order" element={<Order />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Confirmation" element={<Confirmation />} />

            </Routes>
            </div>
    )
}
export default Main;