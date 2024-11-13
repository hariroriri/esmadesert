import React from "react";

export const Custom = () => {
  return (
    <div className="bg-yellow">
      <div className="container mx-auto px-4 py-16">
        {/* First Heading */}
        <h1 className="text-4xl md:text-4xl font-semibold tracking-wide font-poppins mb-10 text-center text-black">
          Our Delicious Items
        </h1>

        {/* Subheading */}
        <p className="text-4xl md:text-5xl font-semibold font-poppins mb-16 text-center text-black">
          "Explore our custom cake creations"
        </p>

        {/* Image and Description Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1707070026861-ae45cb63d845?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Custom Cake"
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Description on the Right */}
          <div className="w-full md:w-1/2 md:pl-8 text-left">
            <p className="text-xl text-gray-700 mb-6 font-poppins leading-relaxed">
              We are passionate about crafting the best homemade baked goods
              that bring comfort and joy to every bite. Our story started with a
              dream to deliver not just a product, but an experience—one that
              you can share with loved ones over a warm cup of coffee or tea.
              Each of our delicious treats is made with the finest ingredients,
              care, and a dash of love.
            </p>
            <p className="text-xl text-gray-700 font-poppins leading-relaxed mb-8">
              Our commitment is to make every customer feel at home, providing
              them with fresh, mouth-watering baked goods made from scratch.
              Whether it’s a special occasion or a simple indulgence, we’re here
              to make your day just a little bit sweeter.
            </p>

            {/* Button */}
            <button className="inline-block mt-6 px-8 py-3 bg-black text-yellow hover:bg-secondary text-lg font-semibold font-poppins rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
              Order Delicious
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
