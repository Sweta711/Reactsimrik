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
import annapurna1 from "../assets/annapurna31.jpg";
import annapurna11 from "../assets/annapurna.webp";
import chitwan1 from "../assets/chhitwan.jpg";


export default function RentalDetails() {
const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("All");
const scrollRef = useRef(null);

const navigateToVehicle = (name) => {
    navigate(`/${name.toLowerCase()}`);
};


// Form modal
const [showForm, setShowForm] = useState(false);
const [selectedVehicle, setSelectedVehicles] = useState(null);

const tabs = ["All", "Popular Cities", "Mountains", "Cities", "Nature & Wildlife"];

const Vehicles = [
{ name: "Hiace", desc: "comfortable van for group travel", img: hiaceImg ,link:"hiace"},
{ name: "Jeep", desc: "Perfect for off-road adventures", img: jeepImg , link:"jeep"},
{ name: "Bus", desc: "Ideal for large groups and tours", img: busImg, link:"bus" },
{ name: "EV", desc: "Perfect for group tours and budget friendly", img: evImg ,link:"ev"},
];

const data = [
{ type: "Popular Cities", title: "Pokhara", desc: "Stunning views of Himalayan Range", image: pokhara },
{ type: "Popular Cities", title: "Chitwan", desc: "Jungle safari destination with diverse wildlife", image: chitwan },
{ type: "Popular Cities", title: "Birgunj", desc: "Major industrial and commercial hub near Indian border", image: birgunj },
{ type: "Popular Cities", title: "Dharan", desc: "Gateway to eastern hills with cultural diversity", image: dharan },
{ type: "Popular Cities", title: "Kathmandu", desc: "Capital city hidden with many history and nature", image: kathmandu },
{ type: "Popular Cities", title: "Hetuda", desc: "Capital city hidden with many history and nature", image: hetauda },
{ type: "Mountains", title: "Everest Base Camp", desc: "World's highest trekking route", image: everest },
{ type: "Mountains", title: "Annapurna", desc: "Famous for panoramic Himalayan views", image: annapurna1 },
{ type: "Cities", title: "Kathmandu", desc: "Capital city with rich history", image: kasthamandap },
{ type: "Cities", title: "Butwal", desc: "Fast-growing business city", image: butwal },
{ type: "Cities", title: "Itahari", desc: "Fast-growing business city", image: itahari },
{ type: "Nature & Wildlife", title: "Bardia National park", desc: "Home of Bengal tigers and wildlife", image: bardia },
{ type: "Nature & Wildlife", title: "Rara National Park", desc: "Nepal’s largest freshwater lake", image: rara },
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
            <div className="relative z-10 sm:px-8 ml-5 md:px-20 h-full flex flex-col justify-center ">
                <h1 className="text-white font-extrabold text-4xl sm:text-5xl  md:text-5xl leading-tight">
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
                    <div key={index} onClick={() => navigate(`/${v.link}`)}
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

        {/* Book your trips Section */}
        <section className="py-5 max-w-[1450px] bg-gray-300/20 mx-auto px-2 mt-5 sm:px-5 rounded-xl transform transition">
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
                                : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
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
        <section className="animate-on-scroll bg-section-light rounded-3xl p-8 mt-5">
            <div className="text-center mb-16 md:mb-10">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-3">Winter Special Trip in Nepal</h1>
                <p className="text-base text-gray-500 max-w-xl mx-auto">Experience the magic of Nepal in winter with our specially curated packages.</p>
            </div>
            <div className="max-w-[1450px] bg-gray-300/20 mx-auto py-10 px-5 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-10">
                    <a href="#" className="block group relative rounded-xl overflow-hidden shadow-xl-light hover:shadow-2xl transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 card-hover h-96" aria-label="Explore Pokhara winter package">
                        <img src= {pokhara} alt="Phewa Lake in Pokhara with Annapurna range" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-card-overlay flex flex-col justify-end p-6 text-white">
                            <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Save 20% Today</span>
                            <h2 className="text-2xl font-bold">Pokhara</h2>
                            <p className="text-sm">From $200-500</p>
                            <p className="text-xs mt-2">Stunning lakeside views of Annapurna range</p>
                        </div>
                    </a>

                    <a href="#" className="block group relative rounded-xl overflow-hidden shadow-xl-light md:row-span-2 md:h-[496px] lg:h-[750px] hover:shadow-2xl transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 card-hover" aria-label="Explore Exclusive Winter Trek to Annapurna">
                        <img src= {annapurna11}
                        alt="Annapurna mountain range in winter"
                        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-card-overlay flex flex-col justify-end p-6 text-white">
                            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Exclusive Trip in this winter</span>
                            <h2 className="text-2xl font-bold">Annapurna Circuit</h2>
                            <p className="text-sm">From $800-1500</p>
                            <p className="text-xs mt-2">World-class trekking with breathtaking mountain views</p>
                        </div>
                    </a>

                    <a href="#" className="block group relative rounded-xl overflow-hidden shadow-xl-light hover:shadow-2xl transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 card-hover h-96" aria-label="Explore Chitwan National Park">
                        <img src= {chitwan1} alt="Chitwan National Park wildlife" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-card-overlay flex flex-col justify-end p-6 text-white">
                            <h2 className="text-2xl font-bold">Chitwan National Park</h2>
                            <p className="text-sm">From $150-400</p>
                            <p className="text-xs mt-2">Wildlife safari with rhinos, elephants and tigers</p>
                        </div>
                    </a>

                    <a href="#" className="block group relative rounded-xl overflow-hidden shadow-xl-light hover:shadow-2xl transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 card-hover h-96" aria-label="Explore Nagarkot">
                        <img src= {nagarkot} alt="Nagarkot sunrise view" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-card-overlay flex flex-col justify-end p-6 text-white">
                            <span className="absolute top-4 left-4 bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Save 20 % Today</span>
                            <h2 className="text-2xl font-bold">Nagarkot</h2>
                            <p className="text-sm">From $100-300</p>
                            <p className="text-xs mt-2">Spectacular Himalayan sunrise and sunset views</p>
                        </div>
                    </a>

                    <a href="#" className="block group relative rounded-xl overflow-hidden shadow-xl-light hover:shadow-2xl transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 card-hover h-96" aria-label="Explore Mustang">
                        <img src= {mustang} class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-card-overlay flex flex-col justify-end p-6 text-white">
                            <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Save 36 % today</span>
                            <h2 className="text-2xl font-bold">Mustang</h2>
                            <p className="text-sm">From $600-1200</p>
                            <p className="text-xs mt-2">Explore the ancient kingdom with unique Tibetan culture</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* Adventure Banner Section */}
        <section className="animate-on-scroll  rounded-3xl p-8">
            <div className="max-w-6xl w-full mx-auto bg-section-light bg-gray-300/10 p-4 sm:p-6 lg:p-8 rounded-[40px] shadow-custom-container">
                <div className="relative w-full overflow-hidden rounded-[30px] lg:rounded-4xl aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/5] xl:aspect-[16/4]">
                    <img
                    src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                    alt="A scenic view of mountains in Nepal"
                    className=" w-full h-full object-cover floating"
                    loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10">

                        {/* Content */}
                        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white p-4 text-center">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 tracking-tight">
                                Ready for your Next Adventure
                            </h1>

                            <button
                                className="flex items-center border-3  hover:bg-cta-blue-dark text-white font-medium py-2.5 px-6 rounded-lg shadow-cta-shadow transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-cta-blue/50"
                                
                            >
                                Book Now


                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <Footer />
</section>
);
}
