
import {useNavigate} from "react-router-dom";
import React, { useState, useRef, useEffect  } from "react";
import { motion} from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import travel from "../assets/travel1.webp";
import hiaceImg from "../assets/hiacee.jpg";
import jeepImg from "../assets/tata.jpg";
import busImg from "../assets/bus.jpg";
import evImg from "../assets/EV.jpg";

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


export default function RentalDetails(){
    const navigate = useNavigate();
    const [activeTab, setActiveTab]= useState("All");
    const scrollRef= useRef(null);

    //form modal
    const [showForm, setShowForm]=useState(false);
    const [selectedVehicle, setSelectedVehicles]= useState(null);

    const tabs = ["All", "Popular Cities", "Mountains","Cities","Nature & Wildlife"];


    const Vehicles=[
        {
            name:"Hiace",
            desc:"comfortabel van for group travel",
            img: hiaceImg,

        },

        {
            name: "Jeep",
            desc: "Perfect for off-road adventures",
            img: jeepImg,

            },

            {
            name: "Bus",
            desc: "Ideal for large groups and tours",
            img: busImg,
            },

            {
            name: "EV",
            desc: "Perfect for group tours and budget friendly",
            img: evImg,

            },
    ];

    const data=[
        {
            type:"Popular Cities",
            title:"Pokhara",
            desc:"Stunning views of Himalayan Range",
            image: pokhara,
        },
        {
            type:"Popular Cities",
            title:"Chitwan",
            desc:"Jungle safari destination with diverse wildlife",
            image: chitwan,
        },
        
        {
            type: "Popular Cities",
            title: "Birgunj",
            desc: "Major industrial and commercial hub near Indian border",
            image: birgunj,
        },
        {
            type: "Popular Cities",
            title: "Dharan",
            desc: "Gateway to eastern hills with cultural diversity",
            image: dharan,
        },
        {
            type: "Popular Cities",
            title: "Kathmandu",
            desc: "Capital city hidden with many history and nature",
            image: kathmandu,
        },
        {
            type: "Popular Cities",
            title: "Hetuda",
            desc: "Capital city hidden with many history and nature",
            image: hetauda,
        },

        // Mountains
        {
        type: "Mountains",
        title: "Everest Base Camp",
        desc: "World's highest trekking route",
        image: everest,
        },
        {
        type: "Mountains",
        title: "Annapurna",
        desc: "Famous for panoramic Himalayan views",
        image: annapurna,
        },

        // Cities
        {
        type: "Cities",
        title: "Kathmandu",
        desc: "Capital city with rich history",
        image: kasthamandap,
        },
        {
        type: "Cities",
        title: "Butwal",
        desc: "Fast-growing business city",
        image: butwal,
        },
        {
        type: "Cities",
        title: "Itahari",
        desc: "Fast-growing business city",
        image: itahari,
        },

        // Nature & Wildlife
        {
        type: "Nature & Wildlife",
        title: "Bardia National park",
        desc: "Home of Bengal tigers and wildlife",
        image: bardia,
        },
        {
        type: "Nature & Wildlife",
        title: "Rara National Park",
        desc: "Nepal’s largest freshwater lake",
        image: rara,
        },
    ];

    // *** FILTER LOGIC ***
    const filteredCards = activeTab === "All" ? data: data.filter((item) => item.type === activeTab);

    // Scroll handlers
    const scrollLeft=()=>{
        if(scrollRef.current) scrollRef.current.scrollBy({ left:-350, behavior:"smooth"});
    };

    const scrollRight=()=>{
        if(scrollRef.current) scrollRef.current.scrollBy({ left:350, behavior:"smooth"});
    };

    //Form states
    const [pickup, setPickup]= useState("");
    const[destination,setDestination]= useState("");
    const[pickupDate,setPickupDate]= useState("");
    const[returnDate,setReturnDate]= useState("");
    const[days,setDays]= useState("1");
    const[requirements,setRequirements]= useState("");

    const totalPrice= days*100; //sample price
    const handleIncrease =() => setDays(days+1);
    const handleDecrease =()=> days>1 && setDays(days-1);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Booking confirmed!");
    };
   

    return(
        <section className="w-full fade-up">

            {/*Hero Section*/}
            <div className="fade-up relative w-full h-[500px] bg-cover bg-center"
                style={{ backgroundImage:`url(${travel})` }}
                >
                    {/*overlay*/}
                <div className="absolute inset-0 bg-black/25 "></div>

                {/*hero content*/}
                <div className="relative z-10 max-ww-[1200px] mx-auto px-20 h-full flex flex-col justify-center">
                    <h1 className="text-white font-bold text-5xl md:text-5xl leading-tight">
                        Discover Nepal's<br /> Hidden Treasures
                    </h1>

                    <p className="text-white mt-4 max-w-[550px] text-xl">
                        Experience the beauty of the Himalayas with our premium travel services.
                    </p>

                    <button className="mt-6 bg-[#1b5d67f5] hover:bg-[#549ca7c7] text-white px-6 py-3 rounded-lg font-semibold w-fit">
                        Book Your Adventure Now
                    </button>
                </div>
            </div>

                {/* POPULAR VEHICLES SECTION */}
                <div className="py-10   px-25">
                    <div className="bg-gray-400/10 rounded-xl py-10  ">

                        <p className="text-gray-600 text-opacity-10 pt-5 ml-5 ">
                            TRAVELLER'S FAVOURITE
                        </p>

                        <h1 className="text-5xl font-bold text-black ml-5 pt-1">
                            Explore All Popular <br /> Vehicles
                        </h1>

                        <p className="text-gray-600 mt-2 ml-5 mb-10">
                            Plan book, and embark on your dream adventure with our export <br />guidance and tailored experiences.
                        </p>

                        {/*Vehicles cards*/}
                        <div className="mt-15 grid grid-cols-1  md:grid-cols-2  h-[220px] md:h-[300px] lg:h-[580px] object-cover gap-9 m-5 ">
                            {Vehicles.map((v,index)=>(
                                <div
                                key={index}
                                onClick={()=> {
                                    setSelectedVehicles(v);
                                    setShowForm(true);
                                }}
                                    className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transform transition-all duration-300 hover:scale-[1.04]"
                                >
                                    <img src={v.img} alt={v.name} className="w-full h-[280px] object-cover" 
                                    />

                                    {/* overlay text */}
                                    <div className="absolute bottom-0 left-0 w-full p-9 bg-gradient-to-t from-black/60 to-transparent">
                                        <h2 className="text-white font-extrabold text-3xl">{v.name}</h2>
                                        <p className="text-gray-200 text-sm">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                    {/* BOOKING FORM MODAL */}
                    {showForm && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50" >
                        <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg relative">

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full"
                                
                            >
                                <X />
                            </button>

                            <h2 className="text-2xl font-bold mb-2">{selectedVehicle?.name} Booking</h2>

                            <img
                                src={selectedVehicle?.img}
                                alt=""
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />

                            {/* FORM START */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Pick-up Location
                                        </label>
                                        <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Destination
                                        </label>
                                        <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Pick-up Date
                                        </label>
                                        <input
                                        type="date"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Return Date
                                        </label>
                                        <input
                                        type="date"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Number of Days
                                    </label>

                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={handleDecrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md"
                                            >
                                            -
                                        </button>

                                        <input
                                        type="number"
                                        readOnly
                                        value={days}
                                        className="w-16 text-center border-y border-gray-300 py-1"
                                        />

                                        <button
                                            type="button"
                                            onClick={handleIncrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md"
                                            >
                                            +
                                        </button>
                                    </div>

                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Special Requirements
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={requirements}
                                        onChange={(e) => setRequirements(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Any special requests?"
                                    ></textarea>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Total Price:</p>
                                        <p className="text-xl font-bold text-green-600">${totalPrice}</p>
                                    </div>

                                    <button className="bg-[#1b5d67f5] hover:bg-[#549ca7c7] text-white font-bold py-2 px-6 rounded-md">
                                        Confirm Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/*trip-section*/}
                <section className="py-5 max-w-[1400px] mx-auto px-4 transform transition">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                    Book your Next Trip
                    </h2>

                    {/* Tabs*/}
                    <div className="flex gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full border text-sm font-medium transition
                            ${
                            activeTab === tab
                                ? "bg-[#1b5d67f5] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                        {tab}
                        </button>
                    ))}
                    </div>

                {/* Cards Scroll Row */}
                <div className="relative">
                {/* Scroll Left Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 "
                >
                    <ChevronLeft />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-3"
                >
                    {filteredCards.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="min-w-[280px] max-w-[300px] bg-white rounded-2xl shadow-md cursor-pointer overflow-hidden "
                    >
                        {/* Image */}
                        <div className="h-40 w-full rounded-t-2xl overflow-hidden  transition-transform duration-500 hover:scale-110 ">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Text */}
                        <div className="p-4">
                        <h3 className="font-semibold text-lg text-[#0F172A]">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>

                {/* Scroll Right Button */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
                >
                    <ChevronRight />
                </button>
                </div>
            </section>

            {/*winter special*/}
            <div className="py-5 max-w-[1400px] mx-auto px-4 transform transition">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Winter Special Trip in Nepal
                </h2>

            </div>

        </section>
    );
}