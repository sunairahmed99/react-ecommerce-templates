import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }



function Flashcard({cartitems, addtocart}) {

    const [count, setcount] = useState(0);
    const increment = ()=>{
        setcount();
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

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

      };
  return (
    <>
    <Slider {...settings}>

        {
            cartitems.map((cartitems, index)=>{
                return(
                    <div className='flashbox' key={index}>
        <div className='mtop'>
            <div className='img'>
                <div>
                <span>{cartitems.discount}%Off</span>

                </div>
                <img src={cartitems.image} alt="" />
                <div className='btxt'>
                    <span>0</span>
                    <i class="ri-service-fill" onClick={increment} style={{color: 'red'}}></i>
                </div>
                <div className='innertxt'>
                    <div className='txt'><span>{cartitems.name}</span></div>
                    <div className='star'>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                    </div>
                    <div className='price'>
                        <span>{cartitems.price}</span>
                        <button onClick={() => addtocart(cartitems)}><i class="ri-add-line"></i></button>
                    </div>
                </div>

            </div>

        </div>

    </div>

                )
            })

        }
    
    
    </Slider>
    </>
  )
}

export default Flashcard;
