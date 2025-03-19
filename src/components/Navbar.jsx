import * as React from "react";

import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import SearchOverlay from "./SearchOverlay";
import { userIcon } from "@progress/kendo-svg-icons";
import ShopCart from "./ShopCart";
import WishList from "./WishList";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center main-bar">
      <AppBar className="navbar navbar-expand-lg bg-light-subtle d-flex justify-content-between">
        <AppBarSection>
          <Link className="navbar-brand" to="/">
            <h1 className="ms-3 logo">
              <span className="span-logo">i</span>Viatu
            </h1>
          </Link>
        </AppBarSection>

        <AppBarSection>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Shop
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact 
                </Link>
              </li>
            </ul>
          </div>
        </AppBarSection>

        <AppBarSection>
          <div className="grid gap-3 d-flex">
            <SearchOverlay/>
            <WishList/>
            <ShopCart/>
            <div className="p-1 g-col-6 text-black">
              <a href="" className="nav-icon">
                <SvgIcon icon={userIcon} size="large" />
              </a>
            </div>
          </div>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Navbar;
