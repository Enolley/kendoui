import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with ID:", id);  // Debugging

        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Product data:", docSnap.data());  // Debugging
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such product found!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  console.log("Product state:", product);  // Debugging

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (!product) return <h2 className="text-center mt-5 text-danger">Product not found!</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={process.env.PUBLIC_URL + product.image} 
            alt={product.name} 
            className="img-fluid rounded shadow" 
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-primary">${product.price}</h3>
          <button className="btn btn-success mt-3">Add to Cart 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
