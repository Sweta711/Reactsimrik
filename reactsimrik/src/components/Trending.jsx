import React from "react";
import kathmandu from "../assets/kaathmandu.jpg";
import pokhara from "../assets/pokhara.jpg";
import dharan from "../assets/dharan.jpg";
import biratnagar from "../assets/biratnagar.jpg";

export default function Trending() {

    const destinations = [
        {
        name: "Kathmandu",
        img: kathmandu,
        desc: "The vibrant capital, rich in culture & history."
        },
        {
        name: "Pokhara",
        img: pokhara,
        desc: "Lakeside city with stunning mountain views."
        },
        {
        name: "Dharan",
        img: dharan,
        desc: "A commercial hub and gateway to the East."
        },
        {
        name: "Biratnagar",
        img: biratnagar,
        desc: "Industrial city with cultural significance."
        }
    ];

return (
<section className="max-w-[1400px] mx-auto px-[20px] sm:px-[30px] py-[40px] sm:py-[30px]">

    {/* Title Section */}
    <div className="mb-[25px] sm:mb-[35px]">
    <h2 className="text-[28px] sm:text-[34px] font-semibold flex flex-wrap items-center gap-3 text-black">
        Trending destinations
        <span className="text-[16px] sm:text-[18px] text-gray-600 font-normal">
        from Kathmandu
        </span>
    </h2>
    </div>

    {/* Cards */}
    <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-[25px] 
        sm:gap-[35px] 
        lg:gap-[40px]
    ">
    {destinations.map((item, index) => (
        <div
        key={index}
        className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
        <img src={item.img} className="w-full h-[180px] sm:h-[200px] object-cover" />

        <div className="p-5 sm:p-6">
            <h3 className="text-[20px] sm:text-[22px] font-bold mb-2">
            {item.name}
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed text-[14px] sm:text-[15px]">
            {item.desc}
            </p>

            <button className="w-full bg-[#1b5d67f5] text-white py-3 rounded-lg font-semibold hover:bg-[#549ca7c7] transition">
            BOOK SEAT NOW
            </button>
        </div>
        </div>
    ))}
    </div>
</section>
);
}
