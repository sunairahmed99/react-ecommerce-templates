import React from 'react'
import Dcard from './Dcard';
import './Dstyle.css';

function Discount() {
  return (
    <section className='discount'>
             <div className='container'>
                <div className='d-flex dis'>
                    <h1>
                    <span></span>
                    <h1>Big Discounts</h1>
                    </h1>
                    <h4>
                        <span>View all</span>
                        <span><i class="ri-arrow-right-s-fill"></i></span>
                    </h4>
                </div>
                <Dcard/>

                

            </div>

    </section>
  )
}
export default Discount;
