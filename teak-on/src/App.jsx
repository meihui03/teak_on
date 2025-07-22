import './App.css';
import Header from './components/Header';

function App() {
  return (
    <main className="font-sans">
      <Header />
      <section className="grid grid-cols-2 gap-12 p-16">
        <div className="space-y-6">
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
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            Hero Furniture Image
          </div>
        </div>
      </section>

      <section className="text-center p-16">
        <h3 className="text-2xl font-semibold mb-2">Shop by Category</h3>
        <p className="text-gray-500 mb-10">
          Explore our carefully curated collection of premium teakwood furniture
          designed for every room in your home.
        </p>

        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
              Living Room Furniture
            </div>
            <h4 className="font-semibold">Living Room</h4>
            <p className="text-gray-500 text-sm">Sofas, coffee tables, and entertainment units</p>
          </div>

          <div className="space-y-4">
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
              Dining Room Furniture
            </div>
            <h4 className="font-semibold">Dining Room</h4>
            <p className="text-gray-500 text-sm">Dining tables, chairs, and storage solutions</p>
          </div>

          <div className="space-y-4">
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
              Bedroom Furniture
            </div>
            <h4 className="font-semibold">Bedroom</h4>
            <p className="text-gray-500 text-sm">Beds, wardrobes, and bedside tables</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
