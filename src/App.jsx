// src/App.jsx
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";

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
    </div>
  );
}

export default App;
