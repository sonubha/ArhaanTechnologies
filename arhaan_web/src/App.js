import { useState } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
// import Navbar from './components/Navbar';
// import './components/Navbar.css';
import ArhaanLogo from "./components/asset_image/Arhaan_logo.png"
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Whatsapp from "./components/Whatsapp.js";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/footer.js"



function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen logo={ArhaanLogo} onFinish={() => setShowSplash(false)} />
      ) : (
        <div>
          {/* <Navbar/> */}
          <Hero />
          <Services />
          <About />
          <Contact />
          <Social />
          <Whatsapp />
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
