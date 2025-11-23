import React from "react";
import mountain from "../assets/mountain.jpg"; // imported image
import esewa from "../assets/esewa-seeklogo.png";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPinterestP
} from "react-icons/fa";

export default function Footer() {
    return (
    <footer
        className="footer"
        style={{ backgroundImage: `url(${mountain})` }}
    >
    <div className="footer-overlay"></div>

    <div className="footer-content fade-up">

        {/* Left Section */}
        <div className="footer-section">
        <p className="footer-title">
            We are dedicated to providing swift, easy, and comfortable travel experiences.
            Your journey is our priority.
        </p>

        <p className="footer-sub">
            Simrik Yatayat is committed to excellence in ground transportation.
        </p>

       

        <div className="footer-social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
        </div>
        </div>

        {/* Middle Column */}
        <div className="footer-section">
        <h3>SIMRIK YATAYAT</h3>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms & Conditions</a>
        </div>

        {/* Payment Column */}
        <div className="footer-section">
        <h3>We Accept</h3>
        <div className="payment-icons">
            <img src={esewa} alt="Esewa" className="payment-logo" />
        </div>
        </div>

        {/* Technology Partner */}
        <div className="footer-section">
        <h3>Technology Partner</h3>
        <p className="tech-title">SINGHA TECHNE PVT. LTD.</p>
        <p className="tech-sub">Software & Solutions Provider</p>
        </div>

</div>

    <div className="footer-bottom">
        © 2025 Simrik Yatayat. All Rights Reserved. | Powered by SINGHA TECHNE PVT. LTD.
    </div>
    </footer>
);
}