import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import p1 from './assets/ams.jpg';
import p2 from './assets/ball.jpg';
import p3 from './assets/tower.jpg';
import p4 from './assets/net.jpg';
import p5 from './assets/par.jpg';

const Slider1 = () => {
  return (
    <>
    <div className='headerSlides'>
        <Carousel >
      <Carousel.Item interval={1000} >
        <img src={p1} alt='img'  height='550' width='1800' /> 
       {/* <ExampleCarouselImage text="" /> */}
        <Carousel.Caption>
          {/* <h3>Spain</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} >
        <img src={p2} alt='Img' height='550' width='1800' />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          {/* <h3>Amerstdam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src={p3} alt="img" height='550' width='1800' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          {/* <h3>Georgia</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img src={p4} alt='img'  height='550' width='1800' /> 
       {/* <ExampleCarouselImage text="" /> */}
        <Carousel.Caption>
          {/* <h3>Spain</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img src={p5} alt='img'  height='550' width='1800' /> 
       {/* <ExampleCarouselImage text="" /> */}
        <Carousel.Caption>
          {/* <h3>Spain</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    

    </div>
    </>
  )
}

export default Slider1

