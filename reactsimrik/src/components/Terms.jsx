import React, { useEffect, useState } from "react";

function Terms({ initialTab = "terms" }) {
const [activeTab, setActiveTab] = useState(initialTab);
const [isSubmitted, setIsSubmitted] = useState(false);

// Scroll animation: add Tailwind classes when element comes into view
useEffect(() => {
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
    rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
    );
};

const handleScrollAnimation = () => {
    const elements = document.querySelectorAll(
    ".animate-on-scroll, .stagger-animation"
    );
    elements.forEach((element, idx) => {
    if (isElementInViewport(element)) {
        // add Tailwind utility classes for fade-up effect
        element.classList.add(
        "opacity-100",
        "translate-y-0",
        "duration-700",
        "ease-out"
        );
        // if it's a stagger, add a small delay using inline style
        if (element.classList.contains("stagger-animation")) {
        element.style.transitionDelay = `${idx * 50}ms`;
        }
    }
    });
};

// initialize elements to hidden + slightly translated
const init = () => {
    const elements = document.querySelectorAll(
    ".animate-on-scroll, .stagger-animation"
    );
    elements.forEach((el) => {
    el.classList.add("opacity-0", "translate-y-2");
    });
};

init();
handleScrollAnimation();
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("resize", handleScrollAnimation);

return () => {
    window.removeEventListener("scroll", handleScrollAnimation);
    window.removeEventListener("resize", handleScrollAnimation);
};
}, []);

/* PageTitle component */
const PageTitle = () => (
<div className="animate-on-scroll max-w-3xl mx-auto text-center mt-20 mb-6">
    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
    Legal &amp; Booking Information
    </h1>
    <p className="mt-2 text-sm text-slate-600">
    Please review Simrik Yatayat’s booking terms, policies and consultation
    support.
    </p>
</div>
);

