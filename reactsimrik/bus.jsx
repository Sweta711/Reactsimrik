// src/components/bus/BusBookingApp.jsx
import React, { useState } from "react";
import simrikBus from "../../assets/simrik.png";

// BUS interiors
import busSeatStandard from "../../assets/seat.webp";
import busSeatDeluxe from "../../assets/busSeat.jpeg";
import busSeatSleeper from "../../assets/busSeat1.jpeg";

/*  VEHICLES – ONLY BUSES  */
const vehicles = [
  {
    id: "deluxe",
    type: "bus",
    image: simrikBus,
    name: "Simrik Deluxe A/C (Bus)",
    departure: "7:00 AM",
    arrival: "3:00 PM",
    price: 1500,
    features: ["A/C", "Wi-Fi", "Charging Port"],
    amenities: ["Water Bottle", "Sofa Seats", "Reading Light"],
    gallery: [busSeatDeluxe, busSeatStandard],
    boardingPoints: ["Boudha (06:00 AM)", "Koteshwor (06:20 AM)"],
    droppingPoints: ["Kakarvitta (03:00 PM)"],
  },
  {
    id: "express",
    type: "bus",
    image: simrikBus,
    name: "Simrik Express (Bus)",
    departure: "9:30 AM",
    arrival: "5:30 PM",
    price: 1100,
    features: ["Wi-Fi", "Charging Port"],
    amenities: ["Bottle of Water", "Reclining Seats"],
    gallery: [busSeatStandard],
    boardingPoints: ["Kalanki (09:00 AM)"],
    droppingPoints: ["Kakarvitta (05:30 PM)"],
  },
  {
    id: "night",
    type: "bus",
    image: simrikBus,
    name: "Simrik Night Rider (Bus)",
    departure: "10:00 PM",
    arrival: "6:00 AM",
    price: 1080,
    features: ["A/C", "Wi-Fi", "Sleeper"],
    amenities: ["Blanket", "Pillow", "Charging Port"],
    gallery: [busSeatSleeper, busSeatDeluxe],
    boardingPoints: ["Gaushala (09:30 PM)", "Koteshwor (09:45 PM)"],
    droppingPoints: ["Kakarvitta (06:00 AM)"],
  },
  {
    id: "electric-ev",
    type: "bus",
    image: simrikBus,
    name: "Simrik Electric Yutong (EV Bus)",
    departure: "6:30 AM",
    arrival: "2:30 PM",
    price: 1350,
    features: ["Electric", "A/C", "Wi-Fi"],
    amenities: ["USB Charging", "Extra Legroom", "Eco-Friendly Ride"],
    gallery: [busSeatStandard, busSeatDeluxe],
    boardingPoints: ["New Buspark (06:00 AM)", "Koteshwor (06:15 AM)"],
    droppingPoints: ["Kakarvitta (02:30 PM)"],
  },
];

/*  SEAT LAYOUT (ONLY BUS)  */
const createLayout = (rows, cols, options = {}) => {
  const { occupiedIds = [], womenIds = [] } = options;
  const occupiedSet = new Set(occupiedIds);
  const womenSet = new Set(womenIds);

  const seats = [];
  for (let r = 1; r <= rows; r++) {
    for (const c of cols) {
      const id = `${r}${c}`;
      seats.push({
        id,
        status: occupiedSet.has(id) ? "occupied" : "available",
        type: womenSet.has(id) ? "women" : "normal",
      });
    }
  }
  return { rows, cols, seats };
};

const seatLayoutBus = createLayout(10, ["A", "B", "C", "D"], {
  occupiedIds: ["1B", "2A", "2D", "4B", "4C", "5D", "6A", "7B", "9A"],
  womenIds: ["3C", "5A", "7C", "8D"],
});

