import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Topbar from "./Topbar";


const ShoppinCart = (props) => {
let total=0
const discount= 0
props.cart.forEach(p=>{
  total+= (parseInt(p.price) * p.qty)
})

  return (
    <div>
      <div className="top-cart">
        <Topbar />
        <Header to="/" title="Shopping Cart" lftIcon="fa-chevron-left" />
      </div>
      <div className="container">
      {
        props.cart.map(itm=>
          <div className="row">
          <div className="col-3">
            <img className="img-cart" src={itm.image} alt="" />
          </div>
          <div className="col-6">
            <div className="row txt-cart">
              <h4>{itm.title}</h4>
              <p className="">
                <b> N {itm.price}</b> {itm.subTitle}
              </p>
              <p className="">
                <b> Size: {itm.size}</b>
              </p>
              <p className="text-danger" onClick={()=>{props.setCart(itm)}}>Remove</p>
            </div>
          </div>
          <div className=" cart-cButton">
            <span onClick={()=>props.inc(itm)}>+</span>
            <span>{itm.qty}</span>
            <span onClick={()=>props.dec(itm)}>-</span>
          </div>
        </div>
)
      }
       
  

        <div className="cart-btm ">
          <h5 className="text-muted">Card Details</h5>
          <div className="row">
            <div className="col-6">Total Amount</div>
            <div className="col-6">N {total}</div>
          </div>
          <div className="row">
            <div className="col-6">Discount</div>
            <div className="col-6">Rs {discount}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-6">Final Amount</div>
            <div className="col-6">N {total-discount}</div>
          </div>

          <div className="row d-flex">
            <div className="col-1"></div>
            <Link to="/pay" className="text-white container col-10  btn-cart">
              <small className="btn-cart-main"> CHECKOUT</small>
            </Link>
            <div className="col-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppinCart;
