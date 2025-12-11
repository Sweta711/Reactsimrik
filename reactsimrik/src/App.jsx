import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import BookingForWomen from "./components/BookingForWomen";

import Home from "./Home";
import SearchBus from "./components/SearchBus";
import RentalDetails from "./components/RentalDetails";
import Bus from "./components/Bus";
import Jeep from "./components/Jeep";
import Hiace from "./components/Hiace";
import Ev from "./components/Ev";
import Terms from "./components/Terms";

// This component decides when to show navbar
function Layout({ children }) {
  const location = useLocation();

  // All the pages where you DON'T want navbar
  const hideNavbarOn = [
    "/search-details",
    "/rental-details",
    "/terms-details",
    "/bus",
    "/jeep",
    "/hiace",
    "/ev", // 👈 Add this line to hide navbar on rental page
  ];

  // Check if current page is in the list
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {/* Show navbar ONLY if shouldHideNavbar is false */}
      {!shouldHideNavbar && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Topbar />
          <Navbar />
          <BookingForWomen />
        </div>
      )}

      {/* Add top padding ONLY when navbar exists */}
      <div className={shouldHideNavbar ? "pt-0" : "pt-[120px]"}>
        {children}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-details" element={<SearchBus />} />
          <Route path="/rental-details" element={<RentalDetails />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/jeep" element={<Jeep/>} />
          <Route path="/hiace" element={<Hiace />} />
          <Route path="/ev" element={<Ev />} />
          <Route path="/terms-details" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
