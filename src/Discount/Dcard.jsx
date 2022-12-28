import React from 'react'
import Ddata from '../../src/Discount/Ddata.jsx';
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }


function Dcard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
    
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
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
              initialSlide: 1
            }
          },
    ]
};
  return (


        <Slider {...settings} className="dpro">
        
        {
            Ddata.map((item, index)=>{
                return(
                    <div className='dproduct' key={index}>
                        <div className='dbox'>

                        
                        <div className='img'>
                            <img src={item.cover} alt="" />
                        </div>
                        <div className='dtxt'>
                            <h2>{item.name}</h2>
                            <h4>{item.price}</h4>

                        </div>
                        </div>
                        

                    </div>
                    
                )
            })
            
        }

        

   </Slider>

  )
}
export default Dcard;
