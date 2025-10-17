import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "KLU Hoodie",
    price: "₹999",
    shortDesc: "Comfy university hoodie.",
    image: "https://via.placeholder.com/300x200?text=KLU+Hoodie",
    longDesc:
      "Stay cozy with this official KL University hoodie made of premium cotton. Perfect for all seasons.",
  },
  {
    id: 2,
    name: "KLU Notebook",
    price: "₹199",
    shortDesc: "Official university notebook.",
    image: "https://via.placeholder.com/300x200?text=KLU+Notebook",
    longDesc:
      "This notebook has 200 ruled pages and a stylish KL University logo on the cover.",
  },
  {
    id: 3,
    name: "KLU Water Bottle",
    price: "₹299",
    shortDesc: "Eco-friendly bottle.",
    image: "https://via.placeholder.com/300x200?text=KLU+Bottle",
    longDesc:
      "A reusable stainless-steel water bottle that keeps your drink hot or cold for hours.",
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="store-container">
      <h1 className="store-title">KL University Store</h1>

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <h2>{product.name}</h2>
            <p>{product.shortDesc}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="popup-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p className="price">{selectedProduct.price}</p>
            <p>{selectedProduct.longDesc}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
