import React from 'react'
import Pcat from './Pcat';
import Product from './Product';
import './Main.css';

function MainPro({ShopProduct, addtocart, cart} ) {
  return (
    <section className='MainPro'>
            <div className='container maindiv'>
             <Pcat/>
            <Product ShopProduct = {ShopProduct} addtocart = {addtocart} cart = {cart}/>
           </div>
           

        
    </section>
  )
}
export default MainPro;
