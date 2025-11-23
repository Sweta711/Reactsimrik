import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import womanbook from "../assets/womanbook.jpg";

export default function NavbarBooking() {
// dynamic data
const cities = ["Kathmandu", "Biratnagar", "Dharan", "Kakarvitta"];

// controlled form state
const [from, setFrom] = useState(cities[0]);
const [to, setTo] = useState("");
const [date, setDate] = useState("");
const [adults, setAdults] = useState(1);

// dropdown visibility
const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
const [showMobilePassengerDropdown, setShowMobilePassengerDropdown] = useState(false);

// refs for click-outside detection
const desktopDropdownRef = useRef(null);
const mobileDropdownRef = useRef(null);

// derived text
const passengerText = `${adults} Passenger${adults > 1 ? "s" : ""}`;

// close dropdowns when clicking outside
useEffect(() => {
function onDocClick(e) {
    if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target)) {
    setShowPassengerDropdown(false);
    }
    if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
    setShowMobilePassengerDropdown(false);
    }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
}, []);

  // handlers
function handleSearch(e) {
    e?.preventDefault?.();
    const payload = {
    from,
    to,
    date,
    passengers: { adults },
    };
    // Replace with API call / navigation
    console.log("Search payload:", payload);
    return payload;
}

function swapFromTo() {
setFrom((prevFrom) => {
    const oldFrom = prevFrom;
    setTo(oldFrom === to ? "" : oldFrom); // if to equals from, keep it simple
    return to || prevFrom;
});
}

