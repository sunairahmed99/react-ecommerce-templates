import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const[Mobile, Setmobile] = useState(false)
  return (
    <section className='navbar'>
      <div className='container d-flex'>

        <div className='icategory'>
        <i class="ri-shape-fill"></i>
        <h4>Categories</h4>
        <span><i class="ri-arrow-down-s-line"></i></span>
        </div>

        <div className='items'>
          <ul className={Mobile? 'mlist' : 'f-flex list'}>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Pages">Pages</Link>
            </li>
            <li>
            <Link to="/user">User Account</Link>
            </li>
            <li>
            <Link to="/vender">Vender Account</Link>
            </li>
            <li>
            <Link to="/track">Track My Order</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <div className={Mobile? 'lbox' : 'lnone'}>
            <i class="ri-search-line"></i>
            <input type="text"  placeholder='search here'/>

            </div>
          </ul>
          
          <div className='mmargin' onClick={() => Setmobile(!Mobile)}>
            {
                Mobile? <i class="ri-close-line block"></i>  :  <i class="ri-menu-line show"></i>
            }
          </div>

        </div>

      </div>

    </section>
  )
}
export default Navbar;
