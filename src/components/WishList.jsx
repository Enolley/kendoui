import React, { useEffect, useState } from "react";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { heartIcon } from "@progress/kendo-svg-icons";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlistCount, setWishlistCount] = useState(0);

 
  useEffect(() => {
    const updateWishlistCount = () => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(savedWishlist.length);
    };

    updateWishlistCount();

   
    window.addEventListener("storage", updateWishlistCount);

    return () => {
      window.removeEventListener("storage", updateWishlistCount);
    };
  }, []);

  return (
    <div className="p-1 g-col-6 text-black">
      <Link to="/wishlist" className="nav-icon">
        <BadgeContainer>
          <SvgIcon icon={heartIcon} size="large" />
          {wishlistCount > 0 && <Badge className="badge-color">{wishlistCount}</Badge>}
        </BadgeContainer>
      </Link>
    </div>
  );
};

export default WishList;
