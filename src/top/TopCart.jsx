import React from 'react';
import tdata from '../../src/top/Tdata';
import Slider from "react-slick";


function TopCart() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
      };
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
    ]
  return (
    <>
    <section className='top-cart'>
    <Slider {...settings}>
        {
            tdata.map((item, index)=>{
                return(
                    <div key={index}>
                    <div className='d-flex t-txt' >
                        <span>{item.para}</span>
                        <span>{item.desc}</span>
                    </div>
                    <div className='timg'>
                        <img src={item.cover} alt="" />

                    </div>
                </div>

                )
               

            })
        }
        </Slider>

    </section>
    
    
    </>
  )
}
export default TopCart;
