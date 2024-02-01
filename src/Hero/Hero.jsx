import React from 'react'

function Hero() {
  return (
  <main className='hero'>
    <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    
    <div className='hero-btn'>
        <button>Shop Now</button>
        <button className='s-btn'>Category</button>
    </div>
    <div className='shopping'>
        <p>Also Available on</p>
        <div className='brand-icons'>
            <img src="/amazon.png" alt="amazon-logo" />
            <img src="/flipkart.png" alt="flikpart-logo" />
        </div>
    </div>
    </div>
    <div className='hero-image'>
        <img src="/shoe_image.png" alt="hero-img" />
    </div>
    </main>
  )
}

export default Hero
