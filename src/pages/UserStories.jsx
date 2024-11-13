
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    review:
      "The custom cakes from this bakery are beyond delicious! They always make my celebrations extra special. The quality is unmatched, and the service is top-notch.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    review:
      "I absolutely love the variety of cakes offered. Every time I order, the cakes are perfectly baked and beautifully decorated. I wouldn't go anywhere else!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "The best custom cakes in town! I ordered a special cake for my son's birthday, and it was not only visually stunning but also incredibly tasty. Highly recommend!",
  },
];

export const UserStories = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-4xl font-semibold font-poppins text-center mb-12 text-yellow">
        The Voices of Our Customers
        </h1>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-yellow-400"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 font-poppins mb-6">{testimonial.review}</p>
              
              {/* Customer Name */}
              <h3 className="text-2xl font-semibold font-poppins text-black mb-2">
                {testimonial.name}
              </h3>
              
              {/* Customer Role */}
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStories;
