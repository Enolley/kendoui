import React from "react";
import kiatu from '../assets/hero.png';
import ShopButton from "../components/ShopButton";

const AboutUs = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center my-5 ">
        <div className="col-12 col-md-6 text-center">
          <img
            src={kiatu}
            alt="Premium Footwear Collection"
            className="img-fluid"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="text-custom fw-bold">Step Into Comfort & Style</h1>
          <p className="text-muted lead">
            Welcome to <strong className="text-blue"><span className="text-pink">i</span>Viatu</strong> – your
            go-to destination for high-quality footwear that blends fashion with
            function. We believe that every step you take should be a confident
            one.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <ShopButton text="Shop Now" />
          </div>
        </div>
      </div>
      <div className="my-3">
        <h2 className="my-4 text-dark fw-semibold text-pink">Why Choose Us?</h2>
        <div className="row">
          <div className="col-card col">
            <span className="text-pink">✔</span> Premium-quality materials for
            lasting comfort
          </div>
          <div className="col-card col">
            <span className="text-pink">✔</span> Trendy designs tailored for
            every occasion
          </div>
          <div className="col-card col">
            <span className="text-pink">✔</span> Affordable luxury with
            unbeatable durability
          </div>
          <div className="col-card col">
            <span className="text-pink">✔</span> Customer-first approach with
            hassle-free shopping
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
