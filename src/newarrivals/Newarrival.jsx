import React from 'react'
import Cart from './Cart';
import './style.css';

function Newarrival() {
  return (
    <section className='newarrival'>
        <div className='container '>
        <div className='container'>
                <div className='d-flex top-cat'>
                    <h1>
                    <span>New Arrivals</span>
                    </h1>
                    <h4>
                        <span>View all</span>
                        <span><i class="ri-arrow-right-s-fill"></i></span>
                    </h4>
                </div>
        </div>
        </div>
        <Cart/>

    </section>
  )
}
export default Newarrival;
