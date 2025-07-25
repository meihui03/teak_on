import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import search from "../assets/search.svg";

function Header() {
  const [showCollections, setShowCollections] = useState(false);

  return (
    <nav className="relative bg-white shadow-md z-50 h-16">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-6">
        <Link to="/" className="flex items-center h-full">
          <h1 className="text-xl font-bold">Teak On</h1>
        </Link>

        <ul className="flex gap-8 text-gray-700 h-full items-center">
          <li className="flex items-center h-full hover:border-b-2 border-black transition">
            <Link to="/furniture">Furniture</Link>
          </li>

          <li
            onMouseEnter={() => setShowCollections(true)}
            onMouseLeave={() => setShowCollections(false)}
            className="relative flex items-center h-full hover:border-b-2 border-black transition cursor-pointer"
          >
            <span>Collections</span>

            {showCollections && (
              <div
                className="absolute left-0 top-full w-screen bg-black text-white py-6 px-6 shadow-lg z-40"
              >
                <Link to="/collections/living" className="block hover:underline">Living Room</Link>
                <Link to="/collections/bedroom" className="block hover:underline">Bedroom</Link>
                <Link to="/collections/outdoor" className="block hover:underline">Outdoor</Link>
                <Link to="/collections/office" className="block hover:underline">Office</Link>
              </div>
            )}
          </li>

          <li className="flex items-center h-full hover:border-b-2 border-black transition">
            <Link to="/about">About</Link>
          </li>

          <li className="flex items-center h-full hover:border-b-2 border-black transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 h-full">
          <img src={search} alt="Search" className="w-5 h-5 cursor-pointer" />
          <Link to="/cart">
            <img src={cart} alt="Cart" className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
