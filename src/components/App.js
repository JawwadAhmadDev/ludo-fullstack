import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// pages
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Jackpot from "./pages/jackpot/Jackpot";
import SpaceMiner from "./pages/spaceMiner/SpaceMiner";
export const App = () => {
    return (
        <Router>
            <div>
                <ToastContainer />
                <div className='app'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/jackpot" element={<Jackpot />} />
                        <Route path="/p2e" element={<SpaceMiner />} />
                    </Routes>
                </div>
            </div>
        </Router>

    )
}