/* Terms & Conditions */
const TermsConditions = () => (
<div className="content-section animate-on-scroll ">
    <h2 className="text-emerald-600 text-xl font-semibold mb-3">
    Simrik Yatayat – Terms &amp; Conditions
    </h2>

    <h3 className="text-emerald-600 font-semibold mt-4">1. Definitions</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        <strong>“Passenger”</strong> – Any person in whose name a ticket is
        issued and who is travelling in our vehicle.
    </li>
    <li>
        <strong>“Ticket”</strong> – A valid booking confirmation issued by
        Simrik Yatayat or its authorised partners.
    </li>
    <li>
        <strong>“Service”</strong> – Any bus, jeep or Hiace journey operated
        by Simrik Yatayat.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">2. Booking &amp; Ticketing</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>Tickets may be booked online, via authorised agents or at Simrik counters.</li>
    <li>
        A booking is confirmed only after full payment is received and a
        ticket / confirmation SMS is issued.
    </li>
    <li>
        Passengers must ensure that passenger name, date, route, boarding
        point and contact number are correct before final payment.
    </li>
    <li>
        Simrik Yatayat is not responsible for errors entered by the passenger
        (e.g. wrong date / route / mobile number).
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">3. Reporting Time &amp; Boarding</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Passengers must report at the selected boarding point at least{" "}
        <strong>30 minutes</strong> before departure time.
    </li>
    <li>
        If a passenger fails to report on time, the seat may be released and
        no refund will be provided.
    </li>
    <li>
        Passengers must carry a valid photo identity document and show the
        SMS/online ticket when asked by staff.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">4. Seat Allocation &amp; “Booking for Women”</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Seats are allotted as per the booking system. While we try to honour
        seat preferences, we may change seats for safety or operational
        reasons.
    </li>
    <li>
        Certain seats are marked as <strong>“Women Only”</strong>. When the
        “Booking for women” option is enabled in the UI, the system will only
        allocate seats from this section.
    </li>
    <li>
        Male passengers are not allowed to occupy women-only seats. Our staff
        may request passengers to change seats if they are occupying a
        restricted seat.
    </li>
    <li>
        Infants and small children must travel with a responsible adult.
        Unaccompanied minors may be refused boarding.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">5. Fares, Payments &amp; Taxes</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Ticket prices are dynamic and may vary based on date, demand,
        promotions or seat type (Deluxe, Sleeper, Jeep, Hiace, etc.).
    </li>
    <li>
        Fares displayed at the time of booking include basic fare and standard
        taxes. Service charges, payment gateway fees or agent commissions may
        be added separately.
    </li>
    <li>
        All payments must be made in full at the time of booking using
        accepted payment methods (cash, bank transfer, digital wallets, etc.).
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">6. Cancellations, Changes &amp; Refunds</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        <strong>Passenger-initiated cancellation</strong>:
        <ul className="list-disc ml-5 mt-1">
        <li>≥ 24 hours before departure – up to <strong>80% refund</strong> after applicable charges.</li>
        <li>12–24 hours before departure – up to <strong>50% refund</strong>.</li>
        <li>&lt; 12 hours before departure or no-show – <strong>no refund</strong>.</li>
        </ul>
    </li>
    <li>
        Change of date / route may be allowed subject to seat availability and
        re-booking charges. Promotional or discounted tickets may be
        non-refundable.
    </li>
    <li>
        If a journey is cancelled by Simrik Yatayat due to operational or
        safety reasons, passengers will be offered either:
        <ul className="list-disc ml-5 mt-1">
        <li>Full refund of base fare, or</li>
        <li>Free rescheduling on the next available service.</li>
        </ul>
    </li>
    <li>
        Refunds are processed to the original payment method within a
        reasonable processing time. Any bank / payment gateway delays are
        beyond our control.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">7. Luggage &amp; Baggage Policy</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Each passenger is generally allowed one cabin bag and one checked-in
        bag of reasonable weight (typical range 15–20 kg; the exact limit may
        vary by route and vehicle).
    </li>
    <li>
        Oversized or excess luggage may attract additional charges or be
        refused if it affects safety or comfort of other passengers.
    </li>
    <li>
        Dangerous goods (flammable, explosive, corrosive, illegal items, etc.)
        are strictly prohibited.
    </li>
    <li>
        Passengers are responsible for their personal belongings. Simrik
        Yatayat is not liable for loss or damage to laptops, jewellery,
        electronics, cash or valuables carried in baggage or on person.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">8. Conduct on Board</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Passengers must follow all reasonable instructions of the driver,
        helper and company staff.
    </li>
    <li>
        Smoking, alcohol, recreational drugs, carrying offensive items or
        disturbing other passengers is strictly prohibited.
    </li>
    <li>
        The company reserves the right to refuse boarding or off-load any
        passenger whose behaviour is abusive, unsafe or violates these terms.
        No refund will be provided in such cases.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">9. Delays, Route Changes &amp; Force Majeure</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        While we aim to maintain the scheduled departure and arrival times,
        delays may occur due to traffic, road conditions, weather, bandhs,
        strikes or mechanical issues.
    </li>
    <li>
        In case of road closures or safety considerations, the driver may
        change the route or timing at short notice.
    </li>
    <li>
        For events beyond our reasonable control (“force majeure”), Simrik
        Yatayat is not liable for any consequential loss (missed flight,
        hotel, meeting, etc.). Our obligation is limited to providing the
        journey or an alternate arrangement where possible.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">10. Vehicle Type &amp; Amenities</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Images of buses, jeeps, Hiace and seat layouts shown in the gallery
        are indicative. Actual interiors may differ slightly based on model
        year and configuration.
    </li>
    <li>
        Features like Wi-Fi, charging ports, blankets, snacks or entertainment
        are complimentary value-added services and may not be available on all
        trips or at all times.
    </li>
    <li>
        Failure or temporary unavailability of such amenities does not entitle
        passengers to a refund.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">11. Children, Seniors &amp; Special Assistance</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Children below a certain age/height may be required to share seats
        with an accompanying adult based on company policy.
    </li>
    <li>
        Passengers requiring special assistance (elderly, pregnant, persons
        with disability) should inform us at the time of booking so that
        suitable seats can be allocated where possible.
    </li>
    <li>
        Our staff will try to assist but are not trained medical
        professionals. Passengers must carry their own medicines and aids.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">12. Pets &amp; Restricted Items</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        Pets and live animals are generally not allowed unless explicitly
        permitted by company policy for specific routes.
    </li>
    <li>
        Firearms, explosives, illegal drugs and any items prohibited by law or
        considered unsafe by staff will not be allowed on board.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">13. Limitation of Liability</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>
        To the maximum extent permitted by law, Simrik Yatayat’s total
        liability for any claim arising out of a journey is limited to the
        ticket fare actually paid by the passenger.
    </li>
    <li>
        We do not accept responsibility for indirect or consequential losses,
        including but not limited to loss of profit, business, or
        opportunities.
    </li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">14. Privacy &amp; Data</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    We collect passenger information (such as name, mobile number, gender
    and journey details) only for the purpose of processing bookings,
    providing service updates and complying with legal obligations. Data is
    handled in line with our Privacy Policy and is not sold to third
    parties.
    </p>

    <h3 className="text-emerald-600 font-semibold mt-4">15. Governing Law &amp; Dispute Resolution</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    These Terms are governed by the laws of Nepal. Any disputes shall
    preferably be resolved amicably. If unresolved, they may be referred to
    the competent courts / authorities within Nepal.
    </p>

    <h3 className="text-emerald-600 font-semibold mt-4">16. Contact &amp; Support</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    For any questions regarding these Terms, cancellations, lost items or
    feedback, please contact Simrik Yatayat customer support at:
    </p>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li><strong>Phone:</strong> +977-XXX-XXX-XXXX</li>
    <li><strong>Email:</strong> support@simrikyatayat.com</li>
    <li><strong>Office:</strong> Koteshwor, Kathmandu, Nepal</li>
    </ul>
