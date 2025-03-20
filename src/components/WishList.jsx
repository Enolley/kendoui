import React from 'react'
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { heartIcon } from "@progress/kendo-svg-icons";

const WishList = () => {
  return (
    <div className="p-1 g-col-6 text-black">
      <a href="" className="nav-icon">
        <BadgeContainer>
          <SvgIcon icon={heartIcon} size="large"/>
          <Badge className="badge-color"></Badge>
        </BadgeContainer>
      </a>
    </div>
  );
}

export default WishList
