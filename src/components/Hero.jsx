import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-gradient-custom flex-column flex-md-row ps-5">
     
      <div className="col-12 col-md-3 text-center text-md-start">
        <h1 className="text-custom k-h1 k-font-bold fs-1">Step Up Your Style</h1>
        <p className="k-font-size-lg k-mb-4 text-custom">The Perfect Pair Awaits</p>
        <Button  className="k-mb-4 btn-custom">Shop Now</Button>
      </div>

      
      <div className="col-12 col-md-6">
        <img src={hero} alt="Hero" className="w-100" />
      </div>
    </div>
  );
};

export default Hero;