/*  MAIN COMPONENT – ONLY BUSES  */
const Bus = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [expandedBusId, setExpandedBusId] = useState(vehicles[0].id);
  const [expandedTab, setExpandedTab] = useState("amenities");
  const [expandedImage, setExpandedImage] = useState(null);

  // filters (price + features only)
  const [priceFilter, setPriceFilter] = useState("any"); // any / under1000 / 1000-1500 / above1500
  const [featureFilters, setFeatureFilters] = useState({
    ac: false,
    wifi: false,
    electric: false,
  });

  const seatPrice = selectedBus ? selectedBus.price : 0;
  const totalPrice = selectedSeats.length * seatPrice;

  const toggleFeature = (key) => {
    setFeatureFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearAllFilters = () => {
    setPriceFilter("any");
    setFeatureFilters({ ac: false, wifi: false, electric: false });
  };

  const filteredVehicles = vehicles.filter((v) => {
    // price filter
    if (priceFilter === "under1000" && v.price >= 1000) return false;
    if (priceFilter === "1000-1500" && (v.price < 1000 || v.price > 1500))
      return false;
    if (priceFilter === "above1500" && v.price <= 1500) return false;

    // feature filters
    if (featureFilters.ac && !v.features.some((f) => f.includes("A/C")))
      return false;
    if (featureFilters.wifi && !v.features.some((f) => f.includes("Wi-Fi")))
      return false;
    if (
      featureFilters.electric &&
      !v.features.some((f) => f.toLowerCase().includes("electric"))
    )
      return false;

    return true;
  });

  const handleToggleSeat = (seat) => {
    if (seat.status === "occupied") return;
    setSelectedSeats((prev) =>
      prev.includes(seat.id)
        ? prev.filter((s) => s !== seat.id)
        : [...prev, seat.id]
    );
  };

  const handleSelectBus = (bus) => {
    if (selectedBus && selectedBus.id === bus.id) {
      setSelectedBus(null);
      setSelectedSeats([]);
      return;
    }
    setSelectedBus(bus);
    setSelectedSeats([]);
  };

  const closeSeatPanel = () => {
    setSelectedBus(null);
    setSelectedSeats([]);
  };

  const handleConfirmSelection = () => {
    if (!selectedSeats.length) {
      alert("Please select at least one seat.");
      return;
    }
    const seatsList = selectedSeats.join(", ");
    alert(`You have selected seats: ${seatsList}. Total: Rs. ${totalPrice}`);
    closeSeatPanel();
  };

  return (
    <div className='max-w-full min-h-screen bg-[#ffffffd7] text-[#0f172a] font-[system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif]'>
      <div className="max-w-full min-h-screen bg-[rgba(255,255,255,0.4)] backdrop-blur-sm px-3 py-6 sm:px-4 md:px-8 lg:px-12">
        {/* TITLE */}
        <div className="max-w-5xl mx-auto mb-5">
          <h1 className="text-center text-xl sm:text-2xl font-semibold text-[#0f172a]">
            Bus Tickets
          </h1>
        </div>

        {/* LAYOUT: FILTERS + RESULTS */}
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-4 md:gap-6">
  {/* FILTERS */}
  <aside className="w-full lg:w-64 xl:w-72 self-start bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.12)] p-4 sm:p-5 mb-4 lg:mb-0">

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#111827] m-0">
                Filters
              </h3>
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#059669] hover:text-[#047857] bg-transparent border-0 p-0 cursor-pointer"
              >
                Clear all
              </button>
            </div>

            {/* PRICE */}
            <div className="border-t border-[#e5e7eb] pt-3 mt-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#6b7280] mb-1">
                Price (per person)
              </p>
              <div className="space-y-1 text-[13px] text-[#111827]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="accent-[#059669]"
                    value="any"
                    checked={priceFilter === "any"}
                    onChange={() => setPriceFilter("any")}
                  />
                  <span>Any price</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="accent-[#059669]"
                    value="under1000"
                    checked={priceFilter === "under1000"}
                    onChange={() => setPriceFilter("under1000")}
                  />
                  <span>Under Rs. 1000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="accent-[#059669]"
                    value="1000-1500"
                    checked={priceFilter === "1000-1500"}
                    onChange={() => setPriceFilter("1000-1500")}
                  />
                  <span>Rs. 1000 – 1500</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="accent-[#059669]"
                    value="above1500"
                    checked={priceFilter === "above1500"}
                    onChange={() => setPriceFilter("above1500")}
                  />
                  <span>Above Rs. 1500</span>
                </label>
              </div>
            </div>

            {/* FEATURES */}
            <div className="border-t border-[#e5e7eb] pt-3 mt-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#6b7280] mb-1">
                Features
              </p>
              <div className="space-y-1 text-[13px] text-[#111827]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#059669]"
                    checked={featureFilters.ac}
                    onChange={() => toggleFeature("ac")}
                  />
                  <span>A/C</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#059669]"
                    checked={featureFilters.wifi}
                    onChange={() => toggleFeature("wifi")}
                  />
                  <span>Wi-Fi</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#059669]"
                    checked={featureFilters.electric}
                    onChange={() => toggleFeature("electric")}
                  />
                  <span>Electric (EV)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* RESULTS – RIGHT */}
          <main className="flex-1 flex justify-center items-start">
            <section
              className="w-full max-w-3xl xl:max-w-[960px] bg-white rounded-3xl
                         pt-5 pb-[18px] px-[14px] sm:px-[18px] md:px-[22px]
                         shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h2 className="m-0 text-[18px] sm:text-[20px] font-bold text-[#0f172a]">
                    Available Buses
                  </h2>
                  <p className="mt-1 mb-0 text-[12px] sm:text-[13px] text-[#6b7280]">
                    Choose a bus and then pick your preferred seats.
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full
                             px-3 py-1 text-[11px] sm:text-[12px] font-medium
                             bg-[#ecfdf5] text-[#047857] self-start sm:self-auto"
                >
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  {filteredVehicles.length} buses found
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-1">
                {filteredVehicles.map((bus) => (
                  <article
                    key={bus.id}
                    className="rounded-[18px] border border-[#e5e7eb]
                               pt-3.5 pb-3 px-3 sm:px-4
                               transition-all duration-200
                               hover:shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                               hover:border-[#bae6fd]
                               hover:-translate-y-0.5 bg-white"
                  >
                    {/* TOP ROW */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      {/* IMAGE + INFO */}
                      <div className="flex flex-1 items-center gap-3 sm:gap-4 min-w-[240px]">
                        <div
                          className="w-[140px] h-[100px] sm:w-[170px] sm:h-[120px] rounded-[14px]
                                     overflow-hidden shrink-0 bg-[#f3f4f6]
                                     shadow-[0_8px_22px_rgba(15,23,42,0.18)]"
                        >
                          <img
                            src={bus.image}
                            alt={bus.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h3 className="m-0 text-[15px] sm:text-[17px] font-bold text-[#0f172a] tracking-[0.4px]">
                            {bus.name}
                          </h3>
                          <p
                            className="m-0 text-[12px] sm:text-[13px] text-[#475569]
                                       flex flex-wrap gap-1 items-baseline
                                       tracking-[0.25px]"
                          >
                            <span className="font-semibold text-[#334155] tracking-[0.3px]">
                              Departure
                            </span>
                            <span className="font-semibold text-[#0f172a] tracking-[0.4px]">
                              {bus.departure}
                            </span>
                            <span className="mx-1 text-[#9ca3af]">•</span>
                            <span className="font-semibold text-[#334155] tracking-[0.3px]">
                              Arrival
                            </span>
                            <span className="font-semibold text-[#0f172a] tracking-[0.4px]">
                              {bus.arrival}
                            </span>
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {bus.features.map((f) => (
                              <span
                                key={f}
                                className="text-[11px] px-[9px] py-1 rounded-full
                                           border border-[#e5e7eb]
                                           bg-[#f8fafc] text-[#475569]
                                           tracking-[0.35px]"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* PRICE + BUTTON */}
                      <div className="flex flex-row md:flex-col items-end justify-between gap-2 min-w-[120px]">
                        <div className="text-right">
                          <div className="text-[16px] sm:text-[18px] font-bold text-[#047857] tracking-[0.4px]">
                            Rs. {bus.price}
                          </div>
                          <div className="text-[11px] text-[#64748b] tracking-[0.3px]">
                            per person
                          </div>
                        </div>
                        <button
                          className="border-none rounded-full px-[14px] sm:px-[18px] py-2
                                     text-[12px] sm:text-[13px] font-semibold cursor-pointer
                                     bg-[#00bfa5] text-white
                                     shadow-[0_10px_25px_rgba(0,191,165,0.4)]
                                     transition-all duration-200
                                     hover:bg-[#009f8a]
                                     hover:-translate-y-px
                                     hover:shadow-[0_14px_30px_rgba(0,191,165,0.45)]"
                          onClick={() => handleSelectBus(bus)}
                        >
                          {selectedBus && selectedBus.id === bus.id
                            ? "Hide Seats"
                            : "Select Seats"}
                        </button>
                      </div>
                    </div>

                    {/* TABS */}
                    <div
                      className="mt-3 pt-2.5 border-t border-[#e5e7eb]
                                 flex flex-wrap gap-2.5 text-[12px]"
                    >
                      {[
                        { key: "amenities", label: "Amenities" },
                        { key: "boarding", label: "Boarding & Dropping Point" },
                        { key: "gallery", label: "Gallery" },
                      ].map((tab) => {
                        const active =
                          expandedBusId === bus.id && expandedTab === tab.key;
                        return (
                          <button
                            key={tab.key}
                            className={`bg-transparent border-none pb-1
                                        text-[12px] cursor-pointer
                                        border-b-2
                                        ${
                                          active
                                            ? "border-b-[#00bfa5] text-[#0f766e] font-semibold"
                                            : "border-b-transparent text-[#6b7280]"
                                        }`}
                            onClick={() => {
                              setExpandedBusId(bus.id);
                              setExpandedTab(tab.key);
                            }}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* TAB CONTENT */}
                    {expandedBusId === bus.id && (
                      <div
                        key={expandedTab}
                        className="mt-2 bg-[#f9fafb] rounded-xl
                                   px-3 py-2.5 text-[13px] text-[#475569]
                                   tracking-[0.3px]"
                      >
                        {expandedTab === "amenities" &&
                          (bus.amenities && bus.amenities.length ? (
                            <ul className="m-0 pl-[18px] tracking-[0.25px] list-disc text-left">
                              {bus.amenities.map((item) => (
                                <li key={item} className="mb-1 text-[#475569]">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="m-0 text-[12px] text-[#9ca3af]">
                              No amenities information available.
                            </p>
                          ))}

                        {expandedTab === "boarding" && (
                          <div className="flex flex-wrap gap-6">
                            <div>
                              <h4 className="m-0 mb-1 text-[13px] font-semibold">
                                Boarding Point
                              </h4>
                              <ul className="m-0 pl-[18px] tracking-[0.25px] list-disc">
                                {bus.boardingPoints.map((bp) => (
                                  <li key={bp} className="mb-1 text-[#475569]">
                                    {bp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="m-0 mb-1 text-[13px] font-semibold">
                                Dropping Point
                              </h4>
                              <ul className="m-0 pl-[18px] tracking-[0.25px] list-disc">
                                {bus.droppingPoints.map((dp) => (
                                  <li key={dp} className="mb-1 text-[#475569]">
                                    {dp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {expandedTab === "gallery" &&
                          (bus.gallery && bus.gallery.length ? (
                            <>
                              {expandedImage &&
                                expandedImage.busId === bus.id && (
                                  <div
                                    className="w-full mb-2 p-2 rounded-2xl
                                               bg-white
                                               shadow-[0_10px_26px_rgba(15,23,42,0.18)]"
                                  >
                                    <img
                                      src={expandedImage.src}
                                      alt={expandedImage.alt}
                                      className="w-full max-h-[260px] object-cover rounded-xl"
                                    />
                                  </div>
                                )}

                              <div className="flex flex-wrap gap-3">
                                {bus.gallery.map((img, index) => (
                                  <img
                                    key={index}
                                    src={img}
                                    alt={`${bus.name} interior ${index + 1}`}
                                    className="w-[110px] h-[80px] sm:w-[120px] sm:h-[90px] object-cover rounded-xl
                                               shadow-[0_6px_14px_rgba(15,23,42,0.15)]
                                               cursor-pointer transition-transform duration-200
                                               hover:scale-[1.06]"
                                    onClick={() =>
                                      setExpandedImage({
                                        busId: bus.id,
                                        src: img,
                                        alt: `${bus.name} interior ${
                                          index + 1
                                        }`,
                                      })
                                    }
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <p className="m-0 text-[12px] text-[#9ca3af]">
                              No gallery available.
                            </p>
                          ))}
                      </div>
                    )}

                    {/* INLINE SEAT LAYOUT (ONLY BUS) */}
                    {selectedBus && selectedBus.id === bus.id && (
                      <div className="mt-4 border border-[#e5e7eb] rounded-2xl bg-white shadow-sm">
                        <header className="px-4 py-3.5 border-b border-[#e5e7eb] flex justify-between items-center gap-3">
                          <div>
                            <h3 className="m-0 text-[15px] sm:text-[16px] font-bold">
                              Select Seats – {selectedBus.name}
                            </h3>
                            <p className="m-0 mt-1 text-[11px] sm:text-[12px] text-[#6b7280]">
                              Click on available seats to select them.
                            </p>
                          </div>
                          <button
                            className="border-none bg-[#f3f4f6] w-[28px] h-[28px]
                                       rounded-full text-[16px] leading-none
                                       cursor-pointer flex items-center justify-center
                                       text-[#4b5563] hover:bg-[#e5e7eb]"
                            onClick={closeSeatPanel}
                          >
                            ×
                          </button>
                        </header>

                        <div className="px-4 pt-3.5 pb-2 overflow-x-auto">
                          {/* Driver */}
                          <div className="flex justify-end mb-2.5">
                            <div
                              className="inline-flex items-center justify-center
                                         px-2.5 py-1 rounded-full
                                         bg-[#f3f4f6] text-[11px] text-[#4b5563]"
                            >
                              Driver
                            </div>
                          </div>

                          <div className="bg-[#f9fafb] rounded-[18px] px-3 sm:px-4 pt-3.5 pb-4">
                            <div className="flex flex-col gap-2.5 items-center">
                              {Array.from(
                                { length: seatLayoutBus.rows },
                                (_, rowIndex) => {
                                  const rowNum = rowIndex + 1;
                                  const { cols, seats } = seatLayoutBus;

                                  const leftCols = cols.slice(
                                    0,
                                    Math.ceil(cols.length / 2)
                                  );
                                  const rightCols = cols.slice(
                                    Math.ceil(cols.length / 2)
                                  );

                                  const makeSeat = (letter) =>
                                    seats.find(
                                      (s) => s.id === `${rowNum}${letter}`
                                    );

                                  const sides = [
                                    leftCols.map(makeSeat),
                                    rightCols.map(makeSeat),
                                  ];

                                  return (
                                    <div
                                      className="flex gap-4 sm:gap-8"
                                      key={rowNum}
                                    >
                                      {sides.map((pair, sideIndex) => (
                                        <div className="flex" key={sideIndex}>
                                          {pair.map(
                                            (seat) =>
                                              seat && (
                                                <button
                                                  key={seat.id}
                                                  className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg
                                                              border text-[11px] sm:text-[12px] font-semibold
                                                              inline-flex items-center justify-center
                                                              mr-1
                                                              ${
                                                                seat.status ===
                                                                "occupied"
                                                                  ? "bg-[#fb7185] border-[#fb7185] text-white cursor-not-allowed"
                                                                  : selectedSeats.includes(
                                                                      seat.id
                                                                    )
                                                                  ? "bg-[#059669] border-[#059669] text-white"
                                                                  : "bg-[#f3f4f6] border-[#e5e7eb] hover:bg-[#d1fae5] hover:border-[#34d399]"
                                                              }`}
                                                  onClick={() =>
                                                    handleToggleSeat(seat)
                                                  }
                                                  disabled={
                                                    seat.status === "occupied"
                                                  }
                                                >
                                                  <span className="pointer-events-none">
                                                    {seat.id}
                                                  </span>
                                                  {seat.type === "women" && (
                                                    <span
                                                      className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full
                                                                  flex items-center justify-center
                                                                  text-[9px] font-bold leading-none
                                                                  ${
                                                                    seat.status ===
                                                                    "occupied"
                                                                      ? "bg-[#fee2e2] text-[#b91c1c]"
                                                                      : selectedSeats.includes(
                                                                          seat.id
                                                                        )
                                                                      ? "bg-white text-[#059669]"
                                                                      : "bg-[#ec4899] text-white"
                                                                  }`}
                                                    >
                                                      W
                                                    </span>
                                                  )}
                                                </button>
                                              )
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  );
                                }
                              )}

                              <div className="flex flex-wrap justify-center gap-3 mt-3.5 text-[10px] sm:text-[11px] text-[#4b5563]">
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className="w-4 h-4 rounded-full
                                               bg-[#e5e7eb] border border-[#d1d5db]"
                                  />
                                  <span>Available</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="w-4 h-4 rounded-full bg-[#fb7185]" />
                                  <span>Occupied</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="w-4 h-4 rounded-full bg-[#059669]" />
                                  <span>Selected</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className="w-4 h-4 rounded-full bg-[#ec4899]
                                               text-white flex items-center justify-center
                                               text-[10px] font-bold"
                                  >
                                    W
                                  </span>
                                  <span>Women seat</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <footer className="px-4 py-3.5 border-t border-[#e5e7eb] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[12px] sm:text-[13px]">
                          <div className="flex flex-col gap-0.5">
                            <div>
                              Selected Seats:{" "}
                              <strong>{selectedSeats.length}</strong>
                            </div>
                            <div>
                              Total: <strong>Rs. {totalPrice}</strong>
                            </div>
                          </div>
                          <button
                            className="border-none rounded-full px-[16px] sm:px-[18px] py-2
                                       text-[12px] sm:text-[13px] font-semibold cursor-pointer
                                       bg-[#00bfa5] text-white
                                       shadow-[0_10px_25px_rgba(0,191,165,0.4)]
                                       transition-all duration-200
                                       hover:bg-[#009f8a]
                                       hover:-translate-y-px
                                       hover:shadow-[0_14px_30px_rgba(0,191,165,0.45)] self-stretch sm:self-auto"
                            onClick={handleConfirmSelection}
                          >
                            Confirm Selection
                          </button>
                        </footer>
                      </div>
                    )}
                  </article>
                ))}

                {!filteredVehicles.length && (
                  <div className="text-center text-sm text-[#6b7280] py-10">
                    No buses match your filters. Try changing your options.
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bus;
