import * as React from "react";
import { SvgIcon } from "@progress/kendo-react-common";
import { TextBox } from "@progress/kendo-react-inputs";
import { searchIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import { Slide } from "@progress/kendo-react-animation";
import "@progress/kendo-theme-default/dist/all.css";

const SearchOverlay = () => {
  const [show, setShow] = React.useState(false);

  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="p-1 g-col-6">
      <a href="#" className="nav-icon" onClick={onClick}>
        <SvgIcon icon={searchIcon} size="large" />
      </a>

      {show && (
        <Slide
          in={show}
          direction="down"
        >
          <div className="overlay">
            <div className="overlay-content">
              <form action="" className="search-form">
                <div className="mb-3">
                  <TextBox placeholder="Search" className="search-input" />
                </div>
                <div className="mb-3">
                  <Button className="search-button">Search</Button>
                </div>
              </form>
              <Button onClick={onClick} className="close-btn">
                X
              </Button>
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default SearchOverlay;
