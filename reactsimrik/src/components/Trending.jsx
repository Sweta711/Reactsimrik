import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

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
        desc: "Industrial city with the cultural significance."
        }
    ];

    const direction = useScrollDirection();

return (
<section className="max-w-[1400px] mx-auto px-[20px] sm:px-[30px] py-[40px] sm:py-[30px]">

    {/* Title Section */}
    <FadeUpWrapper direction={direction}>
    <div className="mb-[25px] sm:mb-[35px] mt-10">
    <h2 className="fade-up text-2xl md:text-[34px] font-bold text-black flex flex-wrap items-center gap-3 text-black">
        Trending destinations
        <span className="text-[16px] sm:text-[18px] text-gray-600 font-normal">
        from Kathmandu
        </span>
    </h2>
    </div>
    </FadeUpWrapper>

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
        <FadeUpWrapper key={index} direction={direction}>
        <div
        key={index}
        className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
        <div className="overflow-hidden rounded-xl">
        <img src={item.img}
        className="w-full h-[180px] sm:h-[250px] object-cover transition-transform duration-500 hover:scale-110" />
        </div>

        <div className="p-5 sm:p-6">
            <h3 className="text-[20px] sm:text-[22px] font-bold mb-2">
            {item.name}
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed text-[14px] sm:text-[15px]">
            {item.desc}
            </p>

            <button className="w-full bg-[#1b5d67f5] text-white py-3 rounded-lg font-semibold hover:bg-[#c8dee1c7] hover:text-[#1b5d67f5] transition">
            BOOK SEAT NOW
            </button>
        </div>
        </div>
        </FadeUpWrapper>
    ))}
    </div>
</section>
);
}

function FadeUpWrapper({ children, direction }) {
const ref = useRef();
const isInView = useInView(ref, { once: false });

return (
<motion.div
    ref={ref}
    initial={{ opacity: 0, y: 40 }}
    animate={
    isInView && direction === "up"
        ? { opacity: 1, y: 0 }
        : { opacity: 1, y: 0 }
    }
    transition={{ duration: 0.6, ease: "easeOut" }}
>
    {children}
</motion.div>
);
}