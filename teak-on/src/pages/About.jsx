import { FaCouch, FaShippingFast, FaTags, FaHeadset } from "react-icons/fa";
import bg from "../assets/bg.jpg";

function About() {
  return (
    <div className="w-full">
      <section
        className="h-[400px] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-opacity-100 p-8 rounded">
          <h2 className="font-bold text-center">About Teak On</h2>
          <p className="text-white mt-4 text-lg text-center max-w-xl mx-auto">
            Where elegance meets functionality — handcrafted furniture to elevate your lifestyle.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Teak On began with a simple idea — to bring timeless, affordable, and sustainable furniture to homes around the world. 
            What started as a small workshop is now a full-scale furniture brand known for quality, character, and care. 
            Every piece tells a story of craftsmanship and passion.
          </p>
        </div>
        <img
          src="/images/our-story.jpg"
          alt="Our story"
          className="rounded-lg shadow-md w-200"
        />
      </section>

      <section className="bg-gray-100 text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 text-center">
          <div className="space-y-3">
            <FaCouch className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Modern Designs</h3>
            <p className="text-gray-500 text-sm">
              Sleek and functional furniture for every home aesthetic.
            </p>
          </div>
          <div className="space-y-3">
            <FaShippingFast className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">
              Reliable shipping to get your furniture when you need it.
            </p>
          </div>
          <div className="space-y-3">
            <FaTags className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Affordable Pricing</h3>
            <p className="text-gray-500 text-sm">
              Premium furniture without the premium markup.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
