import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './Style.css';
import TopCart from './TopCart';

function Topcate() {
  return (
    <div>
        <section className='topcate'>
            <div className='container'>
                <div className='d-flex top-cat'>
                    <h1>
                    <span><i class="ri-shape-2-fill"></i></span>
                    <span>Top Categories</span>
                    </h1>
                    <h4>
                        <span>View all</span>
                        <span><i class="ri-arrow-right-s-fill"></i></span>
                    </h4>
                </div>

                <TopCart/>

            </div>

        </section>
    </div>
  )
}
export default Topcate
