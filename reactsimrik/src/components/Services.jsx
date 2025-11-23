import React from "react";
import busInside from "../assets/busInside.jpg";
import temple from "../assets/temple1.jpg";

export default function Services(){
    return(
        <section className="bg-[#e7e3da] py-[100px]">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* left Section */}
                <div>
                    <h2 className="text-[34px] font-semibold text-black mb-10">
                        Our Services
                    </h2>

                    {/* SERVICE LIST */}
                    <div className="space-y-10">

                        {/* ITEM 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1b5d67b9] rounded-full flex items-center justify-center text-black font-bold">
                                01
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                Seat Guarantee
                                </h3>
                                <p className="text-gray-600 mt-2">
                                Comfort, convenience, and hassle-free travel experience with assured seating.
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1b5d67b9] rounded-full flex items-center justify-center text-black font-bold">
                                02
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                Easy & Quick Booking
                                </h3>
                                <p className="text-gray-600 mt-2">
                                Book your seat instantly online and share the travel experience with ease.
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1b5d67b9] rounded-full flex items-center justify-center text-black font-bold">
                                03
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                Best Bus
                                </h3>
                                <p className="text-gray-600 mt-2">
                                Enjoy premium seating, A/C, Wi-Fi, and clean interiors designed for long comfortable rides.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE (ARCH SHAPE) */}

                    <div className="relative flex justify-center items-left">
                    {/* LEFT IMAGE (rounded-left shape) */}
                    <div className="
                        w-[350px] h-[460px] rounded-l-[40px] overflow-hidden shadow-xl
                        border-4 border-white bg-white relative z-18">
                        <img
                        src={busInside}
                        alt="Bus Interior"
                        className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT IMAGE (rounded-right shape) - slightly behind */}
                    <div className="w-[380px] h-[460px] rounded-r-[40px] overflow-hidden shadow-xl
                        border-4 border-white bg-white absolute right-[-0px] top-[50px] z-10 ">
                        <img
                        src={temple}
                        alt="Travel Destination"
                        className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}