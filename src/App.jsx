// src/App.jsx
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import VideoAd from "./components/Home";
import AboutUs from "./pages/AboutUs";
import ItemsPage from "./pages/ItemsPage";
import { Custom } from "./pages/Custom";
import UserStories from "./pages/UserStories";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [offerMessage, setOfferMessage] = useState("");

  useEffect(() => {
    const currentEvent = "Christmas"; 
    const offers = {
      Christmas: "🎄🎁Christmas Offer: Get 20% off on all services!🤎🍫🍪🎉",
      Diwali: "Diwali Special: Flat 15% off on loans!🎇🪔🏵️🧨🎆",
    };

    if (offers[currentEvent]) {
      setOfferMessage(offers[currentEvent]);
    }
  }, []);

  return (
    <div className="App">
      {offerMessage && <Banner message={offerMessage} />}
      <Header />
      <VideoAd />
      <AboutUs />
      <ItemsPage />
      <Custom />
      <UserStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
