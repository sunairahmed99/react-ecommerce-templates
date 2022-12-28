import React from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Search({cart}) {
  return (
    <section className='search'>

      <div className='container c-flex'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <div className='search-box'>
        <i class="ri-search-line"></i>
        <input type="text" placeholder='search here'/>
        <span>all category</span>
        </div>

        <div className='icons d-flex'>
        <i class="ri-user-settings-fill"></i>

      <div className='cart'>
        <Link to='/cart'><i class="ri-shopping-cart-fill"></i></Link>
      
      </div>
       <span className='txt'>{cart.length === 0 ? '0' : cart.length}</span>
       
        </div>

      </div>
    </section>
  )
}
export default Search;
