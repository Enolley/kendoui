import React from 'react'
import ShopButton from "./ShopButton";

const Action = () => {
  return (
    <div className="container-fluid bg-light py-5 d-flex justify-content-center">

  <div className="bg-custom-2 text-white text-center rounded-3 shadow-lg p-4 w-75 ">
    <h2 className="fs-4 fw-semibold mb-3">
      New Arrivals Just Landed
    </h2>
    <div className="mt-3 d-flex justify-content-center">
      <ShopButton  text="Shop Now"/>
    </div>
  </div>
</div>
  )
}

export default Action
