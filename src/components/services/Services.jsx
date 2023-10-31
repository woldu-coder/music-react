import React, { useState, useEffect } from 'react';
import './Services.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Services = () => {
  const [albums, setAlbums] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(()=>{
      axios.get("https://music-osvg.onrender.com/api/album")
      .then(res => setAlbums(res.data))
      .catch(error => console.log("errors: ",error))
  }, [])
  
  return (
    <div className='services' id='services'>
      <h2>Select your favourite Album</h2>
      <div className='services__search'>
          <input type='search' className='search__input' name='search' onChange={e=>{setSearchTerm(e.target.value)}} placeholder='Search the Albums ...' />
                
      </div>
      <div className='services-container'>
              {albums.filter((val)=>{
                  if(searchTerm === ""){return val;}
                  else if(val.album_name.toLowerCase().includes(searchTerm.toLowerCase())){return val;}
                  
                }).map((val, key)=>{return <><Album {...val} key={key} /></>;})}
                        
      </div>
    </div>
  )
}



const Album = (props)=>{
  const {id, album_name, artist_name, total_music} = props
  return (
  <>
    <Link to={`/music/${id}`} params={id} className="services-container_card">
          <div className="services-container_card-title">
           <h2>{album_name}</h2>
          </div>
          <div className="services-container_card-description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, dicta eligendi illum facilis corporis non repellendus quis quam soluta quod? Earum voluptas explicabo pariatur laborum veritatis fugiat exercitationem eaque id!</p>
          </div>
          <div className="services-container_card-footer">
              <ul className="services-container_card-footer_list">
                <li className="like button-card">{total_music}</li>
                <li className="comment button-card">{artist_name}</li>
                <li className="share button-card"><AiOutlineShareAlt/></li>
              </ul>
          </div>
        </Link>
  </>
  );
}


export default Services