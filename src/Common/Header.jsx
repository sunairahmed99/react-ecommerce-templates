import React from 'react'
import Head from './Head';
import './Header.css';
import Navbar from './Navbar';
import Search from './Search';


function Header({cart}) {
  return (
    <section className='headerpo'>

    <Head/>
    <div className='combine'>
    <Search cart = {cart}/>
    <Navbar/>
    </div>
   
    
    </section>
  )
}
export default Header;