return (
<header className="w-full text-white bg-gradient-to-b from-amber-100/50 to-teal-100">
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    {/* Logo */}
    <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-16 md:h-12 rounded-lg" />
    </div>

    {/* Desktop Booking Form */}
    <div className="hidden md:flex flex-1 max-w-5xl bg-cyan-800/40 p-3 rounded-full border border-gray-600 items-center space-x-2">
        {/* From */}
        <div className="flex w-full md:w-auto flex-col items-center p-2 rounded-full hover:bg-gray-600/20 transition relative group">
        <span className="text-cyan-950 text-xs uppercase font-semibold">From</span>
        <select
            id="fromDestination"
            className="header-input w-32 text-center font-bold bg-transparent cursor-pointer pr-8"
            value={from}
            onChange={(e) => {
            setFrom(e.target.value);
            // If user picks same as 'to', clear to
            if (e.target.value === to) setTo("");
            }}
        >
            {cities.map((c) => (
            <option key={c} value={c} className="bg-gray-800 text-white">
                {c}
            </option>
            ))}
        </select>
        <span className="text-gray-600 text-xs">Origin</span>
        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-white pointer-events-none"></i>
        </div>

        <i className="fas fa-exchange-alt text-gray-400 text-sm hidden md:block" title="Swap from & to" />

        {/* To */}
        <div className="flex w-full md:w-auto flex-col items-center p-2 rounded-full hover:bg-gray-600/20 transition relative group">
        <span className="text-cyan-950 text-xs uppercase font-semibold">To</span>
        <select
            id="toDestination"
            className="header-input w-32 text-center font-bold bg-transparent cursor-pointer pr-8"
            value={to}
            onChange={(e) => setTo(e.target.value)}
        >
            <option value="" disabled className="bg-gray-800 text-white">
            Select Destination
            </option>
            {cities.map((c) => (
            <option key={c} value={c} className="bg-gray-800 text-white">
                {c}
            </option>
            ))}
        </select>
        <span className="text-gray-600 text-xs">Destination</span>
        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-white pointer-events-none"></i>
        </div>

        <div className="hidden sm:block border-l border-gray-600 h-8 mx-2"></div>

        {/* Date */}
        <div className="flex w-full md:w-auto flex-col items-center p-2 rounded-full hover:bg-gray-600/20 transition">
        <span className="text-cyan-950 text-xs uppercase font-semibold">Date</span>
        <input
            id="departDate"
            type="date"
            className="header-input w-32 text-center font-bold cursor-pointer"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <span className="text-gray-600 text-xs">Depart</span>
        </div>

        {/* Passengers */}
        <div
        id="passengerInputContainer"
        className="flex w-full md:w-auto flex-col items-center p-2 rounded-full hover:bg-gray-600/20 transition passenger-counter-container"
        onClick={(e) => {
            e.stopPropagation();
            setShowPassengerDropdown((s) => !s);
        }}
        ref={desktopDropdownRef}
        >
        <span className="text-cyan-950 text-xs uppercase font-semibold">Passengers</span>
        <input
            id="passengerCountDisplay"
            type="text"
            value={passengerText}
            readOnly
            className="header-input w-32 text-center font-bold cursor-pointer"
            />
            <span className="text-gray-600 text-xs">Total</span>

            <div id="passengerDropdown" className={`passenger-dropdown dropdown-animate ${showPassengerDropdown ? "show" : ""}`} aria-hidden={!showPassengerDropdown}>
            <div className="passenger-control">
            <span className="text-gray-800 font-medium">Adults</span>
            <div className="flex items-center space-x-2">
                <button
                type="button"
                onClick={(ev) => {
                    ev.stopPropagation();
                    setAdults((a) => Math.max(1, a - 1));
                }}
                aria-label="Decrease adults"
                className="w-7 h-7 rounded-full flex items-center justify-center"
                >
                -
                </button>
                <span id="adultCount" className="text-gray-800 font-bold w-6 text-center">{adults}</span>
                <button
                type="button"
                onClick={(ev) => {
                    ev.stopPropagation();
                    setAdults((a) => a + 1);
                }}
                aria-label="Increase adults"
                className="w-7 h-7 rounded-full flex items-center justify-center"
                >
                +
                </button>
            </div>
            </div>
        </div>
        </div>

        <div className="hidden sm:block border-l border-gray-600 h-8 mx-2"></div>

        {/* Women Booking */}
        <div className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-600/20 transition cursor-pointer" id="womenBookingButton">
        <img src={womanbook} alt="Women Icon" className="w-6 h-6 custom-logo-radius1" />
        <div className="flex flex-col text-left">
            <span className="text-white text-sm font-semibold">Booking for women</span>
            <a href="#" id="knowMoreLink" className="text-blue-900 text-xs hover:underline">Know more</a>
        </div>
        <label className="toggle-switch">
            <input type="checkbox" id="womenBookingToggle" />
            <span className="slider"></span>
        </label>
        </div>

        <button
        id="searchBusButton"
        className="bg-[#1b5d67f5] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:bg-simrik-teal transition duration-300 w-full md:w-auto mt-2 md:mt-0"
        onClick={handleSearch}
        >
        SEARCH BUS
        </button>
        </div>

        {/* Mobile Booking Form */}
        <div id="mobileBookingContainer" className="md:hidden w-full mobile-booking-container  bg-gradient-to-b from-amber-100/50 to-teal-100 p-4 rounded-2xl">
          {/* Close button (keeps markup identical) */}
        <button className="mobile-booking-close" id="mobileBookingClose" type="button">
        <i className="fas fa-times"></i>
        </button>

        <div className="mobile-booking-row grid grid-cols-2 gap-3 mb-3">
        <div className="mobile-booking-item">
            <span className="text-cyan-950 text-xs uppercase font-semibold">From</span>
            <select
            id="fromDestinationMobile"
            className="header-input w-full text-center font-bold appearance-none bg-transparent cursor-pointer"
            value={from}
            onChange={(e) => {
                setFrom(e.target.value);
                if (e.target.value === to) setTo("");
            }}
            >
            {cities.map((c) => (
                <option key={c} value={c} className="bg-gray-800 text-white">
                {c}
                </option>
            ))}
            </select>
            <span className="text-gray-600 text-xs">Origin</span>
        </div>

        <div className="mobile-booking-item">
            <span className="text-cyan-950 text-xs uppercase font-semibold">To</span>
            <select
            id="toDestinationMobile"
            className="header-input w-full text-center font-bold appearance-none bg-transparent cursor-pointer"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            >
            <option value="" disabled className="bg-gray-800 text-white">Destination</option>
            {cities.map((c) => (
                <option key={c} value={c} className="bg-gray-800 text-white">
                {c}
                </option>
            ))}
            </select>
            <span className="text-gray-600 text-xs">Destination</span>
        </div>
        </div>

        <div className="mobile-booking-row grid grid-cols-2 gap-3 mb-3">
        <div className="mobile-booking-item">
            <span className="text-cyan-950 text-xs uppercase font-semibold">Date</span>
            <input
            id="departDateMobile"
            type="date"
            className="header-input w-full text-center font-bold cursor-pointer"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <span className="text-gray-600 text-xs">Depart</span>
        </div>

        <div
            id="mobilePassengerInputContainer"
            className="mobile-booking-item mobile-passenger-counter-container"
            ref={mobileDropdownRef}
        >
            <span className="text-cyan-950 text-xs uppercase font-semibold">Passengers</span>
            <input
            id="passengerCountDisplayMobile"
            type="text"
            value={passengerText}
            readOnly
            className="header-input w-full text-center font-bold cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                setShowMobilePassengerDropdown((s) => !s);
            }}
            />
            <span className="text-gray-600 text-xs">Total</span>

            <div id="mobilePassengerDropdown" className={`mobile-passenger-dropdown dropdown-animate ${showMobilePassengerDropdown ? "show" : ""}`}>
            <div className="passenger-control">
                <span className="text-gray-800 font-medium">Adults</span>
                <div className="flex items-center space-x-2">
                <button
                    type="button"
                    data-type="minus"
                    data-target="mobileAdults"
                    onClick={(ev) => {
                    ev.stopPropagation();
                    setAdults((a) => Math.max(1, a - 1));
                    }}
                >
                    -
                </button>
                <span id="mobileAdultCount" className="text-gray-800 font-bold w-6 text-center">{adults}</span>
                <button
                    type="button"
                    data-type="plus"
                    data-target="mobileAdults"
                    onClick={(ev) => {
                    ev.stopPropagation();
                    setAdults((a) => a + 1);
                    }}
                >
                    +
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="mobile-booking-row mb-3">
        <div className="mobile-booking-item flex items-center justify-center">
            <img src={womanbook} alt="Women Icon" className="w-5 h-5 custom-logo-radius1 mr-2" />
            <div className="flex flex-col text-left">
            <span className="text-white text-xs font-semibold">Women Booking</span>
            <a href="#" id="knowMoreLinkMobile" className="text-blue-900 text-xs hover:underline">Know more</a>
            </div>
            <label className="toggle-switch ml-2">
            <input type="checkbox" id="womenBookingToggleMobile" />
            <span className="slider"></span>
            </label>
        </div>
        </div>

        <button
        id="searchBusButtonMobile"
        className="bg-[#1b5d67f5] text-white mobile-search-button font-semibold shadow-lg hover:bg-simrik-teal transition duration-300 w-full"
        onClick={handleSearch}
        >
        SEARCH BUS
        </button>
    </div>
    </div>
</header>
);
}
