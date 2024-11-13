import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsButtonVisible(true), 500); 
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow text-black font-monts text-lg text-center py-5 relative">
      <p className="font-semibold fade-in">{message}</p>
      
      {/* Close Button */}
      <button 
        onClick={() => setIsVisible(false)} 
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-black font-bold transition-all duration-500 ${
          isButtonVisible ? "opacity-100 scale-125" : "opacity-0 scale-75"
        }`}
        aria-label="Close banner"
      >
        &times;
      </button>
    </div>
  );
};

export default Banner;
