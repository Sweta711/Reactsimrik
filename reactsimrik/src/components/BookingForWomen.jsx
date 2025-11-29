import React from "react";

export default function BookingForWomenModal({ open, onClose }) {
if (!open) return null;

// All card content stored dynamically
const cards = [
{
    text: "Exclusive deals for women",
    icon: "🏷️",
    bg: "bg-pink-50"
},
{
    text: "See number of women travelling along",
    icon: "👭",
    bg: "bg-yellow-50"
},
{
    text: "Priority women helpline available",
    icon: "☎️",
    bg: "bg-green-50"
},
{
    text: "Buses seat preferred by women",
    icon: "🧍‍♀️",
    bg: "bg-blue-50"
}
];

return (
<div
    className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50"
    onClick={onClose}
>
    <div
    className="relative w-[540px] max-w-[92vw] bg-white rounded-2xl shadow-2xl p-7 md:p-8 animate-scaleIn"
    onClick={(e) => e.stopPropagation()}
    >
    {/* Close button */}
    <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl transition"
    >
        ×
    </button>

    {/* Header */}
    <div className="text-center mb-5">
        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-red-100 flex items-center justify-center text-xl">
        👩‍🦰
        </div>

        <h2 className="text-lg font-bold text-gray-900">Booking for women</h2>
        <p className="text-sm text-gray-500 mt-1">
        Providing helpful details to smartly choose bus travel for women.
        </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-2 gap-4 mt-4 max-[480px]:grid-cols-1">
        {cards.map((c, i) => (
        <div
            key={i}
            className={`${c.bg} p-4 rounded-xl flex items-center gap-3`}
        >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
            {c.icon}
            </div>
            <p className="text-sm font-semibold text-gray-800 leading-tight">
            {c.text}
            </p>
        </div>
        ))}
    </div>

    {/* CTA */}
    <div className="flex justify-center mt-6">
        <button
        onClick={onClose}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition transform hover:-translate-y-0.5"
        >
        Got it
        </button>
    </div>
    </div>
</div>
);
}
