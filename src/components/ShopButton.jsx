import React from 'react'
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from 'react-router-dom';

const ShopButton = ({text}) => {
  const navigate = useNavigate();
  const ToShop = () => {
    navigate('/products')
  }
  return (
    <div>
      <Button className="btn btn-custom k-text-center d-flex k-justify-content-center" onClick={ToShop}>
        {text}
      </Button>
    </div>
  );
}

export default ShopButton
