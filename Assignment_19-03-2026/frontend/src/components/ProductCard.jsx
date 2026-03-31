// Reusable product card component to show product details
import React from "react";
import { formatPrice } from "../utils/formatPrice";
// Example of how to import local assets
// import defaultImage from '../assets/product-placeholder.png';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.price}>{formatPrice(price)}</p>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  details: {
    marginTop: "12px",
  },
  name: {
    fontSize: "1.1rem",
    margin: "8px 0",
    color: "#333",
  },
  price: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
  },
};

export default ProductCard;
