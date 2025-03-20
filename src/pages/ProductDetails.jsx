import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext"; 
import { Popup } from "@progress/kendo-react-popup";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon } from "@progress/kendo-svg-icons";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); 
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const anchorRef = useRef(null);



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
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

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setPopupMessage(`${product.name} added to cart!`);
      setShowPopup(true);
      
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (!product) return <h2 className="text-center mt-5 text-danger">Product not found!</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image || "/placeholder.jpg"} 
            alt={product.name} 
            className="img-fluid rounded shadow" 
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-prim">{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-success">${product.price}</h3>
          <button className="btn btn-custom-blue mt-3" onClick={handleAddToCart} ref={anchorRef}>
          Add To Cart <SvgIcon icon={cartIcon} size="large" />
          </button>
          
          <Popup show={showPopup} anchor={anchorRef.current} popupClass="popup-style">
            <div className="alert alert-success">{popupMessage}</div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
