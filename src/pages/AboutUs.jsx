import aboutImage from "../assets/images/brownieimg.webp"; // Path to your image

const AboutUs = () => {
    return (
        <div className="bg-yellow">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Content Description */}
                    <div className="md:w-1/2 mb-8 md:mb-0 text-left">
                        <h2 className="text-4xl font-poppins font-semibold text-black mb-4">About Us</h2>
                        <p className="text-xl text-gray-700 mb-6 font-poppins">
                            We are passionate about crafting the best homemade baked goods that bring comfort and joy to every bite.
                            Our story started with a dream to deliver not just a product, but an experience—one that you can share with
                            loved ones over a warm cup of coffee or tea. Each of our delicious treats is made with the finest ingredients,
                            care, and a dash of love.
                        </p>
                        <p className="text-xl text-gray-700 font-poppins">
                            Our commitment is to make every customer feel at home, providing them with fresh, mouth-watering baked goods
                            made from scratch. Whether it’s a special occasion or a simple indulgence, we’re here to make your day just a
                            little bit sweeter.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2">
                        <img src={aboutImage} alt="About Us" className="w-3/4 h-auto rounded-lg shadow-lg mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
