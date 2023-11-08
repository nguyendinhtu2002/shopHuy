import React from "react";
import "./CartMessage.scss";
import { correct, cross } from "../../utils/images";

const CartMessage = ({text, status = true}) => {

  return (
    <div className="cart-message text-center">
      <div className="cart-message-icon">
        {!status ? <img src={correct} alt="" /> : <img src={cross} alt="" />}
      </div>
      <h6 className="text-white fs-14 fw-5">{text}</h6>
    </div>
  );
};

export default CartMessage;
