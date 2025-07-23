import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <main className="font-sans w-full">
      <Header />
      <section className="grid grid-cols-2 gap-12 p-16">
        <div className=" space-y-6">
          <h2 className="text-4xl font-semibold">
            Premium Teakwood <br /> Furniture for Modern Living
          </h2>
          <p className="text-gray-600">
            Discover our handcrafted collection of sustainable teakwood furniture
            that brings elegance and durability to your home.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
            <button className="border py-2 px-4 rounded">View Collection</button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-150 h-90 bg-gray-200 flex items-center justify-center rounded-lg">
            Hero Furniture Image
          </div>
        </div>
      </section>
      <Categories />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}

export default App;
