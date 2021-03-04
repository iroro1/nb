import React, { useState } from "react";
import Header from "./Header";
import Topbar from "./Topbar";

const ItemDetail = (props) => {
const ans = props.data.filter(itm=> parseInt(itm.id) ===parseInt(props.match.params.id))
const id =(parseInt(props.match.params.id))
const { image, title, price, subTitle, bg,fav } = ans[0]
const [sizes, setSizes] = useState("S")
const cClass="col-3 bg-dark text-white"
const sizeOfProd = (s)=>{
  setSizes(s)
}
const favI=(id)=>{
  props.dtFav(id)
}

console.log(props)
  return (
    <div>
      <div className=" mb-3">
        <header>
          <Topbar />
          <Header cartList={props.cartL} lftIcon="fa-chevron-left" />
        </header>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mt-3"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="product-item" style={{ background: bg }}>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={image} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={image} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={image} alt="Third slide" />
              </div>
              <div className="container det-it">
                <h3>{title}</h3>
                <div className="row btm-bar">
                  <p className="ml-3 mr-2">
                    <b className="mr-2"> N {price}</b>
                    <small>{subTitle}</small>
                  </p>
                    <div className="fv"
                     onClick={()=>favI(id)}
                    >
                  {
                    fav===true?
  <div  className="hrt">
  <i  className="fa fa-heart "   > </i>
                   </div> :
                   <div className="hrt">
                    <i  className="fa fa-heart-o "> </i>
                    </div>
                  }
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row dt">
            <div className="sizes col-6 mt-2">
            
              <small className={sizes==="S"?cClass : "col-3 "} onClick={()=>sizeOfProd("S")}>S</small>
              <small className={sizes==="M"?cClass : "col-3 "} onClick={()=>sizeOfProd("M")}>M</small>
              <small className={sizes==="L"?cClass : "col-3 "} onClick={()=>sizeOfProd("L")}>L</small>
            </div>
          </div>
          <div className="container mx-3 mt-5">
            <div className="row">
              <p>100% Original Products</p>
              <p>
                This item is not returnable. Items like innerwear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
                <span className="text-danger">Read More.</span>
              </p>
            </div>
          </div>
          <div className=" mx-3  sp">
            <div className="spec" >Spec</div>
            {/* Should open fab for size chart */}
          </div>
          <div className="container ml-1 mt-3">
            <div className="row">
              <i className="col-1 mt-1 fa fa-shield"></i>
              <div className="col-10">Anti-pollution, anti-dust</div>
            </div>
            <div className="row">
              <i className="col-1 mt-1 fa fa-random"></i>
              <div className="col-10">Reusable</div>
            </div>
            <div className="row">
              <i className="col-1 mt-1 fa fa-smile-o"></i>
              <div className="col-10">Pleated at sides for extra comfort </div>
            </div>
            <div className="row">
              <i className="col-1 mt-1 fa fa-snowflake-o"></i>
              <div className="col-10">
                wider face coverage for maximum protection
              </div>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-1"></div>
            <div className="container col-10 mr-2 btn-cart" onClick={()=>props.cart({...ans[0], size: sizes, qty: 1})}>
           
              <small className="btn-cart-main"> ADD TO CART</small>
             
            </div>
            <div className="col-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
