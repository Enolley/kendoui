import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, decreaseQuantity } = useCart();

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Shop now</Link>
        </p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
                />

                
                <div style={{ flexGrow: 1, marginLeft: 10 }}>
                  <h6 className="mb-0">{item.name}</h6>
                  <p className="mb-0 text-muted">${item.price} x {item.quantity}</p>
                </div>

               
                <div>
                  {/* <button className="btn btn-sm btn-warning me-2" onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button> */}
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

         
          <Link to="/checkout" className="btn btn-custom-blue w-100">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
