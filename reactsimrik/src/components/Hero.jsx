import React from "react";
import simrikbus from "../assets/busss.png";

export default function Hero() {
    return (
        <section>
            <div className="hero-section"
                style={{ backgroundImage: `url(${simrikbus})` }}
                >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="fade-up text-4xl font-bold">TRAVEL COMFORTABLY, ARRIVE ON TIME</h1>
                    <p>Enjoy your journey with fast, free Wi-Fi,
                    premium seating,and the comfort of our A/C Deluxe coaches.</p>

                    <button className="hero-btn">BOOK A SEAT NOW</button>
                </div>
            </div>
        </section>
    );
}
