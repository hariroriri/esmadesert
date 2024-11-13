const ItemsPage = () => {
    // Array of items
    const items = [
      {
        id: 1,
        name: "Item 1",
        description: "A delicious, freshly baked treat filled with flavor.",
        image: "https://media.istockphoto.com/id/1255426185/photo/delicious-chocolate-zucchini-brownies.jpg?s=2048x2048&w=is&k=20&c=0YCceurwuGBxjUH3fTee2pXKMUNjzbWmuhhqWXGHsb4=",
      },
      {
        id: 2,
        name: "Item 2",
        description: "Our signature dessert, adored by all who try it.",
        image: "https://media.istockphoto.com/id/1277966563/photo/close-up-image-of-homemade-chocolate-salted-caramel-brownie-squares-piled-on-green-plate-and.jpg?s=1024x1024&w=is&k=20&c=9LeBn9AbxKVVo8yVfN4Bg1jYpm6uaKYdCQ5F6-1Fz0U=",
      },
      {
        id: 3,
        name: "Item 3",
        description: "A perfect blend of sweetness and texture, irresistible to anyone.",
        image: "https://plus.unsplash.com/premium_photo-1666976135009-b66b2cbcb137?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        name: "Item 4",
        description: "Irresistible, mouth-watering treat that everyone loves.",
        image: "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
    ];
  
    return (
      <div className="bg-black">
        <div className="container mx-auto px-4 py-16">
          {/* First Heading: "Our Delicious Items" */}
          <h1 className="text-4xl md:text-4xl font-semibold tracking-wide font-poppins mb-10 text-center text-yellow-400 text-yellow">
            <span className="bg-yellow border-yellow px-2 border rounded-full text-black">Our</span> Delicious Items
          </h1>
  
          {/* Subheading */}
          <p className="text-4xl md:text-5xl font-semibold font-poppins mb-16 text-center text-white">
            "Our best selling treat at Esma Desert is a delight you won’t want to miss."
          </p>
  
          {/* Content for displaying items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Dynamically render each item */}
            {items.map((item) => (
              <div key={item.id} className="relative group bg-black shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out p-4 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl text-white font-poppins mb-2">{item.name}</h3>
                  <p className="text-lg text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemsPage;
  