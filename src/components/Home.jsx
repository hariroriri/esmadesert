// src/components/VideoAd.jsx
import videoSrc from "../assets/videos/brownie.mp4"; // Path to your video file

const Home = () => {
  return (
    <div className="relative w-full h-screen-minus-header flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Overlay */}
      <div className="absolute text-center text-white z-10 space-y-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide font-poppins">
          Experience the Joy of Home Baking
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-semibold font-poppins">
          Fresh, delicious, and made with love!
        </p>

        {/* Button */}
        <a href="#order" className="inline-block mt-6 px-8 py-3 bg-yellow text-black text-lg font-semibold font-poppins rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Order Delicious
        </a>
      </div>
    </div>
  );
};

export default Home;
