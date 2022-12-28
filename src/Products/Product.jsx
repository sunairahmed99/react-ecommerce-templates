import React from 'react';
import sample from '../assets/images/shops/shops-1.png';

function Product({ShopProduct, addtocart, cart}) {
  return (
    <div className='ppp'>

<div className='container'>
                <div className='d-flex top-cat ptxt'>
                    <h1>
                    <span>Mobile Phones</span>
                    </h1>
                    <h4>
                        <span>View all</span>
                        <span><i class="ri-arrow-right-s-fill"></i></span>
                    </h4>
                </div>
                </div>
                <div className='shopproduct d-flex mmm'>

                  {
                    ShopProduct.map((item, index)=>{
                      return(
                        <div className='spro' key={index}>
                    <div className='sbox'>
                      <div className='img'>
                        <div className='poff'>
                        <span>25% off</span>
                        </div>
                        <img src={item.image} alt="" />
                        <div className='ptxt'>
                          <h3>Phone</h3>
                          <h3>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            </h3>
                            <h3>{item.price}</h3>
                        </div>
                        <div className='picon'>
                          <span onClick={()=> addtocart(item)}><i class="ri-add-line"></i></span>
                        </div>

                        <div className='pheart'>
                          <span>0</span>
                          <span><i class="ri-heart-fill"></i></span>

                        </div>

                      </div>

                    </div>

                    </div>
                      )
                    })
                  }
                

                  

                  
                

                </div>

            
    
        </div>
  )
}
export default Product;
