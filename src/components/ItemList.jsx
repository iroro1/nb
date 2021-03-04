import React from "react";
import ProductItem from "./ProductItem";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ItemList = ({data,cart}) => {
  return (
    <div>
    <div className="container mb-3">
              <Topbar />
              <Header cartList={cart} lftIcon="fa-bars" />
            </div>
      {data.map((prod) => (
        <Link className="text-dark" to={"/itemdetail/"+prod.id} >
        <ProductItem
          key={prod.id}
          image={prod.image}
          title={prod.title}
          price={prod.price}
          subTitle={prod.subTitle}
          bg={prod.bg}
         fav={prod.fav}
        />
        </Link>
      
      ))}
    </div>
  );
};

export default ItemList;
