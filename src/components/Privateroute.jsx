import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const isLoggedIN = true;

const Privateroute = () => {
    return isLoggedIN ? <Outlet /> : <Navigate to="/login" />
};
export default Privateroute;