</div>
);

/* Privacy Policy */
const PrivacyPolicy = () => (
<div className="content-section animate-on-scroll">
    <h2 className="text-emerald-600 text-xl font-semibold mb-3">Privacy Policy</h2>
    <p className="text-sm text-slate-800 leading-relaxed">
    Simrik Yatayat respects your privacy and is committed to protecting your
    personal information. This policy explains how we collect, use and
    safeguard the data you share with us when you book tickets or use our
    website / mobile applications.
    </p>

    <div className="highlight-box mt-4 p-4 rounded-md bg-emerald-50 border-l-4 border-emerald-500">
    <p className="text-sm text-emerald-800"><strong>Last Updated:</strong> 30 Nov 2025</p>
    </div>

    <h3 className="text-emerald-600 font-semibold mt-4">1. Information We Collect</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li><strong>Identity &amp; Contact:</strong> Name, phone number, email, gender, nationality.</li>
    <li><strong>Booking Details:</strong> Routes, dates, seat numbers, payment method (masked), transaction IDs.</li>
    <li><strong>Technical Data:</strong> IP address, browser type, device type, approximate location, cookies.</li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">2. How We Use Your Information</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>To create and manage your bookings and issue tickets.</li>
    <li>To send SMS / email updates about your trip (delays, changes).</li>
    <li>To handle customer support, refund and complaint requests.</li>
    <li>To improve our routes, services, website and safety practices.</li>
    <li>To comply with legal, tax and regulatory requirements.</li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">3. Sharing of Information</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>With payment gateways and banks to process transactions.</li>
    <li>With technology partners who host our booking systems.</li>
    <li>With law enforcement or regulators when legally required or to prevent fraud or misuse.</li>
    </ul>
    <p className="text-sm text-slate-800 mt-2">We do not sell your personal data to third-party marketers.</p>

    <h3 className="text-emerald-600 font-semibold mt-4">4. Data Security &amp; Retention</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    We use reasonable technical and organisational measures to protect your
    information from unauthorized access, alteration or loss. Data is
    retained only for as long as necessary for bookings, legal obligations
    or dispute resolution.
    </p>

    <h3 className="text-emerald-600 font-semibold mt-4">5. Your Rights</h3>
    <ul className="list-disc ml-5 mt-2 text-sm text-slate-800 leading-relaxed">
    <li>Request access to the personal information we hold about you.</li>
    <li>Request correction of inaccurate or incomplete data.</li>
    <li>Request deletion of your data, subject to legal / accounting requirements.</li>
    <li>Opt out of non-essential marketing SMS or emails.</li>
    </ul>

    <h3 className="text-emerald-600 font-semibold mt-4">6. Cookies</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    Our website uses cookies to remember your preferences, keep you logged
    in and analyse traffic. You can manage your preferences via the cookie
    banner or your browser settings.
    </p>

    <h3 className="text-emerald-600 font-semibold mt-4">7. Contact</h3>
    <p className="text-sm text-slate-800 leading-relaxed mt-2">
    For privacy-related queries, please email <strong>privacy@simrikyatayat.com</strong>.
    </p>
</div>
);

/* Book Consultation / Support Form */
const BookConsultation = () => {
const [localForm, setLocalForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    condition: "",
    additionalInfo: "",
});
const [submitted, setSubmitted] = useState(false);

const handleLocalChange = (e) => {
    const { name, value } = e.target;
    setLocalForm((prev) => ({ ...prev, [name]: value }));
};

const handleLocalSubmit = (e) => {
    e.preventDefault();
    // you can replace console.log with actual API call
    console.log("Form submitted:", localForm);
    setIsSubmitted(true);
    setSubmitted(true);
};

if (isSubmitted || submitted) {
    return (
    <div className="form-container animate-on-scroll">
        <div id="success-message" className="bg-white rounded-xl p-6 shadow-md">
        <div className="text-3xl text-emerald-600 mb-3">✓</div>
        <h3 className="text-lg font-semibold mb-2">Thank you for contacting Simrik Support!</h3>
        <p className="text-sm text-slate-700 mb-3">
            We have received your details. Our team will get back to you within 24 hours regarding your query or special assistance.
        </p>
        <p className="text-sm text-slate-700">
            For urgent matters, please call us at <strong>+977-XXX-XXX-XXXX</strong>.
        </p>
        </div>
    </div>
    );
}

