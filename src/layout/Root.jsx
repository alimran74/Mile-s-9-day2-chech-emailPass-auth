import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import '../App.css'
const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            </div>
    );
};

export default Root;