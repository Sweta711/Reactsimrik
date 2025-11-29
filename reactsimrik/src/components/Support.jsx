import React from "react"; 
import { MdLocationOn } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineReload } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import supportimgg from "../assets/support.png";

export default function Services() {
  return (
    <section className="px-4 md:px-10 py-[50px] bg-white">

      {/* Title */}
      <div className="mb-[35px] mt-[5px] text-center">
        <h2 className="fade-up text-[28px] md:text-[34px] font-bold text-black">
          Supporting You Through Your Journey
        </h2>
      </div>

      {/* MAIN CARD */}
      <div className="
        max-w-[1300px] mx-auto bg-white rounded-[20px] shadow-xl 
        px-4 md:px-10 py-10
        flex flex-col lg:flex-row gap-10 lg:gap-6
      ">

        {/* LEFT SIDE IMAGE CARD */}
        <div className="
          w-full lg:w-[50%] 
          rounded-[20px] overflow-hidden relative
        ">
          <img
            src={supportimgg}
            alt="Support"
            className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-full object-cover"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute top-[20px] left-[20px] p-4 sm:p-6">
            <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold leading-tight text-white/90 mt-[40px]">
              TRAVEL COMFORTABLY,<br /> ARRIVE ON TIME
            </h1>
            <p className="mt-4 text-[14px] sm:text-[16px] max-w-[420px] text-white">
              Experience premium bus travel with comfortable seating,
              on-time departures, and exceptional service.
            </p>
            <button className="mt-4 bg-[#1b5d67f5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c8dee1c7] hover:text-[#1b5d67f5] transition">
              BOOK A SEAT NOW
            </button>
          </div>
        </div>

        {/* RIGHT SIDE TEXT CARD */}
        <div className="w-full lg:w-[45%] p-2 md:p-4">

          <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-800 mt-[10px]">
            HOW CAN I CHANGE MY TICKET ?
          </h3>

          <p className="text-gray-600 mt-3 text-[14px] sm:text-[15px] leading-relaxed">
            We offer flexible change and cancellation policies on most
            Mero Bus tickets. Fees may apply depending on the route
            and timing.
          </p>

          {/* ICONS */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 mt-5 text-gray-700">
            <div className="flex gap-2 items-center">
              <MdLocationOn className="text-[22px]" />
              <span className="text-sm mt-1">Free</span>
            </div>
            <div className="flex gap-2 items-center">
              <TbRefresh className="text-[22px]" />
              <span className="text-sm mt-1">Penalty</span>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineReload className="text-[22px]" />
              <span className="text-sm mt-1">Rebook</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaMoneyBillWave className="text-[22px]" />
              <span className="text-sm mt-1">Refund</span>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
            <p className="text-gray-800 font-medium">
              Priority Minimum Halides Refund
            </p>
            <button className="text-[#008080] font-semibold flex items-center gap-1">
              View refund policy →
            </button>
          </div>

          {/* GET IT BUTTON */}
          <button className="w-full mt-6 bg-[#1b5d67f5] text-white py-3 rounded-lg font-semibold hover:bg-[#c8dee1c7] hover:text-[#1b5d67f5]">
            Get it
          </button>

        </div>
      </div>
    </section>
  );
}
