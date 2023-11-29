import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"; 
import data from './CarouselImage';
import "./Carousel.css";

function CarouselHome() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item interval={4000}>       
            <div className='carouselImage'>
              <img
                style={{height:"900px", objectFit:"cover"}}
                className="d-block w-100"
                src={slide.imageUrl}
                alt="slider image"
              />
            </div> 
            <Carousel.Caption className='carouselContentDir'>
              <div className='carouselContent'>
                <img
                  className='aniLogo'
                  src={slide.Logo}
                  alt="slider logo"
                />
                <h1>{slide.caption}</h1>
                <p>{slide.description}</p>
              </div> 
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default CarouselHome;