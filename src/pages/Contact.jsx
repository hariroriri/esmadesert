import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Importing social media icons

export const Contact = () => {
  return (
    <div className="bg-yellow py-16 px-4 sm:px-8 lg:px-16 font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Founder Details */}
          <div className="flex flex-col justify-center items-center text-center md:text-left  p-8 rounded-lg  space-y-3">
            {/* Founder Photo */}
            <img
              src="https://randomuser.me/api/portraits/men/50.jpg" // Replace with actual image URL
              alt="Founder"
              className="w-56 h-56 rounded-2xl mx-auto mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            {/* Founder Name */}
            <h2 className="text-3xl font-semibold text-black">Ganesh Kumar</h2>
            {/* Founder Position */}
            <p className="text-lg text-gray-700">Founder</p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-gray-700 hover:text-yellow-500 transition-transform transform hover:scale-125 duration-300" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-gray-700 hover:text-yellow-500 transition-transform transform hover:scale-125 duration-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl text-gray-700 hover:text-yellow-500 transition-transform transform hover:scale-125 duration-300" />
              </a>
            </div>

            {/* Contact Ganesh Link */}
            <a
              href="mailto:ganesh@example.com"
              className="text-lg font-semibold mt-4 block mx-auto transition duration-300 bg-black text-yellow px-8 py-3 border rounded-xl"
            >
              Contact Ganesh
            </a>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-black p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-center text-yellow mb-6">Contact Us</h2>

            {/* Contact Form */}
            <form action="submit" className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-lg text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 text-white rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-lg text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            {/* Contact Number */}
            <p className="text-lg text-white text-center mt-6">
              <span className="font-semibold">Contact Number:</span> +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
