import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { Skeleton } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { heartOutlineIcon, heartIcon } from "@progress/kendo-svg-icons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";

const ProductList = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const toggleWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);
    let updatedWishlist;

    if (isAlreadyInWishlist) {
      // Remove from wishlist
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      // Add to wishlist
      updatedWishlist = [...wishlist, product];
    }

    // Update state and localStorage
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-pink">Shop Our Latest Shoes</h2>
      <div className="row">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Card className="shadow-sm">
                  <Skeleton
                    shape="rectangle"
                    style={{ width: "100%", height: 200 }}
                  />
                  <CardBody className="text-center">
                    <Skeleton
                      shape="text"
                      style={{ width: "70%", height: 20 }}
                    />
                    <Skeleton
                      shape="text"
                      style={{ width: "50%", height: 15, marginTop: 10 }}
                    />
                    <Skeleton
                      shape="rectangle"
                      style={{ width: "60%", height: 30, marginTop: 20 }}
                    />
                  </CardBody>
                </Card>
              </div>
            ))
          : products.map((product) => {
              const isInWishlist = wishlist.some(
                (item) => item.id === product.id
              );
              const isHovered = hoveredProductId === product.id;

              return (
                <div key={product.id} className="col-md-4 mb-4">
                  <Card className="shadow-sm">
                    <img
                      src={product.image || "/placeholder.jpg"}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <CardBody className="text-center">
                      <h5 className="card-title text-blue">{product.name}</h5>
                      <p className="card-text text-pink">${product.price}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn"
                          onClick={() => toggleWishlist(product)}
                          onMouseEnter={() => setHoveredProductId(product.id)}
                          onMouseLeave={() => setHoveredProductId(null)}
                        >
                          <BadgeContainer>
                            <SvgIcon
                              icon={
                                isInWishlist || isHovered
                                  ? heartIcon
                                  : heartOutlineIcon
                              }
                              size="xxlarge"
                              className="wishlist"
                            />
                          </BadgeContainer>
                        </button>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-custom-blue"
                        >
                          View Details
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductList;
