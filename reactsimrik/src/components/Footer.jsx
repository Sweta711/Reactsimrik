import React from "react";
import mountain from "../assets/mountain.jpg";
import esewa from "../assets/esewa-seeklogo.png";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaYoutube,
} from "react-icons/fa";

export default function Footer() {
// Dynamic Data
const socialIcons = [
{ icon: <FaFacebookF />, link: "#" },
{ icon: <FaInstagram />, link: "#" },
{ icon: <FaYoutube />, link: "#" },
{ icon: <FaLinkedinIn />, link: "#" },
];

const links = [
{ title: "About Us", url: "#" },
{ title: "Contact Us", url: "#" },
{ title: "Terms & Conditions", url: "#" },
];

const paymentMethods = [
{ name: "Esewa", img: esewa, url: "#" },
// Add more payment methods here if needed
];

const techPartner = {
name: "SINGHA TECHNE PVT. LTD.",
description: "Software & Solutions Provider",
};

return (
<footer className="footer" style={{ backgroundImage: `url(${mountain})` }}>
    <div className="footer-overlay"></div>

    <div className="footer-content fade-up">
    {/* Left Section */}
    <div className="footer-section">
        <p className="footer-title">
        We are dedicated to providing swift, easy, and comfortable travel
        experiences. Your journey is our priority.
        </p>

        <p className="footer-sub">
        Mero Bus is committed to excellence in ground transportation.
        </p>

        <div className="footer-social-icons">
        {socialIcons.map((social, index) => (
            <a key={index} href={social.link}>
            {social.icon}
            </a>
        ))}
        </div>
    </div>

    {/* Middle Column */}
    <div className="footer-section">
        <h3>Mero Bus</h3>
        {links.map((link, index) => (
        <a key={index} href={link.url}>
            {link.title}
        </a>
        ))}
    </div>

    {/* Payment Column */}
    <div className="footer-section">
        <h3>We Accept</h3>
        <div className="payment-icons">
        {paymentMethods.map((payment, index) => (
            <a key={index} href={payment.url}>
            <img src={payment.img} alt={payment.name} />
            </a>
        ))}
        </div>
    </div>

    {/* Technology Partner */}
    <div className="footer-section">
        <h3>Technology Partner</h3>
        <p className="tech-title">{techPartner.name}</p>
        <p className="tech-sub">{techPartner.description}</p>
    </div>
    </div>

    <hr className="border-t border-gray-300 my-18" />

    <div className="footer-bottom">
    © 2025 Mero Bus. All Rights Reserved. | Powered by {"Singha Techne IT Solution"}
    {techPartner.name}
    </div>
</footer>
);
}
