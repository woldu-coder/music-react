import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import "./Footer.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(()=>{
      axios.get("https://my-music-sfte.onrender.com/api/album")
      .then(res => setAlbums(res.data))
      .catch(error => console.log("errors: ",error))
  }, [])
  console.log("Albums: ", albums)
  return (
    <div className='footer'>
      <h2>Follow Us</h2>
      <div className='footer-container'>
        <ul className='footer-social'>
          <li><Link target='_blank' to="https://github.com/WolduGizaw/"><FaGithub style={{fontSize: '30'}}/> <p>Github</p></Link></li>  
          <li><Link target='_blank' to="https://github.com/woldu-coder/"><FaGithub style={{color: 'black', fontSize:'30',backgroundColor: "white", borderRadius:'50%'}}/> <p>2Git</p></Link></li>  
          <li><Link target='_blank' to="https://www.linkedin.com/in/woldu-gizaw/"><FaLinkedin style={{color: 'blue', fontSize:'30',backgroundColor: "white",borderRadius:'10%'}}/> <p>LinkedIn</p></Link></li>  
          <li><Link target='_blank' to="https://twitter.com/wolducs/"><FaTwitter style={{color: 'white', fontSize:'30',backgroundColor:"blue", borderRadius:'10%'}}/> <p>Twitter</p></Link></li>  
          <li><Link target='_blank' to="https://www.facebook.com/profile.php?id=100087848554500"><FaFacebook style={{color: 'blue', fontSize:'30',backgroundColor: "white", borderRadius:'50%'}}/> <p>Facebook</p></Link></li>  
        </ul>  
        <ul className='footer-container_middle'>
        <h2>List of Albums</h2>
        {albums.map(album =>{
          return <>
                  <li key={album.id}><Link to={`/music/${album.id}`}>{album.album_name}</Link ></li> 
                </>
          })} 
        </ul>  
        <ul className='footer-container_right'>
          <li><a href="#home">Sign Up first</a></li>  
          <li><a href="#home">Login  Then</a></li>  
        </ul>  
      </div>  
      <div className='footer-container_end'>
        <p>&copy;Copyright</p>
      </div>

    </div>
  )
}

export default Footer