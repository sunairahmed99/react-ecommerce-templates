import React from 'react';
import './cart.css';

function Cart({cart, addtocart, decreasesqty}) {
  const totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0)
  const decreasesqt = ((item)=>{
    

  })
  return (
    <section className='cart'>
     
      <div className='container d-flex main'>
        <div className='cart-items'>
          {
            cart.map((item, index)=>{
              const productqty = item.price * item.qty;
              return(
              <div className='item1' key={index}>
                <div className='img'>
                <img src={item.image} alt="" />
              </div>
              <div className='txt'>
                <h1>{item.name}</h1>
                <h2><span>{item.price}.00 * {item.qty}</span> <span>${productqty}.00</span></h2>
              </div>
              <div className='icons'>
                <button  onClick={()=> addtocart(item)}><i class="ri-add-fill"></i></button>
                <button onClick={()=> decreasesqty(item)}><i class="ri-indeterminate-circle-fill"></i></button>
              </div>
              <div className='cancel'>
                <button><i class="ri-close-line"></i></button>
              </div>
              </div>

              )
            })
          }
        


        </div>
        <div className='item-price'>
          <h1>Cart Summary</h1><hr/>
          <h4><span>Total Price</span> <span>${totalprice}.00</span></h4>

        </div>
       

      </div>
      
    </section>
  )
}
export default Cart;









{
  /*
}

import React from 'react';
import './cart.css';

function Cart({cart, addtocart, decreasesqty}) {
  const totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <section className='cart-items'>
        <div className='container d-flex'>
            <div className='cart-details'>
                
            { cart.length === 0 && 
                    <h1 className='no-items product'>No items are added in cart</h1>}

                    {cart.map((item)=>{
                      const productqty = item.price * item.qty;
                      return(
                      <div className='cart-list product d-flex'>
                        <div className='img'>
                          <img src={item.image} alt="" />
                        </div>
                        <div className='card-details'>
                          <h3>{item.name}</h3>
                          <h3>{item.price}.00 * {item.qty}
                          <span>${productqty}.00</span>
                          </h3>
                        </div>

                        <div className='cart-items-function'>

                          <div className='removecart'>
                            <button className='removecart'>
                            <i class="ri-delete-bin-fill"></i>
                            </button>
                          </div>

                          <div className='cartcontrol d-flex'>
                            <button className='incart' onClick={()=> addtocart(item)}>
                            <i class="ri-add-fill"></i>
                            </button>
                            <button className='incart' onClick={()=> decreasesqty(item)}>
                            <i class="ri-indeterminate-circle-fill"></i>
                            </button>

                          </div>


                        </div>

                        <div className='cart-item-price'></div>

                      </div>

                      )
                    })
                  }
                  </div>
            <div className='cart-total products'>
              <h2>cart summary</h2>
              <div className='d-flex'>
                <h4>total price : </h4>
                <h3>${totalprice}.00</h3>
              </div>

            </div>

    

        </div>

    </section>
  )
}

export default Cart;
*/
}