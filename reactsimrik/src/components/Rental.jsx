import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import bus1 from "../assets/bus1.jpg";
import bus2 from "../assets/bus2.jpg";
import bus3 from "../assets/bus3.jpg";
import bus4 from "../assets/bus4.jpg";
import jeep1 from "../assets/jeep1.jpg";
import jeep2 from "../assets/jeep2.jpg";
import jeep3 from "../assets/jeep3.jpg";
import jeep4 from "../assets/jeep4.jpg";
import hiace1 from "../assets/hiace1.jpg";
import hiace2 from "../assets/hiace2.jpg";
import hiace3 from "../assets/hiace3.jpg";
import hiace4 from "../assets/hiace4.jpg";
import ev1 from "../assets/ev1.jpg";
import ev2 from "../assets/ev1.jpg";
import ev3 from "../assets/ev1.jpg";

export default function Rental(){
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Bus", "Jeep", "Hiace","EV"];
    const travel=[
        {
            type: "Bus",
            title: "Kathmandu-Pokhara Tourist Bus",
            image: bus1,
        },
        {
            type: "Bus",
            title: "Kathmandu-Biratnagar Tourist Bus",
            image: bus2,
        },
        {
            type: "Bus",
            title: "Kathmandu-Kakarbhitta Tourist Bus",
            image: bus3,
        },
        {
            type: "Bus",
            title: "Lumbini-Kathmandu Tourist Bus",
            image: bus4,
        },

        {
            type: "Jeep",
            title: "Kathmandu-Lumbini Bhairawa",
            image: jeep1,
        },

        {
            type: "Jeep",
            title: "Dharan-Kathmandu",
            image: jeep2,
        },
        {
            type: "Jeep",
            title: "Kathmandu-Mustang",
            image: jeep3,
        },
        {
            type: "Jeep",
            title: "Kathmandu-Taplejung",
            image: jeep4,
        },
        
        {
            type: "Hiace",
            title: "Kathmandu-Taplejung",
            image: hiace1,
        },
        {
            type: "Hiace",
            title: "Kathmandu-Dharan",
            image: hiace2,
        },
        {
            type: "Hiace",
            title: "Kathmandu-Pokhara",
            image: hiace3,
        },
        {
            type: "Hiace",
            title: "Pokhara",
            image: hiace4,
        },

        {
            type: "Ev",
            title: "Pokhara",
            image: ev1,
        },

        {
            type: "Ev",
            title: "kathmandu",
            image: ev2,
        },

        {
            type: "Ev",
            title: "Dharan",
            image: ev3,
        },
    ]

const filtered =
activeTab === "All"
    ? travel
    : travel.filter((item) => item.type === activeTab);

    return(
        <section className="mb-10 mt-10 py-30 max-w-[1400px] mx-auto px-[20px] sm:px-[30px] py-[40px] sm:py-[30px]">
            {/*Title section*/}
            <div className="mb-[25px] sm:mb-[35px] flex justify-between">
                <h2 className="fade-up text-2xl md:text-3xl font-bold ">
                Travel & Rental Services
                </h2>
                <button onClick={()=> navigate("/rental-details")}
                className="text-white rounded-full border  flex  px-8 py-2 bg-[#1b5d67f5] text-bold hover:bg-[#c8dee1c7] hover:text-black cursor-pointer"
                >Learn more</button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
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

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {filtered.map((travel, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative rounded-2xl shadow-md overflow-hidden cursor-pointer h-64 group"
                        style={{
                            backgroundImage: `url(${travel.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>

                        {/* Dark overlay */}
                        <div className="absolute inset-0   transition ">
                        </div>
                        {/* Content */}
                        <div className="absolute top-30 left-0 right-0 p-4 text-bold text-teal-950 ">

                            {/* Type badge */}
                            <span className="bg-white/90 text-black text-semibold text-xs px-3 py-1  rounded-full backdrop-blur-sm">
                            {travel.type}
                            </span>

                            <h3 className="mt-5 font-bold text-[20px] text-white leading-tight ">
                            {travel.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}