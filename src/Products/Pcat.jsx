import img1 from '../assets/images/category/cat1.png';
import img2 from '../assets/images/category/cat2.png';
import img3 from '../assets/images/category/cat3.png';
import img4 from '../assets/images/category/cat4.png';
import img5 from '../assets/images/category/cat5.png';
import img6 from '../assets/images/category/cat6.png';
import img7 from '../assets/images/category/cat7.png';
import img8 from '../assets/images/category/cat8.png';
import img9 from '../assets/images/category/cat9.png';
import img10 from '../assets/images/category/cat10.png';

const data = [
    {
        id: 1,
        image: img1,
        title: 'fashion',
    },
    {
        id: 2,
        image: img2,
        title: 'electronic',
    },
    {
        id: 3,
        image: img3,
        title: 'car',
    },
    {
        id: 4,
        image: img4,
        title: 'home and garder',
    },
    {
        id: 5,
        image: img5,
        title: 'gift',
    },
    {
        id: 6,
        image: img6,
        title: 'music',
    },
    {
        id: 7,
        image: img7,
        title: 'health and beauti',
    },
    {
        id: 8,
        image: img8,
        title: 'pets',
    },
    {
        id: 9,
        image: img9,
        title: 'baby boys',
    },
    {
        id: 10,
        image: img10,
        title: 'groceries',
    },
]





import React from 'react'

function Pcat() {
  return (
    <section className='pcat'>
        <div className='pbrands'>
            <span>Brands</span>
            <span>|</span>
            <span>Shops</span>
        </div>
        {
            data.map((item, index)=>{
                return(
                    <div className='pbox' key={index}>
                    <img src={item.image} alt="" />
                    <span>{item.title}</span>
                </div>

                )
             
            })
        }

        
      

    </section>
  )
}
export default Pcat;
