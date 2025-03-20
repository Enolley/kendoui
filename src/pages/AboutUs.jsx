import React from "react";
import kiatu from '../assets/hero.png';
import ShopButton from "../components/ShopButton";

const AboutUs = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 text-center">
          <img 
            src={kiatu} 
            alt="Premium Footwear Collection" 
            className="img-fluid rounded shadow-lg"
          />
        </div>

     
        <div className="col-12 col-md-6">
          <h1 className="text-custom fw-bold">Step Into Comfort & Style</h1>
          <p className="text-muted lead">
            Welcome to <strong className="text-prim">iViatu</strong> – your go-to destination for high-quality footwear 
            that blends fashion with function. We believe that every step you take should be a confident one.
          </p>

          <h4 className="mt-4 text-custom fw-semibold">Why Choose Us?</h4>
          <ul className="list-unstyled text-muted">
            <li>✔ Premium-quality materials for lasting comfort</li>
            <li>✔ Trendy designs tailored for every occasion</li>
            <li>✔ Affordable luxury with unbeatable durability</li>
            <li>✔ Customer-first approach with hassle-free shopping</li>
          </ul>

          <div className="d-flex justify-content-center mt-4">
            <ShopButton text="Shop Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
