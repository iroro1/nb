import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ItemDetail from "./components/ItemDetail";
import ItemList from "./components/ItemList";
import uneo from "./images/uneo.png";
import uneo1 from "./images/uneo1.png";
import uspolo from "./images/us-polo.png";
import hero from "./images/hero.png";
import wcraft from "./images/wild-craft.png";
import ShoppingCart from "./components/ShoppinCart.jsx"
import Payment from "./components/Payment";
import Done from "./components/Done";


function App() {
  const data1 = [
    {
      id: 1,
      title: "UNEO",
      subTitle: "Unisex Pack Of 2",
      image: uneo,
      price: 199,
      bg: "#c3e5e4",
      fav:true
    },
    {
      id: 2,
      title: "US Polo",
      subTitle: "Unisex Pack Of 3",
      image: uspolo,
      price: 299,
      bg: "#e6e6e6",
      fav:false
    },
    {
      id: 3,
      title: "Hero",
      subTitle: "Unisex Pack Of 2",
      image: hero,
      price: 199,
      bg: "#d1d4d8",
      fav:false
    },
    {
      id: 4,
      title: "UNEO",
      subTitle: "Unisex Pack Of 2",
      image: uneo1,
      price: 199,
      bg: "#f7f0e4",
      fav:false
    },
    {
      id: 5,
      title: "Wild Craft",
      subTitle: "Unisex Pack Of 3",
      image: wcraft,
      price: 150,
      bg: "#fceaf2",
      fav:false
    },
  ];

  const [data, setData] = useState(data1)
  const [cart, setCart] = useState([])
  const updateCart = (item)=>{
    const newItem = [...cart, item]
    setCart(newItem)
  }
  const delItm=(itm)=>{
    const newCart =cart.filter(item=> (item.id!==itm.id ))
    setCart(newCart)
  }
  const incQty = (itm)=>{
    itm.qty = itm.qty+1
   cart.filter(item=>item.id !== itm.id)
   const nuAns= [...cart]
   setCart(nuAns)
    }
    
  
  const decQty = (itm)=>{
       if( itm.qty>0){
        itm.qty = itm.qty-1
        cart.filter(item=> item.id !== itm.id)
        const nuAns= [...cart]
        setCart(nuAns)
      }
  }

  const favorite = (id)=>{
     const item = data.filter(item=> (item.id === id))
     const arr2 = data.findIndex(item=> (item.id === id))
     item[0].fav= !item[0].fav
     console.log(arr2,"INDEX")
    data.splice(arr2,1,item[0])
    const res = [...data]
    setData(res)
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props)=><ItemList cart={cart} data={data} {...props} />} />
          <Route exact path="/itemdetail/:id" render={(props)=> <ItemDetail dtFav={favorite}  data={data} cartL={cart} cart={updateCart}  {...props} />} />
          <Route exact path="/cart" render={(props)=> <ShoppingCart  inc={incQty} dec={decQty} setCart={delItm} cart={cart}  {...props} />} />
          <Route exact path="/pay" render={(props)=> <Payment cart={cart}  {...props} />} />
          <Route exact path="/done" render={(props)=> <Done  {...props} />}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
