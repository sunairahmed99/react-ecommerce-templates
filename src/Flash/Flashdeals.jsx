import React from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

export default function Flashdeals({cartitems, addtocart}) {
  return (
    <section className='flashdeals'>
        <div className='container'>
            <div className='flashtxt'>
                <i><i class="ri-flashlight-fill"></i></i>
                <span>Flash Deals</span>
            </div>
            <Flashcard cartitems = {cartitems} addtocart = {addtocart} />

        </div>

    </section>
  )
}
