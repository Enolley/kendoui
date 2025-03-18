import React from "react";
import { SvgIcon } from '@progress/kendo-react-common';
import { facebookIcon, twitterIcon, googleIcon, linkedinIcon, youtubeIcon } from '@progress/kendo-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-12 col-md-4 text-center text-md-start">
            <h1 className="text-prim">iViatu</h1>
            <p>Your go-to store for stylish and comfortable shoes.</p>
          </div>

        
          <div className="col-12 col-md-4 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled k-d-k-flex-col k-justify-content-start ">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 text-center d-flex-col ">
            <h5>Follow Us</h5>
           <div className="d-flex k-justify-content-center k-gap-5">
           <div className="icon facebook">
                    <SvgIcon icon={facebookIcon} size="medium" />
            </div>
            <div className="icon twitter">
                    <SvgIcon icon={twitterIcon} size="medium" />
            </div>
            <div className="icon linkedin">
            <SvgIcon icon={linkedinIcon} size="medium" />
          </div>
           </div>



            
        </div>

        <hr className="bg-custom" />

       
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} iViatu. All Rights Reserved.</p>
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
