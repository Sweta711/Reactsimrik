import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import BookingForWomen from "./components/BookingForWomen";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Rental from "./components/Rental";
import Services from "./components/Services";
import Trending from "./components/Trending";
import Support from "./components/Support";
import Review from "./components/Reviews"
import Faq from "./components/Faq";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      {/* Fixed Header*/}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Navbar />
        <BookingForWomen />
      </div>


      {/* Page Content*/}
      <div className="pt-[120px]">
        <Hero />
        <Offer />
        <Rental />
        <Services />
        <Trending />
        <Support />
        <Review />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
