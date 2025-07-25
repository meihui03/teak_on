import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allProducts = [
  { id: 1, name: "Sofa", price: 799, category: "Living Room" },
  { id: 2, name: "Bed Frame", price: 999, category: "Bedroom" },
  { id: 3, name: "Desk", price: 499, category: "Office" },
  { id: 4, name: "Patio Set", price: 699, category: "Outdoor" },
  { id: 5, name: "Bookshelf", price: 299, category: "Office" },
  { id: 6, name: "Wardrobe", price: 1200, category: "Bedroom" },
  { id: 7, name: "Lounge Chair", price: 850, category: "Living Room" },
  { id: 8, name: "Coffee Table", price: 450, category: "Living Room" },
  { id: 9, name: "Garden Bench", price: 520, category: "Outdoor" },
  { id: 10, name: "Cabinet", price: 680, category: "Office" },
];

const categories = ["All", "Living Room", "Bedroom", "Outdoor", "Office"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - 1000", min: 500, max: 1000 },
  { label: "Above $1000", min: 1000, max: Infinity },
];

const ITEMS_PER_PAGE = 6;

function Furniture() {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [page, setPage] = useState(1);

  const toggleCategory = (category) => {
    setPage(1);

    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      let updated = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "All"), category];

      if (updated.length === 0) {
        updated = ["All"];
      }

      setSelectedCategories(updated);
    }
  };

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategories.includes("All") || selectedCategories.includes(product.category);

    const { min, max } =
      priceRanges.find((range) => range.label === selectedPriceRange) || {};

    const priceMatch = product.price >= min && product.price <= max;

    return categoryMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="flex px-6 py-8">
      {/* Sidebar */}
      <div className="w-64 pr-6 border-r">
        <h3 className="font-semibold mb-4">Filters</h3>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}

                  className="accent-black"
                />
                <label htmlFor={cat} className="cursor-pointer text-gray-700">
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <ul className="space-y-2">
            {priceRanges.map((range) => (
              <li key={range.label} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  id={range.label}
                  checked={selectedPriceRange === range.label}
                  onChange={() => {
                    setPage(1);
                    setSelectedPriceRange(range.label);
                  }}
                  className="accent-black"
                />
                <label htmlFor={range.label} className="cursor-pointer text-gray-700">
                  {range.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 pl-6">
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        {paginatedProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded shadow hover:shadow-md"
                >
                  <p className="font-bold text-lg mb-2">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-md font-semibold mt-2">${product.price}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="disabled:opacity-30"
              >
                <ChevronLeft />
              </button>
              <span className="font-medium">Page {page} of {totalPages}</span>
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="disabled:opacity-30"
              >
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Furniture;
