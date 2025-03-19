import React from 'react';
import {Route, Routes} from 'react-router-dom';

function Main() {
    return (
        <div>
            this will eventually contain all the materials for the main sections
        <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/Reservations" element={<Reservations />}></Route>
                <Route path="/Order" element={<Order />}></Route>
                <Route path="/Login" element={<Login />}></Route>

            </Routes>
            </div>
    )
}