import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";

const ShopButton = ({ text }) => {
  const navigate = useNavigate();
  const ToShop = () => {
    navigate("/products");
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 mt-3 justify-content-md-start">
      <Button className="btn btn-custom text-center" onClick={ToShop}>
        {text}
      </Button>
    </div>
  );
};

export default ShopButton;
