import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/Stars";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {

  // const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
    // navigate('/')
    if(window.location.hash){
      window.location.replace('/')
    }
  },[])

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#001319]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
