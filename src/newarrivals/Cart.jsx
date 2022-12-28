import React from 'react';
import Ndata from '../../src/newarrivals/Ndata.jsx';

function Cart() {
  return (
    <>
    <section className='ncart'>
        <div className='flex container'>
        {
            Ndata.map((item)=>{
                return(
                        <div className='box amargin'>
                            <div className='img'>
                            <img src={item.cover} alt=""/>
                            </div>
                            <h2>{item.name}</h2>
                            <h4>{item.price}</h4>
                           
                           
                        </div>
                    
                )
               
            })

        }

        </div>
       

    </section>
    </>
  )
}
export default Cart;