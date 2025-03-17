import * as React from "react";
import { Loader } from "@progress/kendo-react-indicators";

const PageLoader = ({ type = "converging-spinner", size = "large" }) => {
  return (
    <div className="loader-container">
      <div className="col-4">
        <Loader size={size} type={type} className="custom-loader" />
      </div>
    </div>
  );
};

export default PageLoader

