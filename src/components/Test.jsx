import * as React from "react";

import {
  AppBar,
  AppBarSection
} from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import SearchOverlay from "./SearchOverlay";
import {
  cartIcon,
  heartIcon,
  userIcon,
} from "@progress/kendo-svg-icons";

const Navbar = () => {

  return (
    <div>
      <AppBar className="navbar navbar-expand-lg bg-light-subtle d-flex justify-content-between">
        <AppBarSection>
          <a className="navbar-brand" href="#">
            <h1 className="ms-3">
              <span className="text-success">i</span>Viatu
            </h1>
          </a>
        </AppBarSection>

        <AppBarSection>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
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
            <SearchOverlay />
            <div className="p-2 g-col-6">
              <a href="" className="text-black">
                <SvgIcon icon={heartIcon} size="large" />
              </a>
            </div>
            <div className="p-2 g-col-6 text-black">
              <a href="" className="text-black">
                <SvgIcon icon={cartIcon} size="large" />
              </a>
            </div>
            <div className="p-2 g-col-6 text-black">
              <a href="" className="text-black">
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
