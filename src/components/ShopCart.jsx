import React from 'react'
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon } from "@progress/kendo-svg-icons";

const ShopCart = () => {
  return (
    <div className="p-1 g-col-6 text-black">
      <a href="" className="nav-icon">
        <BadgeContainer>
          <SvgIcon icon={cartIcon} size="large" />
          <Badge className="badge-color">3</Badge>
        </BadgeContainer>
      </a>
    </div>
  );
}

export default ShopCart
