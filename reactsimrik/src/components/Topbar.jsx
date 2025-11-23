import React from "react";

import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaClock } from "react-icons/fa";

function TopBar(){
    const topData={
        email:"simrikyatayat@gmail.com",
        phone:"9855049452",
        location:"Koteshwor",
        time:"10:00AM - 05:00PM",
    };

    return(
        <div className="topbar">
            <div className="left">
                <span><FaEnvelope /> {topData.email}</span>
                <span><FaPhone /> {topData.phone}</span>
                <span><FaMapMarkedAlt /> {topData.location}</span>
                <span><FaClock /> {topData.time}</span>
            </div>

            <div className="right">
                <button className="signup">SIGNUP</button>
                <button className="login">LOGIN</button>
            </div>
        </div>
    );
}

export default TopBar;