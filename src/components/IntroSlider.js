import React, {useState} from 'react'
import { IntroData } from './IntroData'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import './Intro.css'

const IntroSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  if ( !Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="intro" id='about'>
      {IntroData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <div className='IntroSlide'>
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                <div className='IntroText'>
                  <div className='IntroTextTitle'> {slide.text} </div>
                  <br></br>
                  <div className='IntroTextDescription'> {slide.text2} </div>
                  <br></br>
                  <div className='IntroTextDescription'> {slide.text3} </div>
                  <br></br>
                  <div className='IntroTextAside'> {slide.text4} </div>
                  <div className='IntroTextAside'> {slide.text5} </div>
                </div>
                
              </div>)}
          </div>
        )

          
      })}
    </section>
  );
};
export default IntroSlider
