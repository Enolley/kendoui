import React from "react";
import kiatu from '../assets/hero.png';


const AboutUs = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h2 className="text-success">About Us</h2>
          <p className="text-muted">
            Welcome to <strong>My Shoe Store</strong>, where style meets comfort. 
            We believe that the right pair of shoes can make all the difference. 
            Our mission is to provide high-quality, fashionable, and comfortable 
            footwear for everyone.
          </p>
          <p className="text-muted">
            Whether you're looking for casual sneakers, formal shoes, or sporty kicks, 
            we've got you covered. Our collections are curated to bring you the best 
            in both comfort and style.
          </p>
          <button className="btn btn-success">Explore Our Collection</button>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img 
            src={kiatu} 
            alt="Shoe Collection" 
            className="img-fluid rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
