import React from 'react'
import Discount from '../Discount/Discount';
import Flashdeals from '../Flash/Flashdeals';
import Cart from '../newarrivals/Cart';
import Newarrival from '../newarrivals/Newarrival';
import MainPro from '../Products/MainPro';
import Topcate from '../top/Topcate';
import Home from './Home';

function Pages({cartitems, cart, addtocart, ShopProduct}) {
  return (
    <>
    <Home cart = {cart}/>
    <Flashdeals cartitems = {cartitems} addtocart = {addtocart}/>
    <Topcate/>
    <Newarrival/>
    <Discount/>
    <MainPro ShopProduct = {ShopProduct} addtocart = {addtocart} cart = {cart} />
    
    </>
  )
}

export default Pages;
