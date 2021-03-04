import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Topbar from "./Topbar";


const Done = (props) => {
console.log(props)

  return (
    <div>
      <div className="top-cart">
        <Topbar />
        <Header  title="Success" lftIcon="fa-chevron-left" />
      </div>
      <div className="container s1">
      <Link to="/" className="text-white">
        <div className="success d-flex">
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Done;
