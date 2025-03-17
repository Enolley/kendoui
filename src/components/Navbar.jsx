import * as React from "react";

import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import SearchOverlay from "./SearchOverlay";
import { userIcon } from "@progress/kendo-svg-icons";
import ShopCart from "./ShopCart";
import WishList from "./WishList";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center main-bar">
      <AppBar className="navbar navbar-expand-lg bg-light-subtle d-flex justify-content-between">
        <AppBarSection>
          <a className="navbar-brand" href="#">
            <h1 className="ms-3 logo">
              <span className="span-logo">i</span>Viatu
            </h1>
          </a>
        </AppBarSection>

        <AppBarSection>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
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
