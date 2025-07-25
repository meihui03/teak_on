import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wooden Chair",
      price: 199.99,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Oak Table",
      price: 499.99,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const updateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 underline">Shop now</Link>.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label htmlFor={`qty-${item.id}`} className="text-sm">Qty:</label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 border rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              Proceed to Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
