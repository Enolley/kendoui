import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card className="shadow-sm">
                <img
                  src={product.image || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <CardBody className="text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="d-flex gap-3 justify-content-center">
                  <Link to={`/products/${product.id}`} className="btn btn-custom-blue">
                    View Details
                  </Link>
                  <Button
                    className="btn btn-custom"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
