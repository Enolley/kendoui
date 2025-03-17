import React from 'react'
import { SvgIcon } from "@progress/kendo-react-common";
import SearchOverlay from './SearchOverlay';
import { cartIcon, heartIcon, searchIcon, userIcon } from "@progress/kendo-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar
