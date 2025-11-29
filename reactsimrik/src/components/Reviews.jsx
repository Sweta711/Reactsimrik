import React from "react";
import reviewbg from "../assets/reviewbg.jpg";

export default function ReviewSection() {
return (
<section
    className="bg-fixed bg-cover bg-center py-30"
    style={{ backgroundImage: `url(${reviewbg})` }}
>
    {/* Overlay for readability */}
    <div className="bg-black/40 w-full h-full py-24">
    <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className=" fade-up font-bold text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
        What Our Passengers Say
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <p className="text-gray-800">
            “Great service! Clean buses, on-time, and very smooth booking process.”
            </p>
            <h4 className="mt-4 font-bold text-teal-700">— Sweta Pradhan</h4>
        </div>

        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <p className="text-gray-800">
            “The women-only seat option made me feel much safer during travel.”
            </p>
            <h4 className="mt-4 font-bold text-teal-700">— Sujata Gurung</h4>
        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <p className="text-gray-800">
            “I love how easy it is to compare routes and book tickets instantly!”
            </p>
            <h4 className="mt-4 font-bold text-teal-700">— Anish Lama</h4>
        </div>
        </div>
    </div>
    </div>
</section>
);
}
