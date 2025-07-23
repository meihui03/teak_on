function Categories() {
  return (
    <section className=" bg-gray-100 text-center p-16 ">
      <h3 className="text-2xl font-semibold mb-2">Shop by Category</h3>
      <p className="text-gray-500 mb-10">
        Explore our carefully curated collection of premium teakwood furniture
        designed for every room in your home.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4 text-left">
          <div className="w-90 h-60 bg-gray-200 flex items-center justify-center rounded-md">
            Living Room Furniture
          </div>
          <h4 className="font-semibold">Living Room</h4>
          <p className="text-gray-500 text-sm">Sofas, coffee tables, and entertainment units</p>
        </div>

        <div className="space-y-4 text-left">
          <div className="w-90 h-60 bg-gray-200 flex items-center justify-center rounded-md">
            Dining Room Furniture
          </div>
          <h4 className="font-semibold">Dining Room</h4>
          <p className="text-gray-500 text-sm">Dining tables, chairs, and storage solutions</p>
        </div>

        <div className="space-y-4 text-left">
          <div className="w-90 h-60 bg-gray-200 flex items-center justify-center rounded-md">
            Bedroom Furniture
          </div>
          <h4 className="font-semibold">Bedroom</h4>
          <p className="text-gray-500 text-sm">Beds, wardrobes, and bedside tables</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
