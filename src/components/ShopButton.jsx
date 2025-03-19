import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

const ShopButton = ({text}) => {
  return (
    <div>
      <Button className="btn btn-custom k-text-center d-flex k-justify-content-center">
        {text}
      </Button>
    </div>
  );
}

export default ShopButton
