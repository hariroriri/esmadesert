import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons
import logo from '../assets/images/esma_logo.png'
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {/* Left Side: Branding */}
          <div>
          <a href="/" className="flex items-center">
                    <img src={logo} alt="Home Bakery Logo" className="h-[100px] w-auto" />
                </a>
            <p className="text-lg font-poppins mb-4">Backing your sweetest cravings with every decadent, chocolate-filled bite, because every brownie deserves to be unforgettable.</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-yellow-500 transition-transform transform hover:scale-110 duration-300" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-yellow-500 transition-transform transform hover:scale-110 duration-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:text-yellow-500 transition-transform transform hover:scale-110 duration-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-yellow-500 transition-transform transform hover:scale-110 duration-300" />
              </a>
            </div>
          </div>

          {/* Middle: Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-yellow-500 transition duration-300 font-poppins">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-500 transition duration-300 font-poppins">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition duration-300 font-poppins">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-yellow-500 transition duration-300 font-poppins">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Right Side: Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Get the Sweetest Updates</h3>
            <p className="text-lg mb-4 font-poppins">Stay fresh out of the oven with the latest brownie recipes, baking tips, and exclusive offers!</p>
            <form action="submit" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                className="w-full sm:w-64 p-3 border font-poppins border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 "
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-500 text-black bg-yellow font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 font-poppins"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6">
        <a href="https://hariharan440.github.io/portfolio/" target="_blank" className="text-lg text-gray-400 font-poppins">Designed and developed by <span className="font-semibold">Yalizen</span></a>
          <p className="text-lg text-gray-400 font-poppins">
            &copy; {new Date().getFullYear()} <span className="font-semibold">EsmaDesert</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
