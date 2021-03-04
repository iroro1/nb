import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = (props) => {
  const { lftIcon, title, to } =props
  console.log(to)
  const custom =
    lftIcon === "fa-bars"
      ? `col-1 ml-2 fa ${lftIcon} fa-2x two-bars`
      : `col-1 ml-2 fa ${lftIcon} fa-2x `;

  if (title) {
    return (
      <div className="row pt-3 header ">
      
        {(to!==undefined)? lftIcon === "fa-chevron-left" ? (
          <Link to={to} ><i className="col-1 fa fa-chevron-left fa-2x text-dark ml-3 pr-5"></i></Link>
        ) : (
          <i className={custom} ></i>
        ) : null}


        <h3 className="">{title}</h3>
        {
          to==="/cart"? <div className="col-5"></div> :
          <div className="col-3"></div>
        }
        {/* <div className="col-2 "></div>
        <div className="col-2 "></div> */}
      </div>
    );
  } else {
    return (
      <div className="row pt-3 header ">
      <Link to="/"  className="text-dark">
        <i className={custom}></i>
      </Link>
        <div className="col-5 logo-header">
          <Logo />
        </div>
        <i className="col-2 fa fa-search fa-2x"></i>
        <Link to="/cart" className="text-dark mr-3">
       {(props.cartList!==undefined && props.cartList.length>0)?
       <i className="col-2 fa fa-shopping-cart fa-2x ">
      <span className="cart-with-item">
       </span>
        </i>
      : <i className="col-2 fa fa-shopping-cart fa-2x"></i>}</Link>
      </div>
    );
  }
};

export default Header;
