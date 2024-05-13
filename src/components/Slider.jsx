import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  return (
    <Carousel 
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={2000}
    >
                <div className='' >
                    <img src="src/assets/imgs/slider/Welcome to.png" />
                    
                </div>
                <div>
                    <img src="src/assets/imgs/slider/sli-3.png" />
                    
                </div>
                <div>
                    <img src="src/assets/imgs/slider/sli-2.png" />
                    
                </div>
            </Carousel>
  )
}

export default Slider
