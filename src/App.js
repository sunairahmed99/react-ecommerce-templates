import './App.css';
import Header from './Common/Header';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Pages from './Pages/Pages';
import Data from './Flash/Data';
import { useState } from 'react';
import Cart from './Common/Cart/Cart';
import Sdata from './Sdata';




function App() {
  const{cartitems} = Data;
  const{ShopProduct} = Sdata;
  const[cart, setcart] = useState([]);
  const addtocart = (product)=>{
    const productexit = cart.find((item)=> item.id === product.id);
    console.log(productexit)
    if(productexit){
      setcart(cart.map((item)=> 
      
      (item.id === product.id?
        {...productexit, qty: productexit.qty +1}: item
        
        
        )))
    }
    else{
      setcart([...cart, {...product, qty:1}])
      console.log(cart)
    }
   

  }
  const decreaseqty = (product) =>{
    const productexit = cart.find((item) => item.id === product.id);

    if(productexit.qty ===1){
      setcart(cart.filter((item) => item.id !== product.id))
    }
    else{
      setcart(cart.map((item)=> (item.id === product.id ? {...productexit, qty: productexit.qty -1}: item)));
    }
  }
  return (
    <>
    <Header cart={cart}/>
    <Routes>
      
      
      <Route path='/' element={<Pages  cartitems = {cartitems} addtocart = {addtocart} ShopProduct = {ShopProduct} cart = {cart}/>}/>   
      <Route path='/Cart' element={<Cart cart={cart}  cartitems = {cartitems} ShopProduct={ShopProduct}  addtocart = {addtocart} decreasesqty = {decreaseqty}/>} />   
    
  

  

</Routes>
    
  

</>
    
  
  );
}

export default App;
