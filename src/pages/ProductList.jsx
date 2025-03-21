import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { Skeleton } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { heartIcon } from "@progress/kendo-svg-icons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";

const ProductList = () => {
  const [products, setProducts] = useState([]);
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
  console.log("Products:", products);
  const addToWishlist = (product) => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInWishlist = savedWishlist.some((item) => item.id === product.id);
  
    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...savedWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-pink">Shop Our Latest Shoes</h2>
      <div className="row">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Card className="shadow-sm">
                  <Skeleton shape="rectangle" style={{ width: "100%", height: 200 }} />
                  <CardBody className="text-center">
                    <Skeleton shape="text" style={{ width: "70%", height: 20 }} />
                    <Skeleton shape="text" style={{ width: "50%", height: 15, marginTop: 10 }} />
                    <Skeleton shape="rectangle" style={{ width: "60%", height: 30, marginTop: 20 }} />
                  </CardBody>
                </Card>
              </div>
            ))
          : products.map((product) => (
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
                    <Link to={`/products/${product.id}`} className="btn btn-custom-blue">
                      View Details
                    </Link>
                    <button className="btn  mt-2" onClick={() => addToWishlist(product)}>
                    <BadgeContainer>
                      <SvgIcon icon={heartIcon} size="xxxlarge" 
                      className="text-prim"/>
          
        </BadgeContainer>
                   
                  </button>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductList;
