import React from 'react';
import simg1 from '../assets/images/SlideCard/slide-1.png';
import simg2 from '../assets/images/SlideCard/slide-2.png';
import simg3 from '../assets/images/SlideCard/slide-3.png';
import simg4 from '../assets/images/SlideCard/slide-4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

const sdata = [
    {
        id: 1,
        image: simg1,
        title: '50% Off Of Your First Shopping',
        desc: "sunair ahmed Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, porro.",
    },
    {
        id: 2,
        image: simg2,
        title: '50% Off Of Your First Shopping',
        desc: "sunair ahmed Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, porro.",
    },
    {    id: 3,
        image: simg3,
        title: '50% Off Of Your First Shopping',
        desc: "sunair ahmed Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, porro.",
    },
    {
        id: 4,
        image: simg4,
        title: '50% Off Of Your First Shopping',
        desc: "sunair ahmed Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, porro.",
    },
]


function Slidercard() {
  return (
    <>
    <Slider {...settings} className='slider'>
        
    
        {
            sdata.map((data, index)=>{
                return(

                    <div className='slide container' key={index}>

                    <div className='left'>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <button className='btn'>Shop Now</button>
                    </div>

                    <div className='right'>
                        <img src={data.image} alt="" />

                    </div>


                </div>

                )
               

            })

        }
    </Slider>
    </>
  )
 
}
export default Slidercard;

