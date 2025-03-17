import React from "react";
import hero from "../assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardActions, CardBody, CardFooter, CardTitle } from "@progress/kendo-react-layout";

const products = [
  { id: 1, name: "Running Shoes", price: "$79", image: hero },
  { id: 2, name: "Sneakers", price: "$99", image: hero },
  { id: 3, name: "Loafers", price: "$89", image: hero},
  { id: 4, name: "Sandals", price: "$49", image: hero},
  { id: 5, name: "Boots", price: "$129", image: hero },
  { id: 6, name: "Boots", price: "$129", image: hero },
  { id: 7, name: "Boots", price: "$129", image: hero },
  { id: 8, name: "Boots", price: "$129", image: hero },
];

const Catalog = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-prim">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="card h-100 shadow-sm">
             <CardBody> <img src={product.image} className="card-img-top" alt={product.name} /></CardBody>
              <div className="card-body text-center">
                <h5 className="card-title text-custom   ">{product.name}</h5>
                <CardTitle className="card-text text-prim">{product.price}</CardTitle>
                <CardActions className="btn btn-success k-text-center d-flex k-justify-content-center">Add To Cart</CardActions>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
