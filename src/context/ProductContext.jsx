import React, { createContext, useContext, useState } from 'react';
import hero from "../assets/hero.png";
import sandals from "../assets/sandals.jpg";

// Initial product data from your Catalog.jsx - keep this in sync with your actual product data
const initialProducts = [
  { id: 1, name: "Running Shoes", price: "$79", image: hero, discount: '40% OFF', 
    description: "Lightweight and comfortable running shoes ideal for daily workouts and training." },
  { id: 2, name: "Sneakers", price: "$99", image: hero, discount: '10% OFF',
    description: "Stylish sneakers with premium comfort for everyday wear." },
  { id: 3, name: "Loafers", price: "$89", image: hero, discount: '20% OFF',
    description: "Classic loafers made with genuine leather, perfect for formal occasions." },
  { id: 4, name: "Sandals", price: "$49", image: sandals, discount: '20% OFF',
    description: "Comfortable sandals for beach and casual outings." },
  { id: 5, name: "Boots", price: "$129", image: hero, discount: '40% OFF',
    description: "Durable boots designed for rugged terrain and all-weather conditions." },
  { id: 6, name: "Canvas", price: "$129", image: hero, discount: '40% OFF',
    description: "Casual canvas shoes with vibrant designs and colors." },
  { id: 7, name: "Slides", price: "$129", image: hero, discount: '40% OFF',
    description: "Easy slip-on slides for quick outings and lounging." },
  { id: 8, name: "Akala", price: "$129", image: hero, discount: '40% OFF',
    description: "Traditional Akala shoes handcrafted with authentic materials." },
  { id: 9,  name: "Adidas", price: "$300",  image: hero, discount: "N/A",
    description: "Stylish Adidas shoes suitable for everyday wear." },
  { id: 10, name: "Fashion Heels", price: "$600",  image: hero, discount: "N/A",
    description: "Elegant high-heeled shoes for special occasions and parties." },
  { id: 11, name: "Nike", price: "$700",  image: hero, discount: "N/A",
    description: "Iconic Nike sneakers that blend style and performance." },
  { id: 12, name: "Jordan 1", price: "$500",  image: hero, discount: "N/A",
    description: "Classic Jordan 1 silhouette beloved by sneaker enthusiasts." },
  { id: 13, name: "Blue Converse", price: "$200",  image: hero, discount: "N/A",
    description: "Casual blue Converse shoes for everyday comfort." },
  { id: 14, name: "Converse (Custom)", price: "$300",  image: hero, discount: "N/A",
    description: "Customizable Converse sneakers for a unique look." },
  { id: 15, name: "New Balance", price: "$200",  image: hero, discount: "N/A",
    description: "Comfortable and durable New Balance shoes for daily wear." },
  { id: 16, name: "Lacate Loafers", price: "$250",  image: hero, discount: "N/A",
    description: "Refined loafers featuring a sleek design for formal or casual outfits." },
  { id: 17, name: "Red converse", price: "$300",  image: hero, discount: "N/A",
    description: "Bold red Converse for a standout street-style look." },
  { id: 18, name: "Nike Running Shoes", price: "$400",  image: hero, discount: "N/A",
    description: "Lightweight Nike runners designed for comfort and speed." },
  { id: 19, name: "Leather Office Shoes", price: "$500",  image: hero, discount: "N/A",
    description: "Professional leather shoes perfect for office and business settings." },
  { id: 20, name: "Jordan", price: "$500",  image: hero, discount: "N/A",
    description: "Another Jordan variant offering premium support and iconic style." },
  { id: 21, name: "LV Heels", price: "$250",  image: hero, discount: "N/A",
    description: "Luxurious LV-branded heels for upscale events and fashion statements." },
  { id: 22, name: "Nike Airforce", price: "$400",  image: hero, discount: "N/A",
    description: "Classic Nike Air Force silhouette with timeless appeal." },
  { id: 23, name: "Gucci Heels", price: "$1000", image: hero, discount: "N/A",
    description: "High-end Gucci heels for those seeking the ultimate in luxury footwear." },    

];

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products] = useState(initialProducts);
  
  // Prepare product data for the LLM
  const getProductsForLLM = () => {
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      description: product.description
    }));
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      getProductsForLLM 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;