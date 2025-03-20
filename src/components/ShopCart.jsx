import React from "react";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon } from "@progress/kendo-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Import the hook instead

const ShopCart = () => {
  const { cart } = useCart(); // ✅ Use custom hook

  return (
    <div className="p-1 g-col-6 text-black">
      <Link to="/cart" className="nav-icon">
        <BadgeContainer>
          <SvgIcon icon={cartIcon} size="large" />
          {cart.length > 0 && <Badge className="badge-color">{cart.length}</Badge>}
        </BadgeContainer>
      </Link>
    </div>
  );
};

export default ShopCart;
