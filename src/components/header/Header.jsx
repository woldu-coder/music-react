import React from 'react';
import './Header.css';
import Services from '../services/Services';
import globe from "../../assets/images/globe.png";
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import add from "../../assets/images/globe.png";
import profile from "../../assets/images/profile.png";
import { useAuth } from '../../utils/AuthContext';

const Header = () => {
  const {user} = useAuth()
  return (
    <>
      <div className='header' id='home'>
        <div className='header-container'>
          <div className='header-container_left'>
              <div className='animations'>
                  <div className='header__left_animate1'></div>
                  <div className='header__left_animate11'>
                    <img src={add} alt='email' />
                  </div>
                  <div className='header__left_animate12'>
                    <img src={profile} alt='google' />
                  </div>
                  <div className='header__left_animate2'></div>
              </div>

            <h1>Welcome to <ReactTypingEffect text={["SELECTING ALBUMS... ", "SELECTING MUSICS... ", "RATING MUSICS... "]} typingDelay={1} eraseSpeed={100} speed={100}  />  </h1>
            <h1>Welcome to Choosing Music To Enjoy with Our Music</h1>
            <h2>This site helps you to view musics with its album or the list of musics inside the album registered in to our site.</h2>
            
            <div className='header__left_animate13'></div>
            <div className='header__left_animate14'></div>
            
            <a href="#services"> Get Started Choosing </a>
            {user ? <h3>This Site is Developed with <ReactTypingEffect text={["Django as a backend", "React as a frontend", "Postgres Database"]} typingDelay={2} eraseDelay={1} speed={100} /></h3>
                  :
                    <h1>Please <Link to="/login" className='login__header'>Login</Link> get More about the lists of Musics in side Each Albums</h1>}
          </div>
          
          <div className='header-container_right'>
              <img src={globe} alt="Globe Indicator" />
              
          </div>
        </div>
      </div>
      <Services />
    </>
  )
}

export default Header