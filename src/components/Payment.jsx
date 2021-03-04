import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Topbar from "./Topbar";


const Payment = (props) => {
console.log(props)
let total=0
props.cart.forEach(i=> total=total + (i.price*i.qty))
  return (
    <div>
      <div className="top-cart">
        <Topbar />
        <Header to="/cart" title="Payment" lftIcon="fa-chevron-left" />
      </div>
      <div className="container">
        <div className="cart-btm ">
          <h5 className="text-muted">Card Details</h5>
          <div className="container mb-5">
            <form>
              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>
                <input placeholder="The name on your card." type="text" name="name" id="name" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  Card Number
                </label>
                <input placeholder="Your card number." type="text" name="name" id="name" className="form-control"/>
              </div>
              <div className=" col-4form-group">
                <label htmlFor="name">
                  CCV2
                </label>
                <input placeholder="The 3 digit number on your card." type="text" name="name" id="name" className="form-control"/>
              </div>
              <div className=" col-4form-group">
                <label htmlFor="name">
                  Expiry Date
                </label>
                <input placeholder="01/22" type="text" name="name" id="name" className="form-control"/>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-6">Total Amount</div>
            <div className="col-6">N {total}</div>
          </div>
     
          <div className="row d-flex">
            <div className="col-1"></div>
            <Link to="/done" className="text-white container col-10  btn-cart">
              <small className="btn-cart-main"> PAY</small>
            </Link>
            <div className="col-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
