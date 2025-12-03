import {useNavigate} from "react-router-dom";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "./Footer";

import travel from "../assets/travel1.webp";
import hiaceImg from "../assets/hiacee.jpg";
import jeepImg from "../assets/tata.jpg";
import busImg from "../assets/bus.jpg";
import evImg from "../assets/evv.webp";

import pokhara from "../assets/cities/pokhara1.jpg";
import chitwan from "../assets/cities/chitwan.png";
import birgunj from "../assets/cities/birgunj.jpg";
import dharan from "../assets/cities/dharann.jpg";
import kathmandu from "../assets/cities/kathmandu.jpg";
import hetauda from "../assets/cities/hetauda.jpg";

import kasthamandap from "../assets/cities/temple.jpg";
import butwal from "../assets/cities/butwal.jpg";
import itahari from "../assets/cities/itahari.jpg";
import annapurna from "../assets/annapurna.webp";
import everest from "../assets/everest.jpg";
import bardia from "../assets/bardia.jpg";
import rara from "../assets/rara.jpg";

import nagarkot from "../assets/nagarkot.jpg";
import pokhara11 from "../assets/pokhara12.jpg";
import mustang from "../assets/mustang12.jpg";
import annapurna1 from "../assets/annapurna.webp";

export default function RentalDetails() {
const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("All");
const scrollRef = useRef(null);

// Form modal
const [showForm, setShowForm] = useState(false);
const [selectedVehicle, setSelectedVehicles] = useState(null);

const tabs = ["All", "Popular Cities", "Mountains", "Cities", "Nature & Wildlife"];

const Vehicles = [
{ name: "Hiace", desc: "comfortable van for group travel", img: hiaceImg },
{ name: "Jeep", desc: "Perfect for off-road adventures", img: jeepImg },
{ name: "Bus", desc: "Ideal for large groups and tours", img: busImg },
{ name: "EV", desc: "Perfect for group tours and budget friendly", img: evImg },
];

const data = [
{ type: "Popular Cities", title: "Pokhara", desc: "Stunning views of Himalayan Range", image: pokhara },
{ type: "Popular Cities", title: "Chitwan", desc: "Jungle safari destination with diverse wildlife", image: chitwan },
{ type: "Popular Cities", title: "Birgunj", desc: "Major industrial and commercial hub near Indian border", image: birgunj },
{ type: "Popular Cities", title: "Dharan", desc: "Gateway to eastern hills with cultural diversity", image: dharan },
{ type: "Popular Cities", title: "Kathmandu", desc: "Capital city hidden with many history and nature", image: kathmandu },
{ type: "Popular Cities", title: "Hetuda", desc: "Capital city hidden with many history and nature", image: hetauda },
{ type: "Mountains", title: "Everest Base Camp", desc: "World's highest trekking route", image: everest },
{ type: "Mountains", title: "Annapurna", desc: "Famous for panoramic Himalayan views", image: annapurna },
{ type: "Cities", title: "Kathmandu", desc: "Capital city with rich history", image: kasthamandap },
{ type: "Cities", title: "Butwal", desc: "Fast-growing business city", image: butwal },
{ type: "Cities", title: "Itahari", desc: "Fast-growing business city", image: itahari },
{ type: "Nature & Wildlife", title: "Bardia National park", desc: "Home of Bengal tigers and wildlife", image: bardia },
{ type: "Nature & Wildlife", title: "Rara National Park", desc: "Nepal’s largest freshwater lake", image: rara },
];

const trips = [
{ title: "Nagarkot", price: "From $100–300", desc: "Best sunrise viewpoint near Kathmandu", img: nagarkot, badge: "Save 20% today", badgeColor: "bg-yellow-400 text-black" },
{ title: "Mustang", price: "From $600–1200", desc: "The forbidden kingdom with dramatic landscapes", img: mustang, badge: "Save 36% today", badgeColor: "bg-yellow-400 text-black" },
{ title: "Pokhara", price: "From $200–500", desc: "Stunning lakeside views of Annapurna range", img: pokhara11, badge: null },
{ title: "Annapurna Circuit", price: "From $800–1500", desc: "World-class trekking with breathtaking mountain views", img: annapurna1, badge: "Exclusive Trip in this winter", badgeColor: "bg-red-600" },
];

// Filter logic
const filteredCards = activeTab === "All" ? data : data.filter((item) => item.type === activeTab);

// Scroll handlers
const scrollLeft = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: "smooth" }); };
const scrollRight = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: "smooth" }); };

