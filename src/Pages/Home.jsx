import React from 'react';
import Category from './Category';
import './Home.css';
import Slider from './Slider';

function Home() {
  return (
    <div className='home'>
        <Category/>
        <Slider/>
    </div>
  )
}

export default Home
