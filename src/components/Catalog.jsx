import hero from "../assets/hero.png";

import sandals from "../assets/sandals.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon } from "@progress/kendo-svg-icons";
import React, { useState } from "react";
import { Slide } from "@progress/kendo-react-animation";
import { Button } from "@progress/kendo-react-buttons";
import ShopButton from "./ShopButton";

const products = [
  { id: 1, name: "Running Shoes", price: "$79", image: hero, discount: '40% OFF'},
  { id: 2, name: "Sneakers", price: "$99", image: hero ,discount: '10% OFF'},
  { id: 3, name: "Loafers", price: "$89", image: hero  ,discount: '20% OFF'},
  { id: 4, name: "Sandals", price: "$49", image: sandals,discount: '20% OFF'},
  { id: 5, name: "Boots", price: "$129", image: hero  ,discount: '40% OFF'},
  { id: 6, name: "Canvas", price: "$129", image: hero ,discount: '40% OFF'},
  { id: 7, name: "Slides", price: "$129", image: hero ,discount: '40% OFF'},
  { id: 8, name: "Akala", price: "$129", image: hero  ,discount: '40% OFF'},
];

const Catalog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const visibleProducts = products.slice(0, 4);

  return (
    <div className="container mt-5 mb-3">
      <h2 className="text-center mb-4 text-prim">Our Products</h2>
      <div className="row">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <Card
              className="card"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardBody>
                <span className="text-right bg-warning font-weight-bold text-light discount">{product.discount}</span>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
              </CardBody>
              <div className="card-body text-center">
                <h5 className="card-title text-custom">{product.name}</h5>
                <CardTitle className="card-text text-prim">
                  {product.price}
                </CardTitle>
                <Slide
                  in={hoveredCard === product.id}
                  transitionEnterDuration={300}
                  transitionExitDuration={200}
                  direction="up"
                >
                  {hoveredCard === product.id && (
                    <Button className="btn btn-custom-blue k-text-center d-flex k-justify-content-center">
                      Add To Cart <SvgIcon icon={cartIcon} size="large" />
                    </Button>
                  )}
                </Slide>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <ShopButton text="See More"/>
    </div>
  );
};

export default Catalog;
