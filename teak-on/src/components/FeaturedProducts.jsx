import React from 'react';
import chair from '../assets/chair.jpg'; // replace with your actual image paths
import table from '../assets/table.jpg';
import desk from '../assets/desk.jpg';

const products = [
  {
    id: 1,
    name: 'Teak Lounge Chair',
    description: 'Relax in comfort with our ergonomic teak chair.',
    image: chair,
    price: '$299',
  },
  {
    id: 2,
    name: 'Teak Dining Table',
    description: 'Perfect for gatherings and family meals.',
    image: table,
    price: '$549',
  },
  {
    id: 3,
    name: 'Modern Teak Desk',
    description: 'A sleek desk to upgrade your workspace.',
    image: desk,
    price: '$899',
  },
  {
    id: 4,
    name: 'Modern Teak Chair',
    description: 'Stylish and durable for any room.',
    image: chair,
    price: '$89',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="px-6 py-16 w-full">
      <h3 className="text-3xl font-semibold text-center mb-4">Featured Products</h3>
      <p className="text-center text-gray-600 mb-10">
        Handpicked teakwood pieces that combine luxury and functionality.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-xs text-gray-500 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">{product.price}</p>
                <button className="bg-black text-white text-xs px-3 py-2 rounded hover:bg-gray-800">
                Add to Cart
                </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default FeaturedProducts;