// Form states
const [pickup, setPickup] = useState("");
const [destination, setDestination] = useState("");
const [pickupDate, setPickupDate] = useState("");
const [returnDate, setReturnDate] = useState("");
const [days, setDays] = useState(1);
const [requirements, setRequirements] = useState("");

const totalPrice = days * 100; // sample price
const handleIncrease = () => setDays(days + 1);
const handleDecrease = () => days > 1 && setDays(days - 1);

const handleSubmit = (e) => { e.preventDefault(); alert("Booking confirmed!"); };

return (
<section className="w-full fade-up">

        {/* Hero Section */}
        <div className="fade-up max-w-auto  relative w-full h-[400px] sm:h-[500px] bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${travel})` }}>
            <div
                className="absolute inset-0 bg-black/25">
            </div>
            <div className="relative z-10 sm:px-8 md:px-20 h-full flex flex-col justify-center ">
                <h1 className="text-white font-extrabold  sm:text-4xl md:text-5xl leading-tight">
                Discover Nepal's<br /> Hidden Treasures
                </h1>
                <p className="text-white mt-4 max-w-full sm:max-w-[550px] text-lg sm:text-xl">
                Experience the beauty of the Himalayas with our premium travel services.
                </p>
                <button className="mt-6 bg-[#1b5d67f5] hover:bg-[#549ca7c7] text-white px-6 py-3 rounded-lg font-semibold w-fit ">
                Book Your Adventure Now
                </button>
            </div>
        </div>
       

        {/* Popular Vehicles */}
        <div className="max-w-[1450px] mx-auto sm:px-1 py-10 sm:py-12">
            <div className="bg-gray-300/20 rounded-xl py-2 sm:py-10">
                <p className="text-gray-600 text-opacity-10 pt-1 ml-5 text-sm sm:text-base">TRAVELLER'S FAVOURITE</p>
                <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-black ml-5 pt-1">Explore All Popular <br /> Vehicles</h1>
                <p className="text-gray-600 mt-2 ml-5 mb-10 text-sm sm:text-base">
                Plan book, and embark on your dream adventure with our expert guidance and tailored experiences.
                </p>

                {/* Vehicles cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-cols-3 grid-cols-4 gap-6 p-2 sm:p-6">
                {Vehicles.map((v, index) => (
                    <div key={index} onClick={() => { setSelectedVehicles(v); setShowForm(true); }}
                    className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transform transition-all duration-300 hover:scale-105">
                    <div className="w-full aspect-w-16 aspect-h-20 rounded-xl overflow-hidden object-cover ">
                        <img src={v.img} alt={v.name} className="w-full h-full object-cover " />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                        <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl">{v.name}</h2>
                        <p className="text-gray-200 text-sm sm:text-base">{v.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Booking Form Modal */}
        {showForm && (
            <div className="fixed inset-0 bg-white backdrop-blur-sm flex justify-center items-center p-4 z-50 ">
                <div className="  bg-white rounded-xl max-w-[900px]  p-4 sm:p-6 md:p-8 shadow-lg relative overflow-y-auto">
                    <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <X />
                    </button>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">{selectedVehicle?.name} Booking</h2>
                    <div className="w-full aspect-[16/9] mb-4 rounded-md overflow-hidden">
                        <img src={selectedVehicle?.img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={pickup} onChange={(e) => setPickup(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={destination} onChange={(e) => setDestination(e.target.value)} required />
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                            <input type="date" className="w-full p-2 border border-gray-300 rounded-md" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                            <input type="date" className="w-full p-2 border border-gray-300 rounded-md" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
                        </div>
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Days</label>
                        <div className="flex w-full max-w-[150px]">
                            <button type="button" onClick={handleDecrease} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition">-</button>
                            <input type="number" readOnly value={days} className="w-full text-center border-y border-gray-300 py-1" />
                            <button type="button" onClick={handleIncrease} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition">+</button>
                        </div>
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                        <textarea rows={3} value={requirements} onChange={(e) => setRequirements(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Any special requests?"></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                        <div>
                            <p className="text-sm text-gray-600">Total Price:</p>
                            <p className="text-lg sm:text-xl font-bold text-green-600">${totalPrice}</p>
                        </div>
                        <button className="bg-[#1b5d67f5] hover:bg-[#549ca7c7] text-white font-bold py-2 px-6 rounded-md w-full sm:w-auto">Confirm Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        )}

        {/* Trips Section */}
<section className="py-5 max-w-[1400px] mx-auto px-4 sm:px-6 transform transition">
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0F172A] mb-6">
        Book your Next Trip
    </h2>

    {/* Tabs */}
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 rounded-full  text-sm sm:text-base font-medium transition 
                    ${activeTab === tab
                        ? "bg-[#1b5d67f5] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
            >
                {tab}
            </button>
        ))}
    </div>

    {/* Slider */}
    <div className="relative">

        {/* Left Button */}
        <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
        >
            <ChevronLeft />
        </button>

        {/* Scroll Container */}
        <div
            ref={scrollRef}
            className="
                flex gap-4 sm:gap-6 
                overflow-x-auto 
                scroll-smooth 
                pb-3 
                no-scrollbar
                pr-6
            "
        >
            {filteredCards.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="
                        min-w-[240px]
                        sm:min-w-[260px]
                        md:min-w-[280px]
                        bg-white
                        rounded-2xl
                        shadow-md
                        cursor-pointer
                        overflow-hidden
                        flex-shrink-0
                    "
                >
                    {/* FIXED IMAGE ZOOM AREA */}
                    <div className="h-36 sm:h-40 w-full overflow-hidden rounded-t-2xl">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="
                                w-full h-full object-cover 
                                transition-transform duration-500 
                                hover:scale-110
                                will-change-transform
                            "
                        />
                    </div>

                    <div className="p-3 sm:p-4">
                        <h3 className="font-semibold text-base sm:text-lg text-[#0F172A]">
                            {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Right Button */}
        <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
        >
            <ChevronRight />
        </button>
    </div>
</section>


        {/* Winter Special */}
        <section className="animate-on-scroll bg-section-light bg-gray-300/20 rounded-xl mt-10 mx-auto mr-10 ml-10 sm:px-10 py-5 mb-10 animated ">
            
                <div className="py-5 max-w-[1400px]  px-2 sm:px-4 transform transition text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0F172A] mb-4 mt-5">Winter Special Trip in Nepal</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Experience the magic of Nepal in winter with our specially curated packages</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 md:mb-32">
                    {trips.map((item, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-[1.03]">
                        <img src={item.img} alt={item.title} className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover" />
                        {item.badge && (
                        <span className={`absolute top-3 left-3 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full ${item.badgeColor || "bg-red-600 text-white"}`}>
                            {item.badge}
                        </span>
                        )}
                        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 bg-gradient-to-t from-black/80 to-black/0">
                        <h2 className="text-white text-lg sm:text-xl font-bold">{item.title}</h2>
                        <p className="text-gray-200 text-sm">{item.price}</p>
                        <p className="text-gray-300 text-xs sm:text-sm mt-1">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            
        </section>

    <Footer />
</section>
);
}
