import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/music logo.jpg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useAuth } from '../../utils/AuthContext';

const Menu = () =>(
  <>
    <li className='todo__navbar-container_middle-list'><Link to="/">Home</Link></li>
    <li className='todo__navbar-container_middle-list'><Link to="/about">About</Link></li>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {user, logoutUser} = useAuth()

  
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__container_left'>
          <Link to="/"><img src={logo} alt="site logo" className='navbar-logo'/></Link>
        </div>
        <ul className='navbar__container_middle'>
          {user ? <Menu /> : <li className='todo__navbar-container_middle-list'><Link to="/">Home</Link></li>}
          
        </ul>
        <ul className='navbar__container_right'>
          {user ? <li className='navbar__container_right-login'><button type='button' onClick={logoutUser}>Logout</button></li> : <li className='navbar__container_right-login'><Link to="/login">Login</Link></li>}
          {user ? <p className='navbar__username'>{user.username === "woldu" ? <Link target='_blank' to="https://my-music-sfte.onrender.com/wolduadmin/">SuperAdmin</Link> : <p>Staff</p>}</p>: <li className='navbar__container_right-login'><Link to="/signup">Signup</Link></li>}
          
        </ul>
        <div className='navbar__menu'>
            { toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
          }
          { toggleMenu && (
            <div className='navbar__menu_links'>
              <Menu />
              <div className='navbar__menu_links-container'>
                <li className='navbar__container_right-login'>{user ? <Link to="/logout">SignOut</Link> : <Link to="/login">Login</Link>}</li>
                {user ?  <li></li>: <li className='navbar__container_right-login'><Link to="/signup">Sign Up</Link></li>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar