import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import BookingForWomen from "./components/BookingForWomen";

import Home from "./Home";
import SearchBus from "./components/SearchBus";
import RentalDetails from "./components/RentalDetails";
import Terms from "./components/Terms";


function LayoutWithNavbar({ children }) {
  const location = useLocation();
  // pages where navbar should NOT appear
  const noNavbarPaths = ["/search-details"];

  const showNavbar = !noNavbarPaths.includes(location.pathname);
  return (
    <>
      {/* Fixed header (conditionally) */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Topbar />
          <Navbar />
          <BookingForWomen />
        </div>
      )}

      {/* Page content */}
      <div className={showNavbar ? "pt-[120px]" : "pt-0"}>
        {children}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWithNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-details" element={<SearchBus />} />
          <Route path="/rental-details" element={<RentalDetails />} />
          <Route path="/terms-details" element={<Terms />} />
        </Routes>
      </LayoutWithNavbar>
    </BrowserRouter>
  );
}

export default App;

