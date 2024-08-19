import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const AppRouter = () => { 
    return (
        <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
        </Routes>
        </Router>
    );
}

export default AppRouter;
