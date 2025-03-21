import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";

const ShopButton = ({ text }) => {
  const navigate = useNavigate();
  const ToShop = () => {
    navigate("/products");
  };

  return (
    <div className="w-100 mt-3">
      <Button className="btn btn-custom text-center" onClick={ToShop}>
        {text}
      </Button>
    </div>
  );
};

export default ShopButton;
