import React from 'react'
import "./About.css";
import profile from "../../assets/images/profile.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <h1>About Us</h1>
        <div className='about_us'>

          <div className='about_us-image'>
            <img src={profile} alt='Profile' />
          </div>
          <div className='about_us-description'>
            <h3>woldu</h3>
              <p> 
                Hello! I'm Woldu. I graduated from Dire Dawa University with a Computer Science in 2023. Frankly speaking I like coding.
                Specially I like modern programming languages like Python, Dart and Java with their frameworks.
                <br /> For example: <br />
                <pre> 
                      Django - Python Framework - For Backend Development <br />
                      Flutter - Dart Framework  - For Mobile App Development <br />
                      React - JavaScript Framework - For Frontend Development <br />
                 </pre>
              </p>
            <div className='about_us-description_end'>
              <Link target='_blank' to="https://woldu.onrender.com" className='button btn__read_more'>Read More ...</Link>
            </div>
          </div>
        </div>
        <div className='about_us'>
          <div className='about_us-description'>
            <h2>woldu</h2>
            <p>During my life at University I did some projects at the university. I worked projects like: 
               
               <pre>
                Delivery Website Using Django which is Python Framework- <br /> -as a backend. <br />
                Mobile Application Using Flutter for Android and iOS. <br />
                Recently I have developed the educational or websites using- <br /> -React and Django as a backend.
               </pre>
              
               </p>
            <div className='about_us-description_end'>
              
              <Link className='button btn__read_more'>Read More ...</Link>
            </div>
          </div>
          <div className='about_us-image'>
            <img src={profile} alt='Profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About