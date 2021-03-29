import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import meter from './../images/meter.png';
import status from './../images/status.png';
import { IoIosArrowDropdown } from 'react-icons/io'

function HeroSection() {
  return (
    <>
      <div className='Hero-Intro'>
        <h1 className='Hero-title'>
          Hi there!
        </h1>
        <h1 className='Hero-subtitle'>
          I'm Chloe Wu.
        </h1>
        <div className='description'>
          <p className='Hero-description'>
            I'm an aspiring product development chemist based in Ontario, currently exploring the chemical industry. <br></br>
            On the side, I have an interest in design, travel and learning.
          </p>
        </div>
      </div>
      <div className='Hero-meters'>
        <div className='row'>
          <div className='column'>
            <div className='Hero-education'>
            <img className="education-meter" alt="education"
              src={meter} />
            <h2 className='meter-title'> 
              chemical biology co-op
            </h2>
            <h3 className='meter-subtitle'>
              b.sc., minor in sustainability
            </h3>
            <Link to = '' className="meter-learnmore">
              click me to learn more!
            </Link>
            </div>
          </div>
          <div className='column'>
            <div className='Hero-status'>
              <img className="status-meter" alt="status"
                src={status} />
              <div className='status-column'>
                <h2 className='meter-title'> 
                  working
                </h2>
                <h3 className='meter-subtitle'>
                  (full time 01.31-08.21)
                </h3>
                <Link to = '' className="meter-learnmore">
                  click me to learn more!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='down-arrow'>
        <IoIosArrowDropdown />
        </div>
      </div>
      
    </>
  )
}

export default HeroSection
