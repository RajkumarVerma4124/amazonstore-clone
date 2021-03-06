import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

 const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
  
    return (
        <div className='slider'>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (
                            <img src={slide.image} alt='amazon prime image' className='home__image'/>
                        )}
                        <ArrowBackIosIcon className='left-arrow' onClick={prevSlide}/>
                        <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide}/>
                    </div>
                )
            })}
        </div>
        
    )
    };

export default ImageSlider;