import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";


const Checkout = () => {
  const { cart } = useCart(); 
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [shipping, setShipping] = useState("Standard");
  const [showNotification, setShowNotification] = useState(false);
  const shippingCost = shipping === "Standard" ? 0 : 12;
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const vat = (subtotal * 0.2).toFixed(2);
  const total = (subtotal + parseFloat(vat) + shippingCost).toFixed(2);

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    console.log("Order Details:", { customerInfo, cart, shipping });

 
    setShowNotification(true);

   
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Shop now</Link>
        </p>
      ) : (
        <div className="row">
        
          <div className="w-50">
            <div className="card p-4 shadow-sm">
              <h4>Order Summary</h4>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-1 fw-semibold text-prim">{item.name}</p>
                      <p className="text-muted text-custom">Qty: {item.quantity || 1}</p>
                    </div>
                    <strong>${(item.price * (item.quantity || 1)).toFixed(2)}</strong>
                  </li>
                ))}
              </ul>

              
              <h5>Shipping Method</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={shipping === "Standard"}
                  onChange={() => setShipping("Standard")}
                />
                <label className="form-check-label">Standard (Free)</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={shipping === "Express"}
                  onChange={() => setShipping("Express")}
                />
                <label className="form-check-label">Express - $12.00</label>
              </div>

              
              <div className="mt-4">
                <div className="d-flex justify-content-between text-custom">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-prim">VAT (20%):</span>
                  <span>${vat}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>

         
          <div className="w-50 h-100">
            <div className="card p-4 shadow-sm">
              <h4>Customer Information</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" name="address" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" name="phone" className="form-control" onChange={handleChange} required />
                </div>

                <button type="button" className="btn btn-custom-blue w-100 mt-3" onClick={handleCheckout}>
                  Place Order - ${total}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

     
      <NotificationGroup style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
        <Fade>
          {showNotification && (
            <Notification
              type={{ style: "success", icon: true }}
              closable={true}
              onClose={() => setShowNotification(false)}
            >
              <span>Order placed successfully!</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </div>
  );
};

export default Checkout;
