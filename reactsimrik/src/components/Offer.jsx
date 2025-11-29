import { useState } from "react";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import referral1 from "../assets/refer.jpg";
import flat50 from "../assets/flat2.jpg";
import spinGif from "../assets/spin.jpg";
import freecan from "../assets/free.jpg";
import jeepfive from "../assets/jeep.jpg";
import off from "../assets/save.png";

export default function OfferSection() {
const [activeTab, setActiveTab] = useState("All");

const tabs = ["All", "Bus", "Jeep", "Hiace"];

const offers = [
{
    type: "Bus",
    title: "Referral bonus upto Rs 100",
    code: "REFER100",
    valid: "Valid anytime",
    image: referral1,
},
{
    type: "Bus",
    title: "Flat Rs. 50-100 OFF on First Booking",
    code: "FIRST100",
    valid: "Valid till 30 Dec",
    image: flat50,
},
{
    type: "Bus",
    title: "Spin & Win up to Rs 100",
    code: "SPINWIN",
    valid: "Daily",
    image: spinGif,
},
/*
    type: "Bus",
    title: "Free cancellation within 6 hours",
    code: "FREECAN",
    valid: "Always applicable",
    image: freecan,
*/
{
    type: "Jeep",
    title: "5 bookings → Rs 300 OFF",
    code: "LOYAL300",
    valid: "Valid this month",
    image: jeepfive,
},
/*
    type: "Hiace",
    title: "Save Rs 80 on Hiace booking",
    code: "HIACE80",
    valid: "Valid till Feb",
    image: off,
*/
];

const filtered =
activeTab === "All"
    ? offers
    : offers.filter((item) => item.type === activeTab);

return (
<div className="mb-10 mt-10 py-30 max-w-[1400px] mx-auto px-[20px] sm:px-[30px] py-[40px] sm:py-[30px]">

    {/* Title */}
    <div className="mb-[25px] sm:mb-[35px] flex justify-between">
    <h2 className="fade-up text-2xl md:text-3xl font-bold">Offers for you</h2>
    {/*<button className="text-blue-600 hover:underline">View more</button>*/}
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
    {filtered.map((offer, i) => (
        <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="relative rounded-2xl shadow-md overflow-hidden cursor-pointer h-64 group"
        style={{
            backgroundImage: `url(${offer.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* Dark overlay */}
        <div className="absolute inset-0  bg-black/30 group-hover:bg-teal-200/30 transition "></div>

        {/* Content */}
        <div className="absolute inset-0 p-9 px-5  flex flex-col justify-between  text-bold text-teal-950 ">

            {/*Top section*/}
            
                {/* Type badge */}
                <span className="bg-white/90 mr-auto text-black text-semibold text-xs px-2 py-1  rounded-full backdrop-blur-sm">
                {offer.type}
                </span>

                <h3 className="mt-6 font-bold text-[20px] text-white leading-tight ">
                {offer.title}
                </h3>

                <p className="text-white text-sm mt-1">{offer.valid}</p>

                {/*offer code at the bottom*/}
                <div className=" mb-1 flex items-center gap-2 bg-white px-3 py-2 rounded-full backdrop-blur-sm w-fit">
                    <Tag size={16} className="text-black" />
                    <span className="font-medium text-black">{offer.code}</span>
                </div>
            
        </div>
       
        </motion.div>
    ))}
    </div>
</div>
);
}