return (
    <div className="form-container animate-on-scroll">
    <div className="content-section mb-4">
        <h2 className="text-emerald-600 text-xl font-semibold mb-2">Support / Special Assistance Request</h2>
        <p className="text-sm text-slate-800">
        Need help with booking, refunds, group travel, or special seating needs? Fill out this form and our team will contact you.
        </p>
    </div>

    <form onSubmit={handleLocalSubmit} className="support-form bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-slate-700 mb-1">
            First Name <span className="text-rose-500">*</span>
            </label>
            <input
            id="first-name"
            name="firstName"
            value={localForm.firstName}
            onChange={handleLocalChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
            />
        </div>

        <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-slate-700 mb-1">
            Last Name <span className="text-rose-500">*</span>
            </label>
            <input
            id="last-name"
            name="lastName"
            value={localForm.lastName}
            onChange={handleLocalChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
            </label>
            <input
            id="email"
            name="email"
            type="email"
            value={localForm.email}
            onChange={handleLocalChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
            />
        </div>

        <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
            id="phone"
            name="phone"
            type="tel"
            value={localForm.phone}
            onChange={handleLocalChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
            />
        </div>
        </div>

        <div className="mt-4">
        <label htmlFor="condition" className="block text-sm font-semibold text-slate-700 mb-1">
            Your Request / Question <span className="text-rose-500">*</span>
        </label>
        <textarea
            id="condition"
            name="condition"
            rows={4}
            value={localForm.condition}
            onChange={handleLocalChange}
            placeholder="Tell us about your issue, group booking, refund request or special assistance needed..."
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
        />
        </div>

        <div className="mt-4">
        <label htmlFor="additional-info" className="block text-sm font-semibold text-slate-700 mb-1">
            Additional Information
        </label>
        <textarea
            id="additional-info"
            name="additionalInfo"
            rows={3}
            value={localForm.additionalInfo}
            onChange={handleLocalChange}
            placeholder="Any extra details (preferred travel date, route, number of passengers, etc.)"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-2 focus:outline-emerald-500"
        />
        </div>

        <button
        type="submit"
        className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold"
        >
        Submit Request
        </button>

        <p className="text-xs text-slate-600 mt-3">
        By submitting this form, you agree to our{" "}
        <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className="text-emerald-600 underline"
        >
            Terms &amp; Conditions
        </button>{" "}
        and{" "}
        <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className="text-emerald-600 underline"
        >
            Privacy Policy
        </button>
        .
        </p>
    </form>
    </div>
);
};


/* render tab content */
const renderTabContent = () => {
switch (activeTab) {
    case "terms":
    return <TermsConditions />;
    case "privacy":
    return <PrivacyPolicy />;
    case "consultation":
    return <BookConsultation />;
    default:
    return <TermsConditions />;
}
};

/* MAIN RETURN */
return (
<div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-6">
    <PageTitle />

    {/* Tabs container */}
    <div className="tab-container max-w-5xl mx-auto mt-8 mb-12 rounded-lg shadow-lg overflow-hidden">
        <div className="tab-buttons flex bg-slate-100 rounded-t-lg">
        <div
            onClick={() => setActiveTab("terms")}
            className={`tab-button flex-1 text-center py-4 px-6 text-sm font-semibold cursor-pointer transition ${
            activeTab === "terms"
                ? "bg-white text-slate-900 border-b-4 border-[#1d8cf8]"
                : "text-slate-600 hover:bg-slate-50"
            }`}
        >
            Terms &amp; Conditions
        </div>

        <div
            onClick={() => setActiveTab("privacy")}
            className={`tab-button flex-1 text-center py-4 px-6 text-sm font-semibold cursor-pointer transition ${
            activeTab === "privacy"
                ? "bg-white text-slate-900 border-b-4 border-[#1d8cf8]"
                : "text-slate-600 hover:bg-slate-50"
            }`}
        >
            Privacy Policy
        </div>

        <div
            onClick={() => setActiveTab("consultation")}
            className={`tab-button flex-1 text-center py-4 px-6 text-sm font-semibold cursor-pointer transition ${
            activeTab === "consultation"
                ? "bg-white text-slate-900 border-b-4 border-[#1d8cf8]"
                : "text-slate-600 hover:bg-slate-50"
            }`}
        >
            Support / Contact
        </div>
        </div>

        <div className="tab-content bg-white p-8">
        <div className="max-w-4xl mx-auto">{renderTabContent()}</div>
        </div>
    </div>
    </div>

</div>
);
}

export default Terms;
