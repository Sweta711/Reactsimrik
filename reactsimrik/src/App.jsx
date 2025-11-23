import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trending from "./components/Trending";
import Support from "./components/Support";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      {/* Fixed Header*/}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Navbar />
      </div>


      {/* Page Content*/}
      <div className="pt-[120px]">
        <Hero />
        <Services />
        <Trending />
        <Support />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